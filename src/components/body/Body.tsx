import React, { useEffect, useState } from 'react';
import './body.css';
import Card, { CardProps } from '../card/Card';
import Loader from '../loader/Loader';
import getPlanets from '../../Api/fetch';

function Body() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [noResults, setNoResults] = useState(false);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [ispage, setIsPage] = useState(1);

  useEffect(() => {
    const savedQuery = localStorage.getItem('savedSearchQuery');
    if (savedQuery) {
      getSearch(savedQuery, page);
    } else {
      getSearch('', page);
    }
  }, [page]);

  function getSearch(searchQuery: string, page: number): void {
    setIsLoading(true);
    setNoResults(false);

    getPlanets(searchQuery, page)
      .then((data) => {
        setIsLoading(false);
        setData(data.results);
        setIsPage(page);
        setData(
          data.results.map((result: CardProps) => ({
            ...result,
            url: `${result.url}`,
          }))
        );
        setNoResults(data.results.length === 0);
        setTotalPages(Math.ceil(data.count / data.results.length));
      })
      .catch((error) => {
        setIsLoading(false);
        console.error('Error data:', error);
      });
  }

  const handleNextPage = () => {
    if (page < totalPages) {
      setPage(page + 1);
    }
  };

  const handlePreviousPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

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
          <>
            {data.map(
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
      <div className="pagination">
        <div className="btn__pagination">
          <button
            onClick={handlePreviousPage}
            disabled={page === 1}
            className="btn__pagin"
          >
            Prev
          </button>
          <div className="btn__page">{ispage}</div>
          <button
            onClick={handleNextPage}
            disabled={page === totalPages}
            className="btn__pagin"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default Body;
