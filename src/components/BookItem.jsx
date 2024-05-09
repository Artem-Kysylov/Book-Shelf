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
    width: 100%;

    @media (max-width: 900px) {
      align-items: center;
    }
`

const BookItemCover = styled.div`
    width: 277px;
    height: 405px;
    border: 9px solid #FCF6E9;
    cursor: pointer;
`

const BookItemImageContainer = styled.div`
    width: 258px;
    height: 385px;
    display: inline-block;
    overflow: hidden;
`

const BookItemImage = styled.img`
    width: 100%;
    height: auto;
    object-fit: cover;
    display: block;
    transition: 1s;

    &:hover {
      scale: 1.32;
    }
`

const BookItemTitle = styled.h3`
    font-family: var(--prata);
    font-size: var(--secondary-headline);
    line-height: 130%;

    @media (max-width: 900px) {
      text-align: center;
    }
`

const BookItemAuthor = styled.p`
    font-family: var(--montserrat);
    text-transform: uppercase;
`

const BookItemGenre = styled.p`
    font-family: var(--montserrat);
    font-size: 13px;

    @media (max-width: 900px) {
      text-align: center;
    }
`

// Truncate title function 
const truncateTitle = (title, maxLength) => {
  if (typeof title !== 'string' || title.length <= maxLength) {
      return title;
  } else {
      let truncatedTitle = title.substring(0, maxLength);
      truncatedTitle = truncatedTitle.substring(0, Math.min(truncatedTitle.length, truncatedTitle.lastIndexOf(" ")));
      return truncatedTitle + "...";
  }
}


// Component
export const BookItem = ({ id, image, title, authors, genres }) => {
  const truncatedTitle = truncateTitle(title, 78)

  const navigate = useNavigate()

  const HandleClick = () => {
    navigate(`books/${id}`)
  }

  return (
    <BookItemWrapper>
      <BookItemCover onClick={HandleClick}>
        <BookItemImageContainer>
          {image && <BookItemImage src={image} alt={title} />}
        </BookItemImageContainer>        
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
