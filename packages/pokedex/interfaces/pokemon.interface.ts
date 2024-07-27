export type pokemonType = {
  name: string;
  url: string;
};

export type pokemonsType = {
  count: number;
  pokemons: pokemonType[];
};

export const initialPokeMons: pokemonsType = {
  count: 0,
  pokemons: [{ name: "", url: "" }],
};
