import formatMonsterName from './format-monster-name.js';

export default function Card({ name, image, description }) {
  return (
    <div className="card">
      <div>{formatMonsterName(name)}</div>
      <img src={image}></img>
      <div>{description}</div>
    </div>
  );
}
