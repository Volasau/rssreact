import React, { useState } from 'react';
import './body.css';
import Select from '../select/Select';
import ReduxCardList from '../cardList/reduxcardlist';
import { useGetOneQuery } from '../../Api/reduxApi';

function ReduxBody() {
  const [selectedLimit, setSelectedLimit] = useState(10);

  const savedQuery = localStorage.getItem('savedSearchQuery');

  const {
    data = [],
    isError,
    isLoading,
  } = useGetOneQuery({
    searchQuery: savedQuery,
    page: 1,
  });

  if (isLoading) {
    return <div className="body-redux__lodaer">Redux loading...</div>;
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
