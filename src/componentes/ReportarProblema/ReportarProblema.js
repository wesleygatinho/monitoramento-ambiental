// src/components/ReportProblem.js
import React, { useState } from 'react';
import styles from './ReportarProblema.module.css';
import FotoCamera from '../Foto/FotoCamera';
const ReportarProblema = () => {
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');
  const [location, setLocation] = useState(null);
  const [photo, setPhoto] = useState(null);
  const handleGPS = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        setLocation({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude
        });
      });
    } else {
      alert('Geolocalização não suportada no seu navegador.');
    }
  };

  const handleSubmit = () => {
    // Aqui você pode enviar os dados para a central
    console.log({
      category,
      description,
      location,
      photo
    });
  };

  const handlePhotoCapture = (capturedPhoto) => {
    setPhoto(capturedPhoto); // A foto capturada será armazenada aqui
  };

  return (
    <div className={styles.reportarProblema}>
      <h2>Relatar Problema Ambiental</h2>
      <select className={styles.caixaDeCategoria} onChange={(e) => setCategory(e.target.value)}>
        <option value="">Escolha uma categoria</option>
        <option value="lixo">Lixo acumulado</option>
        <option value="limpeza">Áreas que precisam de limpeza</option>
        <option value="desastre">Desastre ambiental</option>
        <option value="outros">Outros</option>
      </select>
      {category === 'outros' && (
        <textarea className={styles.outros} placeholder="Descreva o problema" onChange={(e) => setDescription(e.target.value)} />
      )}
      <div className={styles.botoes}>
        <FotoCamera onCapture={handlePhotoCapture} />
        <button onClick={handleGPS}>Ativar GPS</button>
        <button onClick={handleSubmit}>Enviar Relato</button>
      </div>
    </div>
  );
};

export default ReportarProblema;
