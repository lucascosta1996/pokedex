import React from 'react'
import styled from 'styled-components'
import pokeball from '../assets/pokeball.svg'

const LoadingWrapper = styled.div`
  animation: rotation 2s infinite linear;
  background-image: url( ${pokeball} );
  background-position: center;
  background-size: contain;
  bottom: 0;
  height: 90px;
  left: 0;
  margin: 0 auto;
  position: absolute;
  right: 0;
  top: 0;
  width: 90px;
`

export default function Loading() {
  return (
    <LoadingWrapper src={ pokeball } className="loading" />
  )
}