import './Scoreboard.css';

export default function Scoreboard() {
  return (
    <table className="scoreboard">
      <tbody>
        <tr>
          <th scope="row">High score</th>
          <td>0</td>
        </tr>
        <tr>
          <th scope="row">Current score</th>
          <td>0</td>
        </tr>
      </tbody>
    </table>
  );
}
