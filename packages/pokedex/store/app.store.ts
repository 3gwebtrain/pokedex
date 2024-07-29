import { combineReducers, configureStore, EnhancedStore, Reducer } from "@reduxjs/toolkit";
import { CombinedReducerProps } from "pokedex@/interface/pokedex";
import { TypedUseSelectorHook, useSelector } from "react-redux";
import { pokedexSlice } from "./pokedexSlice/pokedexSlice";

const reducer: Reducer<CombinedReducerProps> = combineReducers({
  [pokedexSlice.name]: pokedexSlice.reducer,
});

export const AppStore: EnhancedStore<CombinedReducerProps> = configureStore({ reducer });

export type AppState = ReturnType<typeof AppStore.getState>;
export type AppDispatch = typeof AppStore.dispatch;
export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector;
