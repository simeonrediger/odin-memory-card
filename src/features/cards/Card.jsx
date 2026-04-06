import './Card.css';

import formatMonsterName from './format-monster-name.js';

export default function Card({ name, image, description }) {
  name = formatMonsterName(name);

  return (
    <div className="card">
      <h2 className="card-title">{name}</h2>
      <img src={image}></img>
      <div>{description}</div>
    </div>
  );
}
