import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import PokemonDetails from './components/PokemonDetails';
import NotFound from './components/NotFound';
import Pokedex from './components/Pokedex';
import Header from './components/Header';
import About from './components/About';
import pokemons from './data';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" render={ () => <Pokedex pokemons={ pokemons } /> } />
          <Route path="/pokemons/:id" render={ (props) =>  <PokemonDetails { ...props } pokemons={ pokemons }/>} />
          <Route path="/about" component={ About } />
          <Route component={ NotFound } />
        </Switch>
        
      </div>
    </BrowserRouter>
  );
}

export default App;