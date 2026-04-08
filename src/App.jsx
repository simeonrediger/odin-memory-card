import './App.css';

import { useEffect, useState } from 'react';

import {
  getRandomMonsterData,
  getRandomSample,
} from './features/cards/card-utils.js';

import Card from './features/cards/Card.jsx';
import Scoreboard from './features/scoreboard/Scoreboard.jsx';

function App() {
  const [cardDataList, setCardDataList] = useState([]);
  const [shownDescriptionId, setShownDescriptionId] = useState(null);

  const [memorizedCardIds, setMemorizedCardIds] = useState([]);
  const [currentScore, setCurrentScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [scoreDelta, setScoreDelta] = useState(0);

  useEffect(() => {
    const cardCount = 12;
    getRandomMonsterData(cardCount).then(setCardDataList);
  }, []);

  function handleCardClick(cardId, toggleMoreClicked) {
    if (toggleMoreClicked) {
      handleToggleMoreClick(cardId);
    } else {
      handlePlay(cardId);
      randomizeCardOrder();
    }
  }

  function handleToggleMoreClick(cardId) {
    const sameCard = cardId === shownDescriptionId;
    setShownDescriptionId(sameCard ? null : cardId);
  }

  function handlePlay(cardId) {
    if (memorizedCardIds.includes(cardId)) {
      resetGame();
    } else {
      setMemorizedCardIds([...memorizedCardIds, cardId]);
      updateScores(currentScore + 1);
    }
  }

  function resetGame() {
    setMemorizedCardIds([]);
    updateScores(0);
  }

  function updateScores(newCurrentScore) {
    setCurrentScore(newCurrentScore);
    setScoreDelta(newCurrentScore - currentScore);

    if (newCurrentScore > highScore) {
      setHighScore(newCurrentScore);
    }
  }

  function randomizeCardOrder() {
    const randomizedCardDataList = getRandomSample([...cardDataList]);
    setCardDataList(randomizedCardDataList);
  }

  return (
    <div className="app">
      <div className="app-content">
        <h1 className="page-title">Hyrule Memory Game</h1>
        <Scoreboard
          currentScore={currentScore}
          highScore={highScore}
          scoreDelta={scoreDelta}
        />
        <ul className="cards">
          {cardDataList.map(cardData => (
            <li key={cardData.id}>
              <Card
                {...cardData}
                onClick={handleCardClick}
                descriptionShown={cardData.id === shownDescriptionId}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
