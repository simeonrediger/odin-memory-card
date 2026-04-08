import './Card.css';

import { formatMonsterName } from './card-utils.js';

import ToggleMoreButton from './ToggleMoreButton.jsx';

const monsterImageSize = 280;

export default function Card({
  id,
  name,
  image,
  infoIconDataRole,
  description,
  descriptionShown,
}) {
  let className = 'card';

  if (descriptionShown) {
    className += ' description-shown';
  }

  name = formatMonsterName(name);

  return (
    <div className={className} data-card-id={id}>
      <button className="card-hitbox">
        <h2 className="card-title">{name}</h2>
        <img className="card-image" src={image} width={monsterImageSize} />
      </button>
      <ToggleMoreButton
        dataRole={infoIconDataRole}
        className="toggle-more-button"
        label="Show description"
        width="28"
        height="28"
      />
      {descriptionShown && (
        <div className="card-description">{description}</div>
      )}
    </div>
  );
}
