// Import Libraries
import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'


// Import Components
import { Button } from '../components/ui/Button'


// Style
const ParentItemContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`
const ItemWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 30px;
    margin: 35px 0 100px 0;
    width: 90%;
`

const ItemContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 20px;
`

const ItemContentTitle = styled.p`
    font-family: var(--prata);
    font-size: var(--main-headline);
    color: var(--black);
    position: relative;

    @media (max-width: 768px) {
        font-size: var(--main-headline-mobile);
    }
`

const ItemContentAuthor = styled.p`
    text-transform: uppercase;
`

const ItemBookCover = styled.div`
    width: 280px;
    height: 409px;
    border: 15px solid #FCF6E9;
`

const ItemBookImage = styled.img`
    width: 250px;
    height: 379px;
`

// Truncate description function 
const truncateDescr = (description, maxLength) => {
    if (description.length <= maxLength) {
      return description;
    } else {
      let truncatedDescr = description.substring(0, maxLength);
      truncatedDescr = truncatedDescr.substring(0, Math.min(truncatedDescr.length, truncatedDescr.lastIndexOf(" ")));
      return truncatedDescr + "...";
    }
}


// Component 
export const FeaturedItem = ({ id, image, title, authors, description }) => {
    const truncatedDescr = truncateDescr(description, 195)

  return (
    <ParentItemContainer>
        <ItemWrapper>
            <ItemContent>
                <ItemContentTitle>
                    {title}
                </ItemContentTitle>
                <ItemContentAuthor>
                    {authors}
                </ItemContentAuthor>
                <p>
                    {truncatedDescr}
                </p>
                <Link to={`books/${id}`}>
                    <Button text='Learn more' />
                </Link>
            </ItemContent>
            <div>
                <ItemBookCover>
                    <ItemBookImage src={image} alt={title}/>
                </ItemBookCover>
            </div>
        </ItemWrapper>
    </ParentItemContainer>
  )
}
