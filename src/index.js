import React, { useContext } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './index.css'
import PokemonsContextProvider from './context/PokemonsContext'
import PokemonInfo from './components/PokemonInfo'
import Header from './layout/Header'
import ListWrapper from './layout/ListWrapper'

function App() {
  return(
      <Router>
        <PokemonsContextProvider>
          <Header />
          <Route exact path="/pokedex">
            <ListWrapper />
          </Route>
          <Route path="/pokedex/:id" component={ PokemonInfo } />
        </PokemonsContextProvider>
      </Router>

  )
}

ReactDOM.render(<App />, document.getElementById('app'))
