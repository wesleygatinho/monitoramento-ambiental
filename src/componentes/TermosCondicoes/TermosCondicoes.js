// src/components/TermsAndConditions.js
import React, { useState } from 'react';
import styles from './TermosCondicoes.module.css';
const TermsAndConditions = ({ onAccept }) => {
  const [accepted, setAccepted] = useState(false);

  const handleAccept = () => {
    if (accepted) onAccept();
  };

  return (
    <div className={styles.termos}>
      <h2>Termos de Privacidade</h2>
      <p>Você concorda em compartilhar sua localização e mídias para ajudar a monitorar questões ambientais?</p>
      <div className={styles.caixaTermos}>

        <input type="checkbox" onChange={() => setAccepted(!accepted)} />
        <label>Concordo com os termos</label>
      </div>
      <button onClick={handleAccept} disabled={!accepted}>Continuar</button>
    </div>
  );
};

export default TermsAndConditions;
