import { Pokemon } from "../schemas";
import PokemonDetail from "./PokemonDetail";

interface PokemonDetailsCardProps {
  pokemon: Pokemon;
}

const PokemonDetailsCard = ({ pokemon }: PokemonDetailsCardProps) => {
  return (
    <div className="flex flex-wrap bg-[#30a7d7] shadow-md rounded-md w-full">
      <PokemonDetail title="ID" value={pokemon.id.toString()} />
      <PokemonDetail title="Height" value={`${pokemon.height} dm`} />
      <PokemonDetail title="Weight" value={`${pokemon.weight} kg`} />
    </div>
  );
};

export default PokemonDetailsCard;
