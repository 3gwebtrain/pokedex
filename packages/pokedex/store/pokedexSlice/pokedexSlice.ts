import { createSlice, PayloadAction, Reducer, Slice } from "@reduxjs/toolkit";
import { PokedexDefaultState, PokedexSliceProps } from "pokedex@/interface/pokedex";

export const PokedexInitialState: PokedexSliceProps = {
  name: PokedexDefaultState.name,
  count: PokedexDefaultState.count,
};

export const pokedexSlice: Slice<PokedexSliceProps> = createSlice({
  name: "pokedex",
  initialState: PokedexInitialState,
  reducers: {
    increment(state: PokedexSliceProps): void {
      state.count++;
    },
    setCount(state: PokedexSliceProps, { payload }: PayloadAction<PokedexSliceProps>): void {
      state.count = payload.count;
    },
  },
});

export const { increment, setCount } = pokedexSlice.actions;
export const pokedexReducer: Reducer<PokedexSliceProps> = pokedexSlice.reducer;
