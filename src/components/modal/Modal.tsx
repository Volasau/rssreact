import React from 'react';
import './modal.css';

export interface ModalProps {
  active: boolean;
  setActive: (active: boolean) => void;
  data: {
    name: string;
    climate: string;
    terrain: string;
    population: string;
    gravity: string;
    diameter: string;
    orbital_period: string;
    url: string;
  } | null;
}

const Modal: React.FC<ModalProps> = ({ active, setActive, data }) => {
  return (
    <div
      className={`modal ${active ? 'active' : ''}`}
      onClick={() => setActive(false)}
    >
      <div className="modal__content" onClick={(e) => e.stopPropagation()}>
        <div className="close" onClick={() => setActive(false)}>
          Close
        </div>

        <div className="window__rigth">
          <div className="window__title">
            🌌
            <span className="window__span-title">
              {data?.name || 'Unknown'}
            </span>
          </div>
          <div className="window__climate window__text">
            <span className="window__span">climate: </span>
            {data?.climate || 'Unknown'}
          </div>
          <div className="window__terrain window__text">
            <span className="window__span">terrain: </span>
            {data?.terrain || 'Unknown'}
          </div>
          <div className="window__population window__text">
            <span className="window__span">population: </span>
            {data?.population || 'Unknown'}
          </div>
          <div className="window__gravity window__text">
            <span className="window__span">gravity: </span>
            {data?.gravity || 'Unknown'}
          </div>
          <div className="window__diameter window__text">
            <span className="window__span">diameter: </span>
            {data?.diameter || 'Unknown'}
          </div>
          <div className="window__orbital-period window__text">
            <span className="window__span">orbital period: </span>
            {data?.orbital_period || 'Unknown'}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
