import pokedexSlice from "@/slices/pokedex.slice";
import { configureStore } from "@reduxjs/toolkit";

export const PokedexStore = configureStore({
  reducer: {
    pokedex: pokedexSlice,
  },
});

export type AppState = ReturnType<typeof PokedexStore.getState>;
export type AppDispatch = typeof PokedexStore.dispatch;
