interface PokemonDetailProps {
  title: string;
  value: string;
}

const PokemonDetail = ({ title, value }: PokemonDetailProps) => {
  return (
    <div className="p-2 w-1/2">
      <p className="mb-1 font-thin text-sm text-white">{title}</p>
      <p>{value}</p>
    </div>
  );
};

export default PokemonDetail;
