import React from 'react'
import pokemon from '../assets/pokemon-logo.svg'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const HeaderWrapper = styled.header`
  margin-bottom: 40px;
  text-align: center;

  .title {
    margin: auto;
    max-width: 350px;
    transition: all .3s ease;
    width: 100%;

    &:hover {
      filter: drop-shadow(0px 0px 9px rgba(230,214,73,0.5));
    }

    @media (max-width: 520px) {
      max-width: 250px;
    }
  }
`

export default function Header() {
  return (
    <HeaderWrapper>
      <Link to="/pokedex">
        <img className="title" src={ pokemon } />
      </Link>
    </HeaderWrapper>
  )
}
