// Import Libraries 
import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import { CiHeart } from "react-icons/ci"

// Import Assets 
import Logo from '../assets/logo-black.svg'


// Style
const Container = styled.div`
    max-width: 1200px;
    padding: 0 10px;
    margin: 0 auto;
`

const NavbarWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 15px;
  height: 10vh;
`

const LogoLink = styled(Link)`
    text-decoration: none;
`

// Component 
export const Navbar = () => {
  return (
    <Container>
      <NavbarWrapper>
        <LogoLink to='/'>
          <img src={Logo} alt="logo" />
        </LogoLink>
      </NavbarWrapper>
    </Container>
  )
}
