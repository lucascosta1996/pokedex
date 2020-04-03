import React from 'react'
import styled from 'styled-components'
import pokeballOpen from '../assets/pokeball-open.png'
import pokeballClosed from '../assets/pokeball.png'

const PokemonCardWrapper = styled.div`
  align-items: center;
  background-color: #fff;
  border-radius: 3px;
  display: flex;
  justify-content: space-between;
  margin: 10px;
  padding: 10px 0;
  width: 300px;

  header {
    padding-left: 10px;
    h2 {
      color: #000;
      font-family: 'Dokdo', cursive;
      font-size: 28px;
      line-height: 32px;
      text-transform: capitalize;
    }
  }

  .pokeball {
    background-image: url(${pokeballClosed});
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    height: 80px;
    margin: 10px;
    width: 80px;
  }

  &:hover {
    .pokeball {
      background-image: url(${pokeballOpen});
    }
  }
`

export default function PokemonCard( { pokemon } ) {
  return(
    <PokemonCardWrapper>
      <header>
        <h2>{pokemon.name}</h2>
      </header>
      <div className="pokeball" />
    </PokemonCardWrapper>
  )
}