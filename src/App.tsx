// import React,/* { useState }*/ from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
// import Body from './components/body/Body';
import ErrorButton from './components/errorBoundary/btnTest';
import Header from './components/header/Header';
// import {
//   PlanetContext,
//   planetContextState,
// } from './components/context/Context';
import { useGetOneQuery } from './Api/reduxApi';
import ReduxBody from './components/body/ReduxBody';

function App() {
  const { isError, isLoading } = useGetOneQuery({ searchQuery: '', page: 2 });

  if (isLoading) {
    return <div className="body-redux__lodaer">Redux loading...</div>;
  }
  if (isError) {
    return <p>Error fetching data</p>;
  }

  return (
    <Router>
      <div className="wrapper">
        <Header />
        <ReduxBody />
        {/* <PlanetContext.Provider value={{ planetData, setPlanetData }}> */}
        {/* <Body /> */}
        {/* </PlanetContext.Provider> */}
        <ErrorButton />
      </div>
    </Router>
  );
}

export default App;
