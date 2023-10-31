import './App.css';
import Body from './components/body/Body';
import ErrorButton from './components/errorBoundary/btnTest';
import Header from './components/header/Header';

function App() {
  return (
    <div className="wrapper">
      <Header />
      <Body />
      <ErrorButton />
    </div>
  );
}

export default App;
