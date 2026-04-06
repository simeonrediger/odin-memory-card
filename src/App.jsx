import './App.css';

import { useEffect, useState } from 'react';

import getRandomMonsterData from './features/cards/get-random-monster-data.js';

import Card from './features/cards/Card.jsx';
import Scoreboard from './features/scoreboard/Scoreboard.jsx';

function App() {
  const [currentScore, setCurrentScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [cards, setCards] = useState([]);

  useEffect(() => {
    const cardCount = 12;
    getRandomMonsterData(cardCount).then(setCards);
  }, []);

  return (
    <div className="app">
      <h1 className="page-title">Hyrule Memory Game</h1>
      <Scoreboard currentScore={currentScore} highScore={highScore} />
      <ul className="cards">
        {cards.map(card => (
          <li key={card.id}>
            <Card {...card} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
