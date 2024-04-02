import { useQuery } from "@tanstack/react-query";
import { useNavigate, useParams } from "react-router-dom";
import { getPokemon } from "../api/getPokemon";
import { Pokemon } from "../schemas";
import PokemonPage from "./PokemonPage";

const Pokedex = () => {
  let { id } = useParams<string>();

  const navigate = useNavigate();

  const navigateTo = (newId: number) => {
    if (newId < 1) newId = 1025;
    if (newId > 1025) newId = 1;
    id = newId.toString();
    navigate(`/pokemons/${id}`);
  };

  const { isLoading, error, data } = useQuery({
    queryKey: ["pokemon", id],
    queryFn: () => (id ? getPokemon(id) : undefined),
    refetchOnWindowFocus: false,
    retry: 3,
    placeholderData: (prevPokemon) => prevPokemon,
  });

  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  return (
    <div className="flex justify-center w-full">
      <PokemonPage
        pokemon={data as Pokemon}
        nextPokemon={(id: number) => navigateTo(id + 1)}
        prevPokemon={(id: number) => navigateTo(id - 1)}
      />
    </div>
  );
};

export default Pokedex;
