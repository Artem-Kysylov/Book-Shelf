// Import Libraries
import React from 'react'
import { Link } from 'react-router-dom'

// Import Styles
import styles from './styles.module.scss'

// Import Components
import { Button } from '../button/Button'

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

export const FeaturedItem = ({ id, image, title, authors, description }) => {
    const truncatedDescr = truncateDescr(description, 195)

    return (
        <article className={styles.parentItemContainer}>
            <div className={styles.itemWrapper}>
                <div className={styles.itemContent}>
                    <h2 className={styles.itemContentTitle}>
                        {title}
                    </h2>
                    <p className={styles.itemContentAuthor}>
                        {authors}
                    </p>
                    <p>
                        {truncatedDescr}
                    </p>
                    <Link to={`books/${id}`}>
                        <Button text='Learn more' />
                    </Link>
                </div>
                <figure className={styles.itemBookCover}>
                    <img 
                        className={styles.itemBookImage} 
                        src={image} 
                        alt={title}
                    />
                </figure>
            </div>
        </article>
    )
}
