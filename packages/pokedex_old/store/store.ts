import pokedexSlice from "@/slices/pokedex.slice";
import { AnyAction, combineReducers, configureStore } from "@reduxjs/toolkit";
import { createWrapper, HYDRATE } from "next-redux-wrapper";

const reducerCombined = combineReducers({
  [pokedexSlice.name]: pokedexSlice,
});

const reducer = (state: ReturnType<typeof reducerCombined>, action: AnyAction) => {
  if (action.type === HYDRATE) {
    const nextState = {
      ...state,
      ...action.payload,
    };
    return nextState;
  } else {
    return reducerCombined(state, action);
  }
};

export const makeStore = () => configureStore({ reducer });
type Store = ReturnType<typeof makeStore>;

export type AppDispatch = Store["dispatch"];
export type RootState = ReturnType<Store["getState"]>;

export const wrapper = createWrapper(makeStore);
