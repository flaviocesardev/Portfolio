import React from 'react';
import {  NavLink } from 'react-router-dom';
import styles from './ButtonPortfolio.module.css'

const ButtonPortfolio = () => {
  return (
    <div>
      {/* Utilize o componente Link para criar um link */}
      <NavLink to="/portfolio" className={styles.buttonComponent}>
        <button type="submit" className={styles.buttonComponent}>Acessar valor</button>
      </NavLink>
    </div>
  );
};

export default ButtonPortfolio;
