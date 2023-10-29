import './App.css';
import Body from './components/body/Body';
import ErrorBoundary from './components/errorBoundary/ErrorBoundary';
import ErrorButton from './components/errorBoundary/btnTest';
import Header from './components/header/Header';

function App() {
  return (
    <ErrorBoundary>
      <div className="wrapper">
        <Header />
        <Body />
        <ErrorButton />
      </div>
    </ErrorBoundary>
  );
}

export default App;
