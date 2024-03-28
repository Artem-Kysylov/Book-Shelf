// Import Libraries
import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import { useParams } from 'react-router'
import { GoChevronLeft } from "react-icons/go"


// Import Components
import { IconLink } from '../components/ui/IconLink'


// Import API 
import { BOOKS_DETAILS_API } from '../api/API'


const Container = styled.div`
    max-width: 1200px;
    padding: 0 10px;
    margin: 0 auto;
`

const BookWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 30px;
    min-height: 80vh;
`

const BookCover = styled.div`
    width: 384px;
    height: 560px;
    border: 20px solid #FCF6E9;
    flex: 1;
`

const BookImage = styled.img`
    width: 342px;
    height: 519px;
`

const ContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 20px;
    flex: 3;
`

const BookTitle = styled.h1`
    font-family: var(--prata);
    font-size: var(--main-headline);
`

const BookAuthor = styled.p`
    text-transform: uppercase;
`

const BookGenres = styled.p`    
    font-size: 13px;
`

const BookQuote = styled.p`
    text-transform: uppercase;
    font-size: var(--secondary-headline);
`

export const Book = () => {
    const [book, setBook] = useState({})
    const { id } = useParams()
    const url = BOOKS_DETAILS_API

    const FetchBookData = () => {
        axios.get(`${url}/${ id }`).then((response) => {
            console.log(response.data)
            setBook(response.data)
        }).catch((error) => {
            console.log(error)
        })
    }

    useEffect(() => {
        FetchBookData()
    }, [id])    

  return (
    <Container>
        <IconLink
            to='/' 
            text='go back'
            icon={GoChevronLeft}
        />
        <BookWrapper>
            <BookCover>
            <BookImage 
                src={book?.image_url} 
                alt={book?.title}/>
            </BookCover>
            <ContentWrapper>
                <BookTitle>
                    {book?.title}
                </BookTitle>
                <BookAuthor>
                    {book?.authors}
                </BookAuthor>
                <BookGenres>
                    {book?.genres}
                </BookGenres>
                <BookQuote>
                    {book?.Quote1}
                </BookQuote>
                <p>{book?.description}</p>                
            </ContentWrapper>
        </BookWrapper>
    </Container>
  )
}
