// Import Libraries
import React from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'


// Style
const BookItemWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 15px;
    cursor: pointer;
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

const BookItemGenre = styled.p`
    font-family: var(--montserrat);
    font-size: 13px;
`

// Truncate title function 
const truncateTitle = (title, maxLength) => {
    if (title.length <= maxLength) {
      return title;
    } else {
      let truncatedTitle = title.substring(0, maxLength);
      truncatedTitle = truncatedTitle.substring(0, Math.min(truncatedTitle.length, truncatedTitle.lastIndexOf(" ")));
      return truncatedTitle + "...";
    }
}


// Component
export const BookItem = ({ id, image, title, authors, genres  }) => {
  const truncatedTitle = truncateTitle(title, 78)

  const navigate = useNavigate()

  const HandleClick = () => {
    navigate(`books/${id}`)
  }

  return (
    <BookItemWrapper onClick={HandleClick}>
      <BookItemCover>
        <BookItemImage src={image} alt={title} />
      </BookItemCover>
      <BookItemTitle>
        {truncatedTitle}
      </BookItemTitle>
      <BookItemAuthor>
        {authors}
      </BookItemAuthor>
      <BookItemGenre>
        {genres}
      </BookItemGenre>
    </BookItemWrapper>
  )
}
