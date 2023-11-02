import React, { useEffect, useState } from 'react';
import './body.css';
import Card, { CardProps } from '../card/Card';
import Loader from '../loader/Loader';
import getPlanets from '../../Api/fetch';

function Body() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [noResults, setNoResults] = useState(false);

  useEffect(() => {
    const savedQuery = localStorage.getItem('savedSearchQuery');
    if (savedQuery) {
      getSearch(savedQuery);
    } else {
      getSearch('');
    }
  }, []);

  function getSearch(searchQuery: string): void {
    setIsLoading(true);
    setNoResults(false);

    getPlanets(searchQuery)
      .then((data) => {
        setIsLoading(false);
        setData(data);
        setNoResults(data.length === 0);
      })
      .catch((error) => {
        setIsLoading(false);
        console.error('Error data:', error);
      });
  }

  return (
    <div className="wrapper">
      <div className="body__container">
        {isLoading ? (
          <div className="body__loader">
            <Loader />
          </div>
        ) : noResults ? (
          <div className="body__no-results">Nothing found</div>
        ) : (
          data.map((item: CardProps, index: React.Key | null | undefined) => (
            <Card
              key={index}
              name={item.name}
              climate={item.climate}
              terrain={item.terrain}
              population={item.population}
            />
          ))
        )}
      </div>
    </div>
  );
}

export default Body;
