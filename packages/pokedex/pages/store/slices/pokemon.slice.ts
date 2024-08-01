import { createSlice } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";
import { PokemonState } from "./../../types/pokemon.type";

const initialPokemonState: PokemonState = {
  clientData: { pokemons: [], welcomeMsg: "Welcome to Pokemon List" },
};

export const pokemonSlice = createSlice({
  name: "slicePokemon",
  initialState: initialPokemonState,
  reducers: {
    [HYDRATE](state: PokemonState, { payload }) {
      return { ...state, ...payload.system };
    },
  },
});
