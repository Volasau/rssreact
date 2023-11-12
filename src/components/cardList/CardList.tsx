import React from 'react';
import Card, { CardProps } from '../card/Card';
import Loader from '../loader/Loader';
import './cardlist.css';
import { PlanetContextType } from '../context/Context';

interface CardListProps {
  isLoading: boolean;
  noResults: boolean;
  planetValue: PlanetContextType;
}

function CardList({ isLoading, noResults, planetValue }: CardListProps) {
  return (
    <div className="body__container">
      {isLoading ? (
        <Loader />
      ) : noResults ? (
        <div className="body__no-results">Nothing found</div>
      ) : (
        <>
          {planetValue?.planetData.map(
            (item: CardProps, index: React.Key | null | undefined) => (
              <Card
                key={index}
                name={item.name}
                climate={item.climate}
                terrain={item.terrain}
                population={item.population}
                url={item.url}
              />
            )
          )}
        </>
      )}
    </div>
  );
}

export default CardList;
