import { initialPokeMons, pokemonsType } from "@/interfaces/pokemon.interface";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchPokedex = createAsyncThunk("pokemon/getAllPokemon", async () => {
  const response = await fetch("https://pokeapi.co/api/v2/pokemon");
  const pokemons = response.json();
  return pokemons;
});

const initialState: pokemonsType = {
  count: initialPokeMons.count,
  pokemons: initialPokeMons.pokemons,
};
const pokedexSlice = createSlice({
  name: "pokedex",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchPokedex.fulfilled, (state, action) => {
      state.pokemons.push(...action.payload);
    });
  },
});
export const {} = pokedexSlice.actions;
export default pokedexSlice.reducer;
