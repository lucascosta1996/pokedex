import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import usePokemon from '../utils/hooks/usePokemon'
import Loading from '../layout/Loading'

const PokemonInfoWrapper = styled.div`
  margin: auto;
  position: relative;
  width: 960px;

  @media (max-width: 520px) {
    width: 90%;
  }

  .title_pokemon {
    color: #fff;
    font-family: 'Oswald', sans-serif;
    font-size: 52px;
    padding: 32px 0;
    text-transform: capitalize;
  }

  .pokemon_illustration {
    height: max-content;
    margin: 10px;
    max-width: 90px;
    width: 100%;
  }

  .back {
    color: #fff;
    border: 1px solid #fff;
    font-family: 'Roboto', sans-serif;
    padding: 5px 10px;
    transition: all .3s ease;

    &:hover {
      box-shadow: 0px 0px 8px 2px #387a72;
    }
  }

  .pokemon_header {
    display: flex;
  }

  section {
    padding-bottom: 20px;
    
    .info-wrapper {
      font-size: 18px;
      line-height: 23px;

      .label {
        color: #fff;
        font-family: 'Roboto', sans-serif;
        font-weight: 500;
      }

      .content {
        color: #fff;
        font-family: 'Roboto', sans-serif;
        font-weight: 300;
        padding-left: 2px;
      }
    }
  }
`

export default function PokemonInfo( { location } ) {
  const { pokemon } = location.state
  const { pokemonData } = usePokemon( pokemon.url )

  if ( pokemonData === undefined ) return (
    <PokemonInfoWrapper>
      <Loading />
    </PokemonInfoWrapper>
  )

  return(
    <PokemonInfoWrapper>
      <Link className="back" to="/pokedex"> &#8592; Back</Link>
      <header className="pokemon_header">
        <h2 className="title_pokemon">
          { pokemon.name }
        </h2>
        <img src={ pokemonData.sprites.front_default } className="pokemon_illustration" />
      </header>
      <section>
        <div className="info-wrapper">
          <span className="label">Base experience </span>
          <span className="content">{pokemonData.base_experience}</span>
        </div>
        <div className="info-wrapper">
          <span className="label">Height </span>
          <span className="content">{pokemonData.height}</span>
        </div>
        <div className="info-wrapper">
          <span className="label">Weight </span>
          <span className="content">{pokemonData.weight}</span>
        </div>
      </section>
    </PokemonInfoWrapper>
  )
}