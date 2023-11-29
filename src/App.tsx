import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Error from './pages/Error/Error';
import FormHook from './pages/FormHook/FormHook';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/formhook" element={<FormHook />} />

      <Route path="*" element={<Error />} />
    </Routes>
  );
}

export default App;
