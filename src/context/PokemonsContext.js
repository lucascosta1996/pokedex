import React, { createContext, useState } from 'react'
import { getQuery } from '../utils/helpers'

export const PokemonsContext = createContext()

function PokemonsContextProvider( { children } ) {
  const [ previous, setPrevious ] = useState( null )
  const [ current, setCurrent ] = useState( 0 )
  const [ next, setNext ] = useState( 20 )
  const [ pokemons, setPokemons ] = useState()
  const [ loading, setLoading ] = useState( true )
  const [ count, setCount ] = useState( 0 )
  const [ error, setError ] = useState( false )

  async function fetchData( page ) {
    setLoading( true )
    setError()
    const data = await fetch( `https://pokeapi.co/api/v2/pokemon/?offset=${page}&limit=20` )
      .then(res => res.json())
      .catch(err => {
        setError(err)
      })
    
    setPokemons( data )
    setPrevious( getQuery( data.previous, 'offset' ) )
    setNext( getQuery( data.next, 'offset' ) )
    setCount( data.count )
    setLoading( false )
  }
  

  let store = {
    previous: {
      get: previous
    },
    current: {
      get: current, set: setCurrent
    },
    next: {
      get: next
    },
    pokemons: {
      get: pokemons, set: ( page ) => fetchData( page )
    },
    loading: {
      get: loading
    },
    count: {
      get: count
    },
    error: {
      get: error
    }
  }

  return (
    <PokemonsContext.Provider value={ store }>
      { children }
    </PokemonsContext.Provider>
  )
}

export default PokemonsContextProvider
