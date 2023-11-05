import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Body from './components/body/Body';
import ErrorButton from './components/errorBoundary/btnTest';
import Header from './components/header/Header';

function App() {
  return (
    <Router>
      <div className="wrapper">
        <Header />
        <Body />
        <ErrorButton />
      </div>
    </Router>
  );
}

export default App;
