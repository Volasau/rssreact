import React, { useEffect, useState } from 'react';
import './body.css';
import Card, { CardProps } from '../card/Card';
import Loader from '../loader/Loader';
import getPlanets from '../../Api/fetch';
import { useNavigate, useLocation } from 'react-router-dom';

function Body() {
  const navigate = useNavigate();
  const location = useLocation();

  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [noResults, setNoResults] = useState(false);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const savedQuery = localStorage.getItem('savedSearchQuery');
    const urlParams = new URLSearchParams(location.search);
    const pageParam = parseInt(urlParams.get('page') || '1');

    if (savedQuery) {
      getSearch(savedQuery, pageParam);
    } else {
      getSearch('', pageParam);
    }
  }, [location.search]);

  function getSearch(searchQuery: string, page: number): void {
    setIsLoading(true);
    setNoResults(false);

    getPlanets(searchQuery, page)
      .then((data) => {
        setIsLoading(false);
        setData(data.results);
        setPage(page);
        setTotalPages(Math.ceil(data.count / data.results.length));
        setNoResults(data.results.length === 0);
      })
      .catch((error) => {
        setIsLoading(false);
        console.error('Error data:', error);
      });
  }

  const handleNextPage = () => {
    const newPage = page + 1;
    if (newPage <= totalPages) {
      navigate(`?page=${newPage}`);
    }
  };

  const handlePreviousPage = () => {
    const newPage = page - 1;
    if (newPage >= 1) {
      navigate(`?page=${newPage}`);
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
          <div className="btn__page">{page}</div>
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
