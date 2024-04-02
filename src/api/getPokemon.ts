import axios from "axios";
import { pokemonSchema } from "../schemas";

export const getPokemon = async (id: string) => {
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
  const response = await axios.get(url);

  return pokemonSchema.parse(response.data);
};

interface GetPokemonsProps {
  offset: number;
  limit: number;
}

export const getPokemons = async ({ offset, limit }: GetPokemonsProps) => {
  const ids = Array.from({ length: limit }, (_, index) => index + offset + 1);

  return await Promise.all(ids.map((id) => getPokemon(`${id}`)));
};
