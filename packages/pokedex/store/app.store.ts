import { combineReducers, configureStore, Reducer } from "@reduxjs/toolkit";
import { createWrapper, MakeStore } from "next-redux-wrapper";
import { CombinedReducerProps } from "pokedex@/interface/pokedex";
import { TypedUseSelectorHook, useSelector } from "react-redux";
import { pokedexSlice } from "./pokedexSlice/pokedexSlice";

const reducer: Reducer<CombinedReducerProps> = combineReducers({
  [pokedexSlice.name]: pokedexSlice.reducer,
});

export const AppStore: MakeStore<any> = () => configureStore({ reducer });
type AppWrapperStore = ReturnType<typeof AppStore>;
export type AppState = ReturnType<AppWrapperStore["getState"]>;
// export type AppDispatch = typeof AppStore.dispatch;
export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector;
export const wrapper = createWrapper<AppWrapperStore>(AppStore, { debug: true });
