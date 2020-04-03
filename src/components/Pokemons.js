import React, { useEffect, useContext } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { PokemonsContext } from '../context/PokemonsContext'
import PokemonCard from './PokemonCard'
import Loading from '../layout/Loading'

const PokemonsWrapper = styled.div`
  position: relative;
  .list {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    margin: 0 auto;
    position: relative;
    width: 960px;

    @media ( max-width: 1024px ) {
      align-items: center;
      flex-direction: column;
      width: 90%;
    }
  }

  @keyframes rotation {
		from {
			transform: rotate(0deg);
		}
		to {
			transform: rotate(359deg);
		}
  }

  .header {
    border-bottom: 1px solid #fff;
    margin: 0 auto;
    margin-bottom: 30px;
    max-width: 960px;
    text-align: left;

    h1 {
      color: #fff;
      font-family: 'Roboto', sans-serif;
      font-size: 30px;
      padding-bottom: 10px;
    }

    @media (max-width: 520px) {
      max-width: 90%;
    }
  }
`

function Pokemons( { page } ) {
  const context = useContext( PokemonsContext )

  useEffect( () => {
    async function changePagination() {
      context.pokemons.set( page )
    }
    changePagination()
  }, [ page ] )

  if ( context.loading.get ) return (
    <PokemonsWrapper>
      <Loading />
    </PokemonsWrapper>
  )

  return (
    <PokemonsContext.Consumer>
      { (context) => {
        const pokemons = context.pokemons.get

        return (
          <PokemonsWrapper>
            <div className="header">
              <h1>Pokemons</h1>
            </div>
            <section className="list">
              { pokemons && pokemons.results.map( pokemon => (
                <Link to={ {
                  pathname: `/pokedex/${pokemon.name}`,
                  state: {
                    pokemon
                  }
                } } key={pokemon.name}>
                  <PokemonCard pokemon={ pokemon } />
                </Link> 
              ) ) }
            </section>
          </PokemonsWrapper>
        )
      } }
    </PokemonsContext.Consumer>
  )
}

export default Pokemons
