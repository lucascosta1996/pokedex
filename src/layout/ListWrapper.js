import React, { Fragment } from 'react'
import { PokemonsContext } from '../context/PokemonsContext'
import Pokemons from '../components/Pokemons'
import Pagination from '../components/Pagination'

export default function ListWrapper() {
  return (
    <PokemonsContext.Consumer>
      { (context) => (
        <Fragment>
          <Pokemons page={ context.current.get } />
          <Pagination />
        </Fragment>
      ) }
    </PokemonsContext.Consumer>
  )
}
