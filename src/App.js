import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Pokedex from './components/Pokedex';
import About from './components/About';
import Header from './components/Header';
import pokemons from './data';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Route exact path="/" render={ () => <Pokedex pokemons={ pokemons } /> } />
        <Route path="/about" component={ About } />
        
      </div>
    </BrowserRouter>
  );
}

export default App;