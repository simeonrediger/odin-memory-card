import './App.css';

import { useEffect, useState } from 'react';

import getRandomMonsterData from './features/cards/get-random-monster-data.js';

import Card from './features/cards/Card.jsx';
import Scoreboard from './features/scoreboard/Scoreboard.jsx';

const descriptionDataRole = 'description';

function App() {
  const [currentScore, setCurrentScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [cardDataList, setCardDataList] = useState([]);
  const [shownDescriptionId, setShownDescriptionId] = useState(null);

  useEffect(() => {
    const cardCount = 12;
    getRandomMonsterData(cardCount).then(setCardDataList);
  }, []);

  function handleClick(event) {
    const descriptionClicked = Boolean(
      event.target.closest(`[data-role="${descriptionDataRole}"]`),
    );

    if (descriptionClicked) {
      handleDescriptionClick(event);
    }
  }

  function handleDescriptionClick(event) {
    const cardId = +event.target.closest('[data-card-id]').dataset.cardId;
    const sameCard = cardId === shownDescriptionId;
    setShownDescriptionId(sameCard ? null : cardId);
  }

  return (
    <div className="app" onClick={handleClick}>
      <h1 className="page-title">Hyrule Memory Game</h1>
      <Scoreboard currentScore={currentScore} highScore={highScore} />
      <ul className="cards">
        {cardDataList.map(cardData => (
          <li key={cardData.id}>
            <Card
              {...cardData}
              descriptionDataRole={descriptionDataRole}
              descriptionShown={cardData.id === shownDescriptionId}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
