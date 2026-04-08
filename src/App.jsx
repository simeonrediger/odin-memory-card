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

  useEffect(() => {
    const cardCount = 12;
    getRandomMonsterData(cardCount).then(setCardDataList);
  }, []);

  function handleCardClick(cardId, toggleMoreClicked) {
    if (toggleMoreClicked) {
      handleToggleMoreClick(cardId);
    } else {
      addToMemory(cardId);
      randomizeCardOrder();
    }
  }

  function handleToggleMoreClick(cardId) {
    const sameCard = cardId === shownDescriptionId;
    setShownDescriptionId(sameCard ? null : cardId);
  }

  function addToMemory(cardId) {
    if (memorizedCardIds.includes(cardId)) {
      setMemorizedCardIds([]);
      setCurrentScore(0);
    } else {
      setMemorizedCardIds([...memorizedCardIds, cardId]);
      const newCurrentScore = currentScore + 1;
      setCurrentScore(newCurrentScore);

      if (newCurrentScore > highScore) {
        setHighScore(newCurrentScore);
      }
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
        <Scoreboard currentScore={currentScore} highScore={highScore} />
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
