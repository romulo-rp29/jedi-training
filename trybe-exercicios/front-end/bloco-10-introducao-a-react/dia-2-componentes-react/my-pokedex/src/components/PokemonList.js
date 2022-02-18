import React, { Component } from 'react';
import pokemons from '../data';
import Pokemon from './Pokemon';

class PokemonList extends Component {
    render(){
      return(
      <div className="pokeBackground">
        {
          pokemons.map((pokemon)=> {
            return  <Pokemon data={pokemon} key={pokemon.id}/>
          })
        }
      </div>)
    }
  }
  
  export default PokemonList;

