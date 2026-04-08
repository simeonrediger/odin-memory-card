import './Scoreboard.css';

export default function Scoreboard({ currentScore, highScore, scoreDelta }) {
  let className = 'scoreboard';

  if (scoreDelta < 0) {
    className += ' score-decreased';
  } else if (scoreDelta > 0) {
    className += ' score-increased';
  }

  return (
    <table className={className}>
      <tbody>
        <tr>
          <th scope="row">High score</th>
          <td>{highScore}</td>
        </tr>
        <tr>
          <th scope="row">Current score</th>
          <td>{currentScore}</td>
        </tr>
      </tbody>
    </table>
  );
}
