export type Pokemon = {
  name: string;
  url: string;
};

export type PokemonApi = {
  results: Pokemon[];
};

export type PokemonSliceData = {
  pokemons: Pokemon[];
  welcomeMsg: string;
};

export type PokemonState = {
  clientData: PokemonSliceData | null;
};
