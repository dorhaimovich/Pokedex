import { useInfiniteQuery } from "@tanstack/react-query";
import { getPokemons } from "../api/getPokemon";
import PokemonsList from "./PokemonsList";
import { useNavigate } from "react-router-dom";

const PokemonsListPage = () => {
  const pageSize = 20;

  const { data, isLoading, error, fetchNextPage } = useInfiniteQuery({
    initialPageParam: 0,
    queryKey: ["pokemons"],
    queryFn: ({ pageParam: offset }) =>
      getPokemons({ offset, limit: pageSize }),
    getNextPageParam: (_, allPages) => allPages.length * pageSize,
  });
  const navigate = useNavigate();

  const all = data?.pages.flat() ?? [];

  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  return (
    <>
      <div className="flex flex-col items-center gap-2">
        <h1 className="mb-5 font-bold text-3xl">Pokemons</h1>
        <PokemonsList
          pokemons={all}
          onSelectPokemon={({ id }) => navigate(`./${id}`)}
        />
        <button
          onClick={() => {
            fetchNextPage();
            console.log("params2");
          }}
          className="bg-blue-500 hover:bg-blue-700 mb-5 px-4 py-2 rounded font-bold text-white"
        >
          Load More
        </button>
      </div>
    </>
  );
};

export default PokemonsListPage;
