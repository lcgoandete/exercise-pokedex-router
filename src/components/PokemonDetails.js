import React from 'react';
import Pokemon from './Pokemon';

class PokemonDetails extends React.Component {
  constructor(props) {
		super(props)
		this.pokemonsFilter = this.pokemonsFilter.bind(this);
		this.pokemonMap = this.pokemonMap.bind(this);
	}

	pokemonsFilter() {
		const { pokemons } = this.props;
		const { id } = this.props.match.params;
		return pokemons.find((pokemon) => pokemon.id === +(id));
	}

	pokemonMap() {
		const { foundAt } = this.pokemonsFilter()
		return foundAt.map(({ location, map }) => <div key={ location }> <p>{location}</p> <img src={map} alt="mapa" /></div>);
	}

	render() {
		const pokemon = this.pokemonsFilter();
		const location = this.pokemonMap();
		return(
			<div>
				<Pokemon pokemon={ pokemon }/>
				<div className="pokemon">
					<p>Sumário</p>
					<p>{pokemon.summary}</p>
				</div>
				<div className="pokemon">
					<p>Possíveis localizações.</p>
					{ location }
				</div>
			</div>
		)
	}
}

export default PokemonDetails;