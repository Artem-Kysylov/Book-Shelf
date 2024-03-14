// Import Libraries
import React from 'react'


// Import Components
import { BooksCollection } from '../components/BooksCollection'
import { Featured } from '../components/Featured'


// Component 
export const Home = () => {
  return (
    <div>
        <Featured/>
        <BooksCollection/>
    </div>
  )
}
