// CardList.tsx
import React from 'react';
import Card, { CardProps } from '../card/Card';
import Loader from '../loader/Loader';

interface CardList {
  isLoading: boolean;
  noResults: boolean;
  data: CardProps[];
}

function CardList({ isLoading, noResults, data }: CardList) {
  return (
    <div className="body__container">
      {isLoading ? (
        <Loader />
      ) : noResults ? (
        <div className="body__no-results">Nothing found</div>
      ) : (
        <>
          {data.map((item: CardProps, index: React.Key | null | undefined) => (
            <Card
              key={index}
              name={item.name}
              climate={item.climate}
              terrain={item.terrain}
              population={item.population}
              url={item.url}
            />
          ))}
        </>
      )}
    </div>
  );
}

export default CardList;
