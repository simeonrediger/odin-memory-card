import './Card.css';

import { formatMonsterName } from './card-utils.js';

export default function Card({
  id,
  name,
  image,
  description,
  descriptionDataRole,
  descriptionShown,
}) {
  name = formatMonsterName(name);

  return (
    <div className="card" data-card-id={id}>
      <h2 className="card-title">{name}</h2>
      <img src={image}></img>
      <div data-role={descriptionDataRole}>
        {descriptionShown ? description : 'Click to see more'}
      </div>
    </div>
  );
}
