// Import Libraries
import React from 'react'
import styled from 'styled-components'

import BookCover from '../assets/book-cover.jpg'


// Style
const BookItemWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 15px;
`

const BookItemCover = styled.div`
    width: 277px;
    height: 405px;
    border: 9px solid #FCF6E9;
`

const BookItemImage = styled.img`
    width: 258px;
    height: 385px;
`

const BookItemTitle = styled.h3`
    font-family: var(--prata);
    font-size: var(--secondary-headline);
    line-height: 130%;
`

const BookItemAuthor = styled.p`
    font-family: var(--montserrat);
    text-transform: uppercase;
`

const BookItemYear = styled.p`
    font-family: var(--montserrat);
`


// Component
export const BookItem = () => {
  return (
    <BookItemWrapper>
      <BookItemCover>
        <BookItemImage src={BookCover} alt="/" />
      </BookItemCover>
      <BookItemTitle>
        Harry Potter and Prisoner of Azkaban
      </BookItemTitle>
      <BookItemAuthor>
        Joan Rowling
      </BookItemAuthor>
      <BookItemYear>
        1999
      </BookItemYear>
    </BookItemWrapper>
  )
}
