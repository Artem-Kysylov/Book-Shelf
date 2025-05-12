// Import Libraries 
import React from 'react'

// Import styles
import styles from './styles.module.scss'

export const Button = ({ text, ...rest }) => {
    return (
        <button className={styles.mainButton} {...rest}>        
            {text}
        </button>
    )
}

