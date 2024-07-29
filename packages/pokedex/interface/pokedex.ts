export type PokedexSliceProps = {
  name: string;
  count: number;
};

export const PokedexDefaultState: PokedexSliceProps = {
  name: "Arif",
  count: 2,
};

//extend for other slices
export type CombinedReducerProps = {
  [key: string]: PokedexSliceProps;
};
