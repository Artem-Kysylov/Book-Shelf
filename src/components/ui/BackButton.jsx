// Import Libraries
import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import { GoChevronLeft } from "react-icons/go"


// Style
const ButtonWrapper = styled(Link)`
    text-decoration: none;
    display: flex;
    align-items: center;
    gap: 10px;
    transition: all .5s ease-in-out;

    &:hover {
        opacity: 0.5;
    }
`

const ButtonText = styled.p`
    text-transform: uppercase;
`


// Component 
export const BackButton = (props) => {
  return (
    <ButtonWrapper to='/'>
        <GoChevronLeft  style={{height: '24px', width: '24px'}}/>
        <ButtonText>{props.text}</ButtonText>
    </ButtonWrapper>
  )
}
