// Import Libraries
import React from 'react'
import { useNavigate } from 'react-router-dom'

// Import styles
import styles from './styles.module.scss'

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


export const BookItem = ({ id, image, title, authors, genres }) => {
  const truncatedTitle = truncateTitle(title, 78)
  const navigate = useNavigate()

  const handleClick = () => {
    navigate(`books/${id}`)
  }

  return (
    <article className={styles.bookItemWrapper}>
      <figure className={styles.bookItemCover} onClick={handleClick}>
        <div className={styles.bookItemImageContainer}>
          {image && <img className={styles.bookItemImage} src={image} alt={title} />}
        </div>        
      </figure>
      <h3 className={styles.bookItemTitle}>
        {truncatedTitle}
      </h3>
      <p className={styles.bookItemAuthor}>
        {authors}
      </p>
      <p className={styles.bookItemGenre}>
        {genres}
      </p>
    </article>
  )
}
