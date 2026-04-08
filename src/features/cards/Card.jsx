import './Card.css';

import { formatMonsterName } from './card-utils.js';

import ToggleMoreButton from './ToggleMoreButton.jsx';

const monsterImageSize = 280;

export default function Card({
  id,
  name,
  image,
  description,
  onClick,
  descriptionShown,
}) {
  let className = 'card';

  if (descriptionShown) {
    className += ' description-shown';
  }

  name = formatMonsterName(name);

  function handleClick(toggleMoreClicked) {
    onClick(id, toggleMoreClicked);
  }

  function handleCardClick() {
    handleClick(false);
  }

  function handleToggleMoreClick() {
    handleClick(true);
  }

  return (
    <div className={className}>
      <button className="card-hitbox" onClick={handleCardClick}>
        <h2 className="card-title">{name}</h2>
        <img className="card-image" src={image} width={monsterImageSize} />
      </button>
      <ToggleMoreButton
        className="toggle-more-button"
        label="Show description"
        width="28"
        height="28"
        onClick={handleToggleMoreClick}
      />
      <div className="card-description">{description}</div>
    </div>
  );
}
