import React, { useState } from 'react';
import { getPlanet } from '../../Api/fetch';
import Loader from '../loader/Loader';
import './card.css';
import Modal, { ModalProps } from '../modal/Modal';

export interface CardProps {
  name: string;
  climate: string;
  terrain: string;
  population: string;
  url: string;
}

const Card: React.FC<CardProps> = (props: CardProps) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [modalData, setModalData] = useState<ModalProps['data'] | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleCardClick = async () => {
    setIsLoading(true);
    try {
      const result = await getPlanet(props.url);
      setModalData(result);
    } catch (error) {
      console.error(error);
    } finally {
      setIsModalVisible(true);
      setIsLoading(false);
    }
  };

  return (
    <>
      <div className="card__container" onClick={handleCardClick}>
        <div className="card__title text">
          🌌
          <span className="card__span-title card__name">{props.name}</span>
        </div>
        <div className="card__climate text">
          <span className="card__span card__climate">climate: </span>{' '}
          {props.climate}
        </div>
        <div className="card__terrain text">
          <span className="card__span card__terrain">terrain: </span>
          {props.terrain}
        </div>
        <div className="card__population text">
          <span className="card__span">population: </span>
          {props.population}
        </div>
      </div>
      {isLoading ? (
        <Loader />
      ) : (
        <Modal
          active={isModalVisible}
          setActive={setIsModalVisible}
          data={modalData}
        />
      )}
    </>
  );
};

export default Card;
