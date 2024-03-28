// Import Libraries
import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'


// Style
const ButtonWrapper = styled(Link)`
    text-decoration: none;
    display: flex;
    align-items: center;
    gap: 5px;
    transition: all .5s ease-in-out;

    &:hover {
        opacity: 0.5;
    }
`

const ButtonText = styled.p`
    text-transform: uppercase;
`


// Component 
export const IconLink = ({ to, text, icon: Icon }) => {
  return (
    <ButtonWrapper to={to}>
        {<Icon style={{ height: '24px', width: '24px' }} />}
        <ButtonText>{text}</ButtonText>
    </ButtonWrapper>
  )
}
