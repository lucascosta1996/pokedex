import React, { useState } from 'react'
import styled from 'styled-components'
import pokeballOpen from '../assets/pokeball-open.png'
import pokeballClosed from '../assets/pokeball.png'
import usePokemon from '../utils/hooks/usePokemon'

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
    .pokemonName {
      color: #000;
      font-family: 'Dokdo', cursive;
      font-size: 28px;
      line-height: 32px;
      text-transform: capitalize;
      transition: color .3s ease;
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

  @keyframes spaceboots {
    0% { transform: translate(2px, 1px) rotate(0deg); }
    10% { transform: translate(-1px, -2px) rotate(-1deg); }
    20% { transform: translate(-3px, 0px) rotate(1deg); }
    30% { transform: translate(0px, 2px) rotate(0deg); }
    40% { transform: translate(1px, -1px) rotate(1deg); }
    50% { transform: translate(-1px, 2px) rotate(-1deg); }
    60% { transform: translate(-3px, 1px) rotate(0deg); }
    70% { transform: translate(2px, 1px) rotate(-1deg); }
    80% { transform: translate(-1px, -1px) rotate(1deg); }
    90% { transform: translate(2px, 2px) rotate(0deg); }
    100% { transform: translate(1px, -2px) rotate(-1deg); }
  }

  &:hover {
    .pokemonName, .pokeball {
      animation-name: spaceboots;
      animation-duration: 0.8s;
      transform-origin:50% 50%;
      animation-iteration-count: infinite;
      animation-timing-function: linear;
    }

    .pokemonName {
      color: #D9450B;
    }

    .pokeball {
      background-image: url(${pokeballOpen});
    }
  }
`

export default function PokemonCard( { pokemon } ) {
  const { pokemonData } = usePokemon( pokemon.url )
  const [ illustration, setIllustration ] = useState( false )

  return(
    <PokemonCardWrapper
      onMouseEnter={ () => setIllustration( true ) }
      title={ pokemon.name.toUpperCase() }
    >
      <header>
        {
          ( illustration && pokemonData !== undefined ) ? (
            <img src={ pokemonData.sprites.front_default } />
          ) : (
            <h2 className="pokemonName">{pokemon.name}</h2>
          )
        }
      </header>
      <div className="pokeball" />
    </PokemonCardWrapper>
  )
}