import React from 'react';  
import styles from './Header.module.css';  

function Header() {  
  return (  
    <header className={styles.header}>  
      <h1 className={styles.title}>Adivinanzas Divertidas</h1>  
      <nav className={styles.nav}>  
        <a href="#" className={styles.navLink}>Inicio</a>  
        <a href="#" className={styles.navLink}>Sobre Nosotros</a>  
        <a href="#" className={styles.navLink}>Contacto</a>  
      </nav>  
    </header>  
  );  
}  

export default Header;