import { ArrowBigLeft, ArrowBigRight } from "lucide-react";
import IconButton from "./IconButton";
import { Pokemon } from "../schemas";

interface PokemonPageHeaderProps {
  pokemon: Pokemon;
  nextPokemon: (id: number) => void;
  prevPokemon: (id: number) => void;
}

const PokemonPageHeader = ({
  pokemon,
  nextPokemon,
  prevPokemon,
}: PokemonPageHeaderProps) => {
  return (
    <div className="flex justify-between mb-5 w-5/6">
      <IconButton
        icon={<ArrowBigLeft />}
        onClick={() => prevPokemon(pokemon.id)}
      />
      <h1 className="w-60 font-bold text-3xl text-center">{pokemon.name}</h1>
      <IconButton
        icon={<ArrowBigRight />}
        onClick={() => nextPokemon(pokemon.id)}
      />
    </div>
  );
};

export default PokemonPageHeader;
