import React from 'react';
import MovieList from './components/MovieList';
import Search from './components/Search';
import './App.css';

function App() {
  return (
    <div className="App">
      <Search />
      <MovieList />
    </div>
  );
}

export default App;