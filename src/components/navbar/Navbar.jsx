// Import Libraries 
import React from 'react'
import { Link } from 'react-router-dom'

// Import Styles
import styles from './styles.module.scss'

// Import Assets 
import Logo from '../../assets/logo-black.svg'

export const Navbar = () => {
    return (
        <nav className={styles.container}>
            <div className={styles.navbarWrapper}>
                <Link to='/' className={styles.logoLink}>
                    <img src={Logo} alt="Book Shelf Logo" />
                </Link>
            </div>
        </nav>
    )
}
