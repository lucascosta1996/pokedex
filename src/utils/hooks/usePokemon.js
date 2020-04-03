import { useEffect, useState } from 'react'

export default function usePokemon( url ) {
  const [ pokemonData, setPokemonData ] = useState()
  const [ error, setError ] = useState()
  const [ loading, setLoading ] = useState( false )

  useEffect( () => {
    async function fetchData() {
      setLoading(true)
      setError()
      const data = await fetch( url )
        .then(res => res.json())
        .catch(err => {
          setError(err);
        });
      setPokemonData(data)
      setLoading(false)
    }
    fetchData();
  }, [] )

  return {
    pokemonData,
    error,
    loading
  }
}
