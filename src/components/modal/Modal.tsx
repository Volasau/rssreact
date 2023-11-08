import { getPlanet } from '../../Api/fetch';
import Loader from '../loader/Loader';
import './modal.css';

import React, { useEffect, useState } from 'react';

interface ModalProps {
  active: boolean;
  setActive: (active: boolean) => void;
  id: number | null;
}

export interface PlanetData {
  name: string;
  climate: string;
  terrain: string;
  population: string;
  gravity: string;
  diameter: string;
  orbital_period: string;
  url: string;
}

export const Modal: React.FC<ModalProps> = ({ active, setActive, id }) => {
  const [data, setData] = useState<PlanetData | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (id !== null && active) {
      setIsLoading(true);
      getPlanet(id)
        .then((result) => {
          setData(result);
        })
        .catch((error) => {
          console.error(error);
        })
        .finally(() => {
          setIsLoading(false);
        });
    }
  }, [id, active]);

  return (
    <div
      className={`modal ${active ? 'active' : ''}`}
      onClick={() => setActive(false)}
    >
      <div className="modal__content" onClick={(e) => e.stopPropagation()}>
        <div className="close" onClick={() => setActive(false)}>
          Close
        </div>
        {isLoading ? (
          <Loader />
        ) : (
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
        )}
      </div>
    </div>
  );
};

export default Modal;
