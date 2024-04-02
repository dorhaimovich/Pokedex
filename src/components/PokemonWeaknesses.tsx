import { PokemonTypeSchema } from "../schemas";
import { TypeBadge } from "./TypeBadge";

interface PokemonWeaknessesProps {
  weaknesses: PokemonTypeSchema[];
}

const PokemonWeaknesses = ({ weaknesses }: PokemonWeaknessesProps) => {
  return (
    <div className="flex flex-col mt-2">
      <h1 className="text-black text-sm">Weaknesses</h1>
      <div className="justify-start gap-2 grid grid-cols-3 w-full">
        {weaknesses.map((type) => (
          <TypeBadge key={type} type={type} />
        ))}
      </div>
    </div>
  );
};

export default PokemonWeaknesses;
