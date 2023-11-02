import './card.css';

export interface CardProps {
  name: string;
  climate: string;
  terrain: string;
  population: string;
  url: string;
}

const Card = (props: CardProps) => {
  const handleCardClick = () => {
    console.log(props.url);
  };

  return (
    <div className="card__container" onClick={handleCardClick}>
      <div className="card__title text">
        🌌
        <span className="card__span-title">{props.name}</span>
      </div>
      <div className="card__climate text">
        <span className="card__span">climate: </span> {props.climate}
      </div>
      <div className="card__terrain text">
        <span className="card__span">terrain: </span>
        {props.terrain}
      </div>
      <div className="card__population text">
        <span className="card__span">population: </span>
        {props.population}
      </div>
    </div>
  );
};

export default Card;
