// Import Libraries
import React from 'react'
import { Link } from 'react-router-dom'

// Import Styles
import styles from './styles.module.scss'

export const IconLink = ({ to, text, icon: Icon, style }) => {
    return (
        <Link to={to} className={styles.buttonWrapper} style={style}>
            <Icon style={{ height: '24px', width: '24px' }} />
            <span className={styles.buttonText}>{text}</span>
        </Link>
    )
}
