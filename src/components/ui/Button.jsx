// Import Libraries 
import React from 'react'
import styled from 'styled-components'

const MainButton = styled.button`
    border: none;
    outline: none;
    cursor: pointer;
    display: inline-block;
    padding: 20px;
    width: 220px;
    border: 1px solid var(--black);
    border-radius: 2px;
    background: transparent;
    color: var(--black);
    font-family: var(--montserrat);
    text-transform: uppercase;
    box-shadow: inset 0 0 0 0 var(--black);
    transition: all .5s ease-in-out;

    &:hover {
      color: var(--beige);
      box-shadow: inset 400px 0 0 0 var(--black);
    }
`

export const Button = (props) => {
  return (
    <MainButton>
        {props.text}
    </MainButton>
  )
}

