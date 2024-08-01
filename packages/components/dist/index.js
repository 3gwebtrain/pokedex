function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var material = require('@mui/material');
var React = require('react');
var React__default = _interopDefault(React);
var Typography = _interopDefault(require('@mui/material/Typography'));
var DataGrid = require('@mui/x-data-grid/DataGrid');

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
  }), React__default.createElement(material.List, null, React__default.createElement(material.ListItem, null, React__default.createElement(material.Typography, {
    variant: 'h4'
  }, "ID: ", data.id)), React__default.createElement(material.ListItem, null, React__default.createElement(material.Typography, {
    variant: 'h4'
  }, "Height: ", data.height))));
}

function PokemonList(_ref) {
  var welcomeMsg = _ref.welcomeMsg,
    pokemons = _ref.pokemons,
    columns = _ref.columns;
  return React.createElement("article", null, React.createElement(Typography, {
    variant: 'h1',
    component: 'h2'
  }, welcomeMsg), pokemons.length > 0 ? React.createElement("div", {
    style: {
      height: '100%',
      width: '100%',
      background: '#fff'
    }
  }, React.createElement(DataGrid.DataGrid, {
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

exports.PokemonDetails = PokemonDetails;
exports.PokemonList = PokemonList;
//# sourceMappingURL=index.js.map
