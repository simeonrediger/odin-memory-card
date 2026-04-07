import './Card.css';

import { formatMonsterName } from './card-utils.js';

import CardInfoButton from './CardInfoButton.jsx';

const monsterImageSize = 280;

export default function Card({
  id,
  name,
  image,
  infoIconDataRole,
  description,
  descriptionShown,
}) {
  name = formatMonsterName(name);

  return (
    <div className="card" data-card-id={id}>
      <h2 className="card-title">{name}</h2>
      <div className="card-image-and-info-button">
        <img className="card-image" src={image} width={monsterImageSize}></img>
        <CardInfoButton
          dataRole={infoIconDataRole}
          className="card-info-button"
          label="Show description"
          width="28"
          height="28"
        />
      </div>
      {descriptionShown && <div>{description}</div>}
    </div>
  );
}
