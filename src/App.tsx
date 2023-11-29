import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Error from './pages/Error/Error';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="*" element={<Error />} />
    </Routes>
  );
}

export default App;
