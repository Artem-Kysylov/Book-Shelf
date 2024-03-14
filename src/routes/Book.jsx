// Import Libraries
import React from 'react'
import styled from 'styled-components'

import BookCoverImage from '../assets/book-cover.jpg'
import { BackButton } from '../components/ui/BackButton'


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

const BookCountry = styled.p`
    text-transform: uppercase;
`

export const Book = () => {
  return (
    <Container>
        <BackButton text='go back'/>
        <BookWrapper>
            <BookCover>
                <BookImage src={BookCoverImage} alt='/'/>
            </BookCover>
            <ContentWrapper>
                <BookTitle>
                    Harry Potter and Prisoner of Azkaban
                </BookTitle>
                <BookAuthor>
                    Joan Rowling
                </BookAuthor>
                <BookCountry>
                    United Kingdom
                </BookCountry>
                <p>1999</p>
                <p>Lorem ipsum dolor sit amet consectetur. In gravida congue morbi sed enim id ut. Pharetra nunc libero eu mauris. Tristique morbi aliquam pellentesque egestas non vitae ornare. Amet sit pellentesque justo faucibus purus pretium. Senectus duis rhoncus venenatis eu odio. Elementum massa quam odio et. Amet blandit tempus risus magna consectetur vestibulum. Felis vulputate auctor nam bibendum ullamcorper. Leo eget venenatis egestas risus. Duis nisl euismod pellentesque euismod a lectus commodo. Urna tincidunt tincidunt sagittis adipiscing fringilla tempor. At neque nibh mattis at odio placerat aliquet. Etiam quis nisi mollis consequat scelerisque amet. Suspendisse adipiscing varius ullamcorper posuere ut.</p>
            </ContentWrapper>
        </BookWrapper>
    </Container>
  )
}
