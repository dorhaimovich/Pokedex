import { Pokemon } from "../schemas";
import PokemonDetailsCard from "./PokemonDetailsCard";
import PokemonPageHeader from "./PokemonPageHeader";
import PokemonWeaknesses from "./PokemonWeaknesses";
import { TypeBadge } from "./TypeBadge";

interface PokemonPageProps {
  pokemon: Pokemon;
  nextPokemon: (id: number) => void;
  prevPokemon: (id: number) => void;
}

const PokemonPage = ({
  pokemon,
  nextPokemon,
  prevPokemon,
}: PokemonPageProps) => {
  return (
    <div className="flex flex-col items-center bg-slate-100 p-4 max-w-[800px]">
      <PokemonPageHeader
        pokemon={pokemon}
        nextPokemon={nextPokemon}
        prevPokemon={prevPokemon}
      />
      <div className="flex justify-left gap-2 w-128">
        <img
          src={pokemon.image ?? undefined}
          alt={pokemon.name}
          className="gap-2 bg-slate-200 shadow-sm rounded-md w-64 object-cover"
        />
        <div className="flex flex-col justify-start w-64">
          <PokemonDetailsCard pokemon={pokemon} />
          <div className="flex flex-col mt-2 w-full">
            <h1 className="text-black text-sm">Types</h1>
            <div className="flex items-center gap-1 mt-1">
              {pokemon.types.map((type) => (
                <TypeBadge key={type} type={type} />
              ))}
            </div>
            <PokemonWeaknesses weaknesses={pokemon.weaknesses} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PokemonPage;
