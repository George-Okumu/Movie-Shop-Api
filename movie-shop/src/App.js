import './App.css';
import { Routes, Route } from 'react-router-dom';
import Movies from './Movies';

function App() {
  return (
    <>
      <Routes>
        <Route exact="true" path='/home' element={<Movies/>} />
      </Routes>
    </>
  );
}

export default App;
