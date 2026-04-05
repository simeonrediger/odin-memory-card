import './App.css';

import { useState } from 'react';

import Scoreboard from './features/scoreboard/Scoreboard.jsx';

function App() {
  const [currentScore, setCurrentScore] = useState(0);
  const [highScore, setHighScore] = useState(0);

  return (
    <div className="app">
      <Scoreboard currentScore={currentScore} highScore={highScore} />
    </div>
  );
}

export default App;
