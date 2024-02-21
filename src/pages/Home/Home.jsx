import React from 'react'
import styles from './Home.module.css'

import ButtonPortfolio from '../../components/ButtonPortfolio'

const Home = () => {
  return (
    <div>
        <h1 className={styles.home}>Olá, bem vindo!</h1>
        <ButtonPortfolio/>
    </div>
  )
}

export default Home