import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const pokemonApi = createApi({
  reducerPath: "pokemonApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://pokeapi.co/api/v2/" }),
  endpoints: (build) => ({
    listOfPokemons: build.query({
      query: () => "pokemon?limit=200",
    }),
    pokemonDetail: build.query({
      query: ({ name }): string => `pokemon/${name}`,
    }),
  }),
});

export const { useListOfPokemonsQuery, usePokemonDetailQuery } = pokemonApi;
