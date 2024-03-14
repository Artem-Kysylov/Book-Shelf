// Import Libraries
import React from 'react'
import styled from 'styled-components'


// Import Components
import { Input } from '../components/ui/Input'
import { BookItem } from '../components/BookItem'


// Style
const Container = styled.div`
    max-width: 1200px;
    padding: 0 10px;
    margin: 0 auto;
`

const TitleInputWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 30px;
    margin-bottom: 30px;
`

const Title = styled.h1`
    font-family: var(--prata);
    font-size: var(--main-headline);
    color: var(--black);
    position: relative;
    text-align: center;
`

const Line = styled.div`
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    height: 1px;
    width: 200px;
    background: var(--black);
`

const BooksItemsContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 30px;
    margin-bottom: 100px;
`


// Component 
export const BooksCollection = () => {
  return (
    <Container>
        <TitleInputWrapper>
            <Title>
                Books Collection
                <Line/>
            </Title>            
            <Input/>
        </TitleInputWrapper>
        <BooksItemsContainer>
            <BookItem/>
        </BooksItemsContainer>
    </Container>
  )
}
