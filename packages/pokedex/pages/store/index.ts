import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { createWrapper, MakeStore } from "next-redux-wrapper";
import { pokemonApi } from "../api";
import { pokemonSlice } from "./slices/pokemon.slice";

const reducers = {
  [pokemonSlice.name]: pokemonSlice.reducer,
  [pokemonApi.reducerPath]: pokemonApi.reducer,
};

const reducer = combineReducers(reducers);

const makeStore: MakeStore<any> = () => configureStore({ reducer, middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(pokemonApi.middleware) });
type AppStore = ReturnType<typeof makeStore>;
export type AppState = ReturnType<AppStore["getState"]>;
export const wrapper = createWrapper<AppStore>(makeStore, { debug: true });
