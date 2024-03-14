// Import Libraries 
import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'

// Import Assets 
import Logo from '../assets/logo-light.svg'


// Style 
const FooterWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 15px;
  height: 10vh;
  background: var(--black);
`

const LogoLink = styled(Link)`
  text-decoration: none;
`


// Component 
export const Footer = () => {
  return (
    <FooterWrapper>
        <LogoLink to='/'>
            <img src={Logo} alt="logo" />
        </LogoLink>
    </FooterWrapper>
  )
}
