import React, { useState } from 'react';  
import styles from './Adivinanza.module.css';  

function Adivinanza({ id, pregunta, respuesta }) {  
  const [mostrarRespuesta, setMostrarRespuesta] = useState(false);  

  const toggleRespuesta = () => {  
    setMostrarRespuesta(!mostrarRespuesta);  
  };  

  return (  
    <div className={styles.adivinanzaCard}>  
      <h3 className={styles.adivinanzaNumero}>Adivinanza #{id}</h3>  
      <p className={styles.pregunta}>{pregunta}</p>  
      <button   
        onClick={toggleRespuesta}   
        className={styles.revelarBtn}  
      >  
        👁️ {mostrarRespuesta ? 'Ocultar' : 'Revelar'} Respuesta  
      </button>  
      {mostrarRespuesta && (  
        <p className={styles.respuesta}>{respuesta}</p>  
      )}  
    </div>  
  );  
}  

export default Adivinanza;