import React, { useState } from 'react';
import './body.css';
import Select from '../select/Select';
import ReduxCardList from '../cardList/reduxcardlist';
import ReduxLoader from '../../components/loader/ReduxLoader';
import { useGetOneQuery } from '../../Api/reduxApi';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { RootState } from '../../redux/store';

function ReduxBody() {
  const [selectedLimit, setSelectedLimit] = useState(10);
  const searchQuery = useSelector(
    (state: RootState) => state.planet.searchQuery
  );
  console.log(searchQuery);
  const savedQuery = localStorage.getItem('savedSearchQuery');

  const {
    data = [],
    isError,
    isLoading,
  } = useGetOneQuery({
    searchQuery: savedQuery,
    page: 1,
  });
  console.log(data);

  if (isLoading) {
    return (
      <div className="body-redux__lodaer">
        Redux loading...
        <ReduxLoader />
      </div>
    );
  }
  if (isError) {
    return <p>Error fetching data</p>;
  }

  const handleLimitChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newLimit = parseInt(event.target.value);
    setSelectedLimit(newLimit);
  };

  return (
    <div className="wrapper">
      <ReduxCardList planetValue={data.results} />

      <Select
        selectedLimit={selectedLimit}
        handleLimitChange={handleLimitChange}
      />
    </div>
  );
}

export default ReduxBody;
