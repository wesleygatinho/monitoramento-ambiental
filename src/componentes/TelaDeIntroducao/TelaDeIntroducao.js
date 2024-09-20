// src/components/Introduction.js
import React from 'react';
import styles from './TelaDeIntroducao.module.css';

const TelaDeIntroducao = ({ onAgree }) => {
  return (
    <div className={styles.introducao}>
      <h2>Bem-vindo ao Monitoramento Ambiental</h2>
      <p>Aqui você pode relatar questões ambientais da sua região.</p>
      <button onClick={onAgree}>Concordar e continuar</button>
    </div>
  );
};

export default TelaDeIntroducao;
