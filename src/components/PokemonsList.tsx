import { Pokemon } from "../schemas";
import PokemonListItem from "./PokemonListItem";

interface PokemonsListProps {
  pokemons: Pokemon[];
  onSelectPokemon: (pokemon: Pokemon) => void;
}

const PokemonsList = ({ pokemons, onSelectPokemon }: PokemonsListProps) => {
  return (
    <div className="gap-4 grid grid-cols-5 bg-slate-300 p-2">
      {pokemons.map((pokemon) => (
        <PokemonListItem
          key={pokemon.id}
          pokemon={pokemon}
          onClick={() => onSelectPokemon(pokemon)}
        />
      ))}
    </div>
  );
};

export default PokemonsList;
