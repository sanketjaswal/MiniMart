import React from 'react'

import styled, { keyframes } from 'styled-components'

import cart from '../assets/logo.png'

export const Loader = () => {
  return (
    <LoaderComp className="loader">
      <Spinner className="spinner">
        <Img src={cart}></Img>
      </Spinner>
    </LoaderComp>
  )
}

const Spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`

const SpinReverse = keyframes`
   from { transform: rotate(0deg); }
  to { transform: rotate(-360deg); }
`

const LoaderComp = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  margin-block: 100px;
`

const Spinner = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 7px solid #3498db;
  border-top-color: rgb(22, 22, 22);
  border-bottom-color: rgb(22, 22, 22);
  animation: ${Spin} 2s linear infinite;
`
const Img = styled.img`
  width: 60%;
  height: auto;
  animation: ${SpinReverse} 2s linear infinite; 
  `
