import { useState } from 'react';
import './card.css';
import Modal from '../modal/modal';

export interface CardProps {
  name: string;
  climate: string;
  terrain: string;
  population: string;
  url: string;
}

const Card: React.FC<CardProps> = (props: CardProps) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleCardClick = () => {
    setIsModalVisible(true);
  };

  return (
    <>
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
      <Modal
        active={isModalVisible}
        setActive={setIsModalVisible}
        cardData={props}
      />
    </>
  );
};

export default Card;
