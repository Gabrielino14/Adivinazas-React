import React, { useState, useEffect } from 'react';
import Adivinanza from '../Adivinanza/Adivinanza.jsx';
import styles from './AdivinanzaContainer.module.css';
import { adivinanzasData } from '../../data/adivinanzasData.jsx';

function AdivinanzaContainer() {
  const [adivinanzas, setAdivinanzas] = useState([]);

  useEffect(() => {
    const cargarAdivinanzas = async () => {
      try {
        setAdivinanzas(adivinanzasData.adivinanzas);
      } catch (error) {
        console.error("Error cargando adivinanzas", error);
      }
    };

    cargarAdivinanzas();
  }, []);

  return (
    <div className={styles.container}>
      <h2 className={styles.titulo}>Nuestras Adivinanzas</h2>
      <div className={styles.grid}>
        {adivinanzas.map(adivinanza => (
          <Adivinanza 
            key={adivinanza.id}
            id={adivinanza.id}
            pregunta={adivinanza.pregunta}
            respuesta={adivinanza.respuesta}
          />
        ))}
      </div>
    </div>
  );
}

export default AdivinanzaContainer;