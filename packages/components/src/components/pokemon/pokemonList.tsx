import Typography from '@mui/material/Typography'
import { DataGrid } from '@mui/x-data-grid/DataGrid'
import { GridColDef } from '@mui/x-data-grid/models'
import * as React from 'react'

export type Pokemon = {
  name: string
  url: string
}

export type IPokemonListProp = {
  welcomeMsg: string
  pokemons: Pokemon[]
  columns: GridColDef[]
}

export function PokemonList({
  welcomeMsg,
  pokemons,
  columns
}: IPokemonListProp): JSX.Element {
  return (
    <article>
      <Typography variant='h1' component='h2'>
        {welcomeMsg}
      </Typography>
      {pokemons.length > 0 ? (
        <div style={{ height: '100%', width: '100%', background: '#fff' }}>
          <DataGrid
            pagination
            rows={pokemons}
            columns={columns}
            initialState={{
              pagination: { paginationModel: { pageSize: 10 } }
            }}
            pageSizeOptions={[10, 20, 50, 100]}
          />
        </div>
      ) : null}
    </article>
  )
}
