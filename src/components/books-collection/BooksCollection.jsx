// Import Libraries
import React, { useState, useEffect } from 'react'
import axios from 'axios'

// Import Styles
import styles from './styles.module.scss'

// Import Components
import { Input } from '../input/Input'
import { BookItem } from '../book-item/BookItem'

// Import API 
import { BOOKS_API } from '../../api/API'

// Generate random books collection 
const getRandomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min
}

export const BooksCollection = () => {
    // States 
    const [books, setBooks] = useState([])
    const [search, setSearch] = useState('')
    const [searchNotFound, setSearchNotFound] = useState(false)
    
    // Books API 
    const url = BOOKS_API
    const randomStart = getRandomInt(0, 120)

    const fetchData = () => {
        axios.get(`${url}&_start=${randomStart}`)
            .then((response) => {
                console.log(response.data)
                setBooks(response.data)
            }).catch((error) => {
                console.log(error)
            })
    }

    useEffect(() => {
        fetchData()
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
        <main className={styles.container}>
            <header className={styles.titleInputWrapper}>
                <h1 className={styles.title}>
                    Books Collection
                    <div className={styles.line}/>
                </h1>            
                <Input
                    onChange={(e) => setSearch(e.target.value)}
                />
            </header>
            <section className={styles.contentContainer}>
                {searchNotFound && 
                    <div className={styles.searchNotFound}>
                        <h2 className={styles.searchNotFoundTitle}>
                            Your search not found...                        
                        </h2>
                        <p>Please make sure the entered data is correct, or try using different keywords for your search</p>
                    </div>
                }
                <div className={styles.booksItemsContainer}>
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
                </div>
            </section>
        </main>
    )
}
