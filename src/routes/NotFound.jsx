// Import Libraries 
import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

// Import Components
import { Button } from '../components/ui/Button'

// Style
const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 30px;
  height: 80vh;
`

const MainTitle = styled.h1`
  font-family: var(--prata);
  font-size: 120px;
  line-height: 120%;
`

const SecondaryTitle = styled.h2`
  font-family: var(--prata);
  font-size: var(--main-headline);
  line-height: 120%;
`


// Component 
export const NotFound = () => {
  return (
    <ContentWrapper>
      <MainTitle>
        404
      </MainTitle>
      <SecondaryTitle>
        This page not exist
      </SecondaryTitle>
      <Link to='/'>
        <Button text='home page'/>
      </Link>    
    </ContentWrapper>
  )
}
