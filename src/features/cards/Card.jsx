import './Card.css';

import formatMonsterName from './format-monster-name.js';

export default function Card({ name, image, description }) {
  name = formatMonsterName(name);

  return (
    <div className="card">
      <div className="monster-name">{name}</div>
      <img src={image}></img>
      <div>{description}</div>
    </div>
  );
}
