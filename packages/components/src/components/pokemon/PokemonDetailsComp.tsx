import { List, ListItem, Typography } from '@mui/material'
import React from 'react'
import { IPokemonDetail } from 'utils'

export const PokemonDetailsComp = ({ data }: IPokemonDetail): JSX.Element => {
  return (
    <article style={{ padding: '1rem' }}>
      <img
        src={data.sprites.front_default}
        alt={data.name}
        style={{ maxWidth: '100%', width: '20%' }}
      />
      <List>
        <ListItem>
          <Typography variant='h4'>ID: {data.id}</Typography>
        </ListItem>
        <ListItem>
          <Typography variant='h4'>Height: {data.height}</Typography>
        </ListItem>
      </List>
    </article>
  )
}
