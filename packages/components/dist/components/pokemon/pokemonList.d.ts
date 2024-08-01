import { GridColDef } from '@mui/x-data-grid/models';
export declare type Pokemon = {
    name: string;
    url: string;
};
export declare type IPokemonListProp = {
    welcomeMsg: string;
    pokemons: Pokemon[];
    columns: GridColDef[];
};
export declare function PokemonList({ welcomeMsg, pokemons, columns }: IPokemonListProp): JSX.Element;
