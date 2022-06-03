import './App.css';
import { Routes, Route } from 'react-router-dom';
import Movies from './Movies';
import MovieForm from './MovieForm';

function App() {
  return (
    <>
      <Routes>
        <Route exact="true" path='/' element={<Movies/>} />
        <Route exact="true" path='/newmovie' element={<MovieForm/>} />
      </Routes>
    </>
  );
}

export default App;
