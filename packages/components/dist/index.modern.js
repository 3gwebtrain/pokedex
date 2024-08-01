import { List, ListItem, Typography } from '@mui/material';
import React__default, { createElement } from 'react';
import Typography$1 from '@mui/material/Typography';
import { DataGrid } from '@mui/x-data-grid/DataGrid';

function PokemonDetails(_ref) {
  var data = _ref.data;
  return React__default.createElement("article", {
    style: {
      padding: '1rem'
    }
  }, React__default.createElement("img", {
    src: data.sprites.front_default,
    alt: data.name,
    style: {
      maxWidth: '100%',
      width: '20%'
    }
  }), React__default.createElement(List, null, React__default.createElement(ListItem, null, React__default.createElement(Typography, {
    variant: 'h4'
  }, "ID: ", data.id)), React__default.createElement(ListItem, null, React__default.createElement(Typography, {
    variant: 'h4'
  }, "Height: ", data.height))));
}

function PokemonList(_ref) {
  var welcomeMsg = _ref.welcomeMsg,
    pokemons = _ref.pokemons,
    columns = _ref.columns;
  return createElement("article", null, createElement(Typography$1, {
    variant: 'h1',
    component: 'h2'
  }, welcomeMsg), pokemons.length > 0 ? createElement("div", {
    style: {
      height: '100%',
      width: '100%',
      background: '#fff'
    }
  }, createElement(DataGrid, {
    pagination: true,
    rows: pokemons,
    columns: columns,
    initialState: {
      pagination: {
        paginationModel: {
          pageSize: 10
        }
      }
    },
    pageSizeOptions: [10, 20, 50, 100]
  })) : null);
}

export { PokemonDetails, PokemonList };
//# sourceMappingURL=index.modern.js.map
