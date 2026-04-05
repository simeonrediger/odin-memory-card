import './Scoreboard.css';

export default function Scoreboard({ currentScore, highScore }) {
  return (
    <table className="scoreboard">
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
