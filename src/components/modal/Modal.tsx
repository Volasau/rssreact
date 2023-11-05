import './modal.css';

import React from 'react';

interface ModalProps {
  active: boolean;
  setActive: (active: boolean) => void;
  cardData: {
    name: string;
    climate: string;
    terrain: string;
    population: string;
  };
}

export const Modal: React.FC<ModalProps> = ({
  active,
  setActive,
  cardData,
}) => {
  return (
    <div
      className={`modal ${active ? 'active' : ''}`}
      onClick={() => setActive(false)}
    >
      <div className="modal__content" onClick={(e) => e.stopPropagation()}>
        <div className="close" onClick={() => setActive(false)}>
          Close
        </div>
        {cardData && (
          <div className="window__rigth">
            <div className="window__title">
              🌌
              <span className="window__span-title">{cardData.name}</span>
            </div>
            <div className="window__climate window__text">
              <span className="window__span">climate: </span>
              {cardData.climate}
            </div>
            <div className="window__terrain window__text">
              <span className="window__span">terrain: </span>
              {cardData.terrain}
            </div>
            <div className="window__population window__text">
              <span className="window__span">population: </span>
              {cardData.population}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Modal;
