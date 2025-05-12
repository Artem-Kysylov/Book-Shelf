// Import Libraries 
import React from 'react'
import { CiSearch } from "react-icons/ci"

// Import Styles
import styles from './styles.module.scss'

export const Input = (props) => {
    return (
        <div className={styles.inputWrapper}>
            <CiSearch className={styles.searchIcon} />
            <input 
                type="text" 
                placeholder='Search your books...'
                className={styles.styledInput}
                {...props} 
            />
        </div>
    )
}
