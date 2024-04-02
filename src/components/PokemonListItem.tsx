import { Pokemon } from "../schemas";
import { TypeBadge } from "./TypeBadge";

interface PokemonListItemProps {
  pokemon: Pokemon;
  onClick: () => void;
}

const PokemonListItem = ({ pokemon, onClick }: PokemonListItemProps) => {
  return (
    <button className="flex flex-col gap-1" onClick={onClick}>
      <img
        src={pokemon.image ?? undefined}
        alt={pokemon.name}
        className="bg-slate-100 shadow-sm rounded-md object-cover"
      />
      <p className="text-black text-xs">#{pokemon.id}</p>
      <p className="text-black text-sm">{pokemon.name}</p>
      <TypeBadge type={pokemon.types[0]} size="small" />
    </button>
  );
};

export default PokemonListItem;
