// Import Libraries 
import React from 'react'
import { Link } from 'react-router-dom'

// Import Styles
import styles from './styles.module.scss'

// Import Assets 
import Logo from '../../assets/logo-light.svg'

export const Footer = () => {
    return (
        <footer className={styles.websiteFooter}>
            <div className={styles.container}>
                <div className={styles.footerWrapper}>
                    <Link to='/' className={styles.logoLink}>
                        <img src={Logo} alt="Book Shelf Logo" />
                    </Link>
                    <p className={styles.copyright}>
                        Copyright. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    )
}
