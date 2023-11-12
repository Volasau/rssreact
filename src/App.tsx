import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Body from './components/body/Body';
import ErrorButton from './components/errorBoundary/btnTest';
import Header from './components/header/Header';
import {
  PlanetContext,
  planetContextState,
} from './components/context/Context';
import { CardProps } from './components/card/Card';

function App() {
  const [planetData, setPlanetData] = useState<CardProps[]>(
    planetContextState.planetData
  );

  return (
    <Router>
      <div className="wrapper">
        <Header />
        <PlanetContext.Provider value={{ planetData, setPlanetData }}>
          <Body />
        </PlanetContext.Provider>
        <ErrorButton />
      </div>
    </Router>
  );
}

export default App;
