import React, { useContext } from 'react'
import styled from 'styled-components'
import { PokemonsContext } from '../context/PokemonsContext'
import PaginationButton from './PaginationButton'

const PaginationWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 30px;
`

export default function Pagination() {
  const context = useContext( PokemonsContext )
  const count = context.count.get
  const pagesCount = Math.ceil( count / 20 )
  const pages = Array.from({ length: pagesCount }, (v, k) => k + 1 )
  const previous = context.previous.get
  const next = context.next.get

  if ( context.loading.get ) return null

  return (
    <PokemonsContext.Consumer>
      { ( context ) => {
        function updatePagination( item ) {
          context.pokemons.set( item )
        }
        return (
          <PaginationWrapper>
            <PaginationButton item="&#8592;" value={ previous } isActive={ false } update={ () => updatePagination( previous ) } />
            <PaginationButton item="&#8594;" value={ next } isActive={ false } update={ () => updatePagination( next ) } max={ pagesCount } />
          </PaginationWrapper>
        )
    }}
    </PokemonsContext.Consumer>
  )
}
