// Import Libraries
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router'
import { GoChevronLeft } from "react-icons/go"

// Import Styles
import styles from './styles.module.scss'

// Import Components
import { IconLink } from '../../components/icon-link/IconLink'

// Import API 
import { BOOKS_DETAILS_API } from '../../api/API'

export const Book = () => {
    // State 
    const [book, setBook] = useState({})
    
    // UseParams hook 
    const { id } = useParams()
    
    // Book API 
    const url = BOOKS_DETAILS_API

    const fetchBookData = () => {
        axios.get(`${url}/${id}`)
            .then((response) => {
                console.log(response.data)
                setBook(response.data)
            }).catch((error) => {
                console.log(error)
            })
    }

    useEffect(() => {
        fetchBookData()
    }, [id])    

    return (
        <main className={styles.container}>
            <IconLink
                to='/' 
                text='go back'
                icon={GoChevronLeft}
                style={{marginBottom: '15px'}}
            />
            <article className={styles.bookWrapper}>
                <figure className={styles.bookCover}>
                    <img 
                        className={styles.bookImage}
                        src={book?.image_url} 
                        alt={book?.title || 'Book cover'}
                    />
                </figure>
                <div className={styles.contentWrapper}>
                    <h1 className={styles.bookTitle}>
                        {book?.title}
                    </h1>
                    <p className={styles.bookAuthor}>
                        {book?.authors}
                    </p>
                    <p className={styles.bookGenres}>
                        {book?.genres}
                    </p>
                    <blockquote className={styles.bookQuote}>
                        {book?.Quote1}
                    </blockquote>
                    <p>{book?.description}</p>                
                </div>
            </article>
        </main>
    )
}
