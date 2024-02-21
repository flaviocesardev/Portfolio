import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './Navbar.module.css'

const Navbar = () => {
  return (
    <div>
      <nav className={styles.navbar}>
        <NavLink to='/' className={styles.brand}>
          &lt;flaviocesardev/&gt;
        </NavLink>
        <ul className={styles.linksList}>

          <li className={styles.liNav}>
              <NavLink to='/' className={({isActive})=>(isActive ? styles.active : '')}>Inicio</NavLink>
          </li>

          <li className={styles.liNav}>
              <NavLink to='/sobre' className={({isActive})=>(isActive ? styles.active : '')}>Sobre</NavLink>
          </li>

          <li className={styles.liNav}>
              <NavLink to='/portfolio' className={({isActive})=>(isActive ? styles.active : '')}>Portfolio</NavLink>
          </li>

        </ul>
      </nav>
    </div>
  )
}

export default Navbar