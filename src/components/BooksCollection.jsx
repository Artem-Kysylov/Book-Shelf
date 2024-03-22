// Import Libraries
import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import axios from 'axios'


// Import Components
import { Input } from '../components/ui/Input'
import { BookItem } from '../components/BookItem'


// Import API 
import { BOOKS_API } from '../api/API'


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

// Generate random books collection 
const getRandomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min
}

// Component 
export const BooksCollection = () => {
    const [books, setBooks] = useState([])
    const url = BOOKS_API

    const randomStart = getRandomInt(0, 99)

    const FetchData = () => {
        axios.get(`${url}&_start=${randomStart}`)
        .then((response) => {
            console.log(response.data)
            setBooks(response.data)
        }).catch((error) => {
            console.log(error)
        })
    }

    useEffect(() => {
        FetchData()
    }, [])

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
        {
            books.length > 0 && books.map((book) => (
                <BookItem
                    key={book.id}
                    id={book.id}
                    image={book.image_url}
                    title={book.title}
                    authors={book.authors}
                    genres={book.genres}
                />
            ))
        }             
        </BooksItemsContainer>
    </Container>
  )
}
