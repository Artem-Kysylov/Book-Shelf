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

const ContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const BooksItemsContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 30px;
    margin-bottom: 100px;
`

const SearchNotFound = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: center;
    justify-content: center;
    width: 100%;
`

const SearchNotFoundTitle = styled.p`
    text-transform: uppercase;
    font-size: var(--secondary-headline);
`

// Generate random books collection 
const getRandomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min
}

// Component 
export const BooksCollection = () => {
    // States 
    const [books, setBooks] = useState([])
    const [search, setSearch] = useState('')
    const [searchNotFound, setSearchNotFound] = useState(false)

    const url = BOOKS_API

    const randomStart = getRandomInt(0, 120)

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


    // Live search function 
    const filteredBooks = books.filter((book) => {
        const title = book.title.toLowerCase();
        const searchQuery = search.trim().toLowerCase()
        if (!searchQuery) {
            return true
        }
        return title.includes(searchQuery)
    })    

    useEffect(() => {
        setSearchNotFound(filteredBooks.length === 0 && search.trim() !== '')
    }, [search, filteredBooks])


  return (
    <Container>
        <TitleInputWrapper>
            <Title>
                Books Collection
                <Line/>
            </Title>            
            <Input
                onChange={(e) => setSearch(e.target.value)}
            />
        </TitleInputWrapper>
        <ContentContainer>
            {
            searchNotFound && 
                <SearchNotFound>
                    <SearchNotFoundTitle>
                        Your search not found...                        
                    </SearchNotFoundTitle>
                    <p>Please make sure the entered data is correct, or try using different keywords for your search</p>
                </SearchNotFound>
            }
            <BooksItemsContainer>
                {filteredBooks.length > 0 && filteredBooks.map((book) => (
                <BookItem
                    key={book.id}
                    id={book.id}
                    image={book.image_url}
                    title={book.title}
                    authors={book.authors}
                    genres={book.genres}
                />
            ))}
            </BooksItemsContainer>
        </ContentContainer>
    </Container>
  )
}
