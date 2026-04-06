import './App.css';

import { useEffect, useState } from 'react';

import getRandomMonsterData from './features/cards/get-random-monster-data.js';

import Card from './features/cards/Card.jsx';
import Scoreboard from './features/scoreboard/Scoreboard.jsx';

function App() {
  const [currentScore, setCurrentScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [cardDataList, setCardDataList] = useState([]);

  useEffect(() => {
    const cardCount = 12;
    getRandomMonsterData(cardCount).then(setCardDataList);
  }, []);

  return (
    <div className="app">
      <h1 className="page-title">Hyrule Memory Game</h1>
      <Scoreboard currentScore={currentScore} highScore={highScore} />
      <ul className="cards">
        {cardDataList.map(cardData => (
          <li key={cardData.id}>
            <Card {...cardData} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
