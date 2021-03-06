import React from 'react'
import styled from 'styled-components'

const PaginationButtonWrapper = styled.div`
  button {
    background-color: #1b5b4c;
    border: none;
    border-radius: 3px;
    color: #fff;
    cursor: pointer;
    font-family: 'Roboto', sans-serif;
    font-size: 23px;
    height: 40px;
    margin: 5px;
    transition: all .3s ease;
    width: 40px;

    &:hover {
      background-color: #38ef7d;
    }
  }

  .active {
    background-color: #F2BD41;
    box-shadow: 0px 0px 5px 1px #F2BD41;
    color: #1C1A09;
  }
`

export default function PaginationButton( { isActive, id, item, update, value } ) {
  if ( value === null || value === "" ) return null
  return (
    <PaginationButtonWrapper>
      <button
        className={ isActive ? 'active' : '' }
        id={ id }
        onClick={ update }
      >
        { item }
      </button>
    </PaginationButtonWrapper>
  )
}
