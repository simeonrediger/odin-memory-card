import './App.css';

import { useEffect, useState } from 'react';

import { getRandomMonsterData } from './features/cards/card-utils.js';

import Card from './features/cards/Card.jsx';
import Scoreboard from './features/scoreboard/Scoreboard.jsx';

const cardInfoIconDataRole = 'card-info-icon';

function App() {
  const [currentScore, setCurrentScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [cardDataList, setCardDataList] = useState([]);
  const [shownDescriptionId, setShownDescriptionId] = useState(null);

  useEffect(() => {
    const cardCount = 12;
    getRandomMonsterData(cardCount).then(setCardDataList);
  }, []);

  function handleCardsClick(event) {
    const cardInfoIconClicked = Boolean(
      event.target.closest(`[data-role="${cardInfoIconDataRole}"]`),
    );

    if (cardInfoIconClicked) {
      handleDescriptionClick(event);
    }
  }

  function handleDescriptionClick(event) {
    const cardId = +event.target.closest('[data-card-id]').dataset.cardId;
    const sameCard = cardId === shownDescriptionId;
    setShownDescriptionId(sameCard ? null : cardId);
  }

  return (
    <div className="app">
      <div className="app-content">
        <h1 className="page-title">Hyrule Memory Game</h1>
        <Scoreboard currentScore={currentScore} highScore={highScore} />
        <ul className="cards" onClick={handleCardsClick}>
          {cardDataList.map(cardData => (
            <li key={cardData.id}>
              <Card
                {...cardData}
                infoIconDataRole={cardInfoIconDataRole}
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
