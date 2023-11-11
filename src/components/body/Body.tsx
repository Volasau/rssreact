import React, { useContext, useEffect, useState } from 'react';
import './body.css';
import { CardProps } from '../card/Card';
import getPlanets, { getAllPlanets } from '../../Api/fetch';
import { useNavigate, useLocation } from 'react-router-dom';
import Select from '../select/Select';
import Pagination from '../pagination/Pagination';
import CardList from '../cardList/CardList';
import { PlanetContext, PlanetContextType } from '../context/Context';

function Body() {
  const navigate = useNavigate();
  const location = useLocation();

  const { planetData, setPlanetData } =
    useContext<PlanetContextType>(PlanetContext);
  const [isLoading, setIsLoading] = useState(false);
  const [noResults, setNoResults] = useState(false);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [selectedLimit, setSelectedLimit] = useState(10);

  useEffect(() => {
    const getSearch = (
      searchQuery: string,
      page: number,
      selectedLimit: number
    ): void => {
      setIsLoading(true);
      setNoResults(false);

      if (selectedLimit === 10) {
        getPlanets(searchQuery, page)
          .then((data) => {
            setIsLoading(false);
            setPlanetData(data.results);
            setPage(page);
            setTotalPages(Math.ceil(data.count / data.results.length));
            setNoResults(data.results.length === 0);
          })
          .catch((error) => {
            setIsLoading(false);
            console.error('Error data:', error);
          });
      } else if (selectedLimit === 60) {
        getAllPlanets(searchQuery)
          .then((data) => {
            const cardData: CardProps[] = data.map((planet) => ({
              name: planet.name,
              climate: planet.climate,
              terrain: planet.terrain,
              population: planet.population,
              url: planet.url,
            }));
            setIsLoading(false);
            setPlanetData(cardData);
            setNoResults(cardData.length === 0);
          })
          .catch((error) => {
            setIsLoading(false);
            console.error('Error data:', error);
          });
      }
    };

    const savedQuery = localStorage.getItem('savedSearchQuery');
    const urlParams = new URLSearchParams(location.search);
    const pageParam = parseInt(urlParams.get('page') || '1');

    if (savedQuery) {
      getSearch(savedQuery, pageParam, selectedLimit);
    } else {
      getSearch('', pageParam, selectedLimit);
    }
  }, [
    location.search,
    selectedLimit,
    setPlanetData,
    setPage,
    setTotalPages,
    setIsLoading,
    setNoResults,
  ]);

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

  const handleLimitChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newLimit = parseInt(event.target.value);
    setSelectedLimit(newLimit);
  };

  return (
    <div className="wrapper">
      <CardList
        isLoading={isLoading}
        noResults={noResults}
        planetValue={{ planetData, setPlanetData }}
      />
      <Pagination
        page={page}
        totalPages={totalPages}
        handlePreviousPage={handlePreviousPage}
        handleNextPage={handleNextPage}
        selectedLimit={selectedLimit}
      />
      <Select
        selectedLimit={selectedLimit}
        handleLimitChange={handleLimitChange}
      />
    </div>
  );
}

export default Body;
