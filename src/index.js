import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import './index.css'
import PokemonsContextProvider from './context/PokemonsContext'
import Pokemons from './components/Pokemons'

function App() {
  return(
      <Router>
        <PokemonsContextProvider>
          <Pokemons />
        </PokemonsContextProvider>
      </Router>

  )
}

ReactDOM.render(<App />, document.getElementById('app'))