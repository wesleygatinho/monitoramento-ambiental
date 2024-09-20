import React, { useEffect, useState } from 'react';
import styles from './TelaDeCarregamento.module.css';

const TelaDeCarregamento = ({ onLoaded }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onLoaded(); // Chama o callback para ir para a próxima tela
    }, 2000); // Simula 2 segundos de carregamento
    return () => clearTimeout(timer);
  }, [onLoaded]);

  return (
    <div className={styles.loadingScreen}>
      <h1>Carregando...</h1>
    </div>
  );
};

export default TelaDeCarregamento;