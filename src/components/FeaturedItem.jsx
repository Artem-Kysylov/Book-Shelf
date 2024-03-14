// Import Libraries
import React from 'react'
import styled from 'styled-components'


// Import Components
import { Button } from '../components/ui/Button'
import BookCover from '../assets/book-cover.jpg'


// Style
const ItemWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 30px;
    margin: 35px 0 100px 0;
`

const ItemContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    flex: 2;
    gap: 20px;
`

const ItemContentTitle = styled.p`
    font-family: var(--prata);
    font-size: var(--main-headline);
    color: var(--black);
    position: relative;
`

const ItemContentAuthor = styled.p`
    text-transform: uppercase;
`

const ItemCoverWrapper = styled.div`
    flex: 1;
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


// Component 
export const FeaturedItem = () => {
  return (
    <ItemWrapper>
        <ItemContent>
            <ItemContentTitle>
                Harry Potter and Prisoner of Azkaban
            </ItemContentTitle>
            <ItemContentAuthor>
                Joan rowling
            </ItemContentAuthor>
            <p>
            Lorem ipsum dolor sit amet consectetur. Eget sed diam blandit blandit. Sapien ut lacus non ligula aenean aliquet feugiat. Pellentesque non tincidunt facilisi sit. Augue tincidunt eu massa libero.
            </p>
            <Button text='Learn more'/>
        </ItemContent>
        <ItemCoverWrapper>
            <ItemBookCover>
                <ItemBookImage src={BookCover} alt='/'/>
            </ItemBookCover>
        </ItemCoverWrapper>
    </ItemWrapper>
  )
}
