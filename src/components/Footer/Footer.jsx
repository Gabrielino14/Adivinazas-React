import React from 'react';  
import styles from './Footer.module.css';  

function Footer() {  
  return (  
    <footer className={styles.footer}>  
      <p className={styles.copyright}>  
        © 2024 Adivinanzas Divertidas. Todos los derechos reservados.  
      </p>  
      <div className={styles.socialLinks}>  
        <a href="#" className={styles.socialLink}>Facebook</a>  
        <a href="#" className={styles.socialLink}>Twitter</a>  
        <a href="#" className={styles.socialLink}>Instagram</a>  
      </div>  
    </footer>  
  );  
}  

export default Footer;