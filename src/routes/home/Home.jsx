// Import Libraries
import React from 'react'

// Import Components
import { BooksCollection } from '../../components/books-collection/BooksCollection'
import { Featured } from '../../components/featured/Featured'

// Component 
export const Home = () => {
    return (
        <>
            <Featured/>
            <BooksCollection/>
        </>
    )
} 