// Import Libraries 
import React from 'react'
import { Link } from 'react-router-dom'

// Import Styles
import styles from './styles.module.scss'

// Import Components
import { Button } from '../../components/button/Button'


export const NotFound = () => {
  return (
    <main className={styles.contentWrapper}>
      <h1 className={styles.mainTitle}>
        404
      </h1>
      <h2 className={styles.secondaryTitle}>
        This page not exist
      </h2>
      <Link to='/'>
        <Button text='home page'/>
      </Link>    
    </main>
  )
}
