// src/componentes/CapturePhoto.js
import React, { useState, useRef } from 'react';

const FotoCamera = ({ onCapture }) => {
  const [isCameraOpen, setIsCameraOpen] = useState(false);
  const [photo, setPhoto] = useState(null);
  const videoRef = useRef(null);
  const canvasRef = useRef(null);

  const openCamera = async () => {
    setIsCameraOpen(true);
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      videoRef.current.srcObject = stream;
    } catch (err) {
      console.error("Erro ao acessar a câmera: ", err);
    }
  };

  const takePhoto = () => {
    const video = videoRef.current;
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    
    // Defina a resolução da foto
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    
    // Desenhe a imagem capturada no canvas
    context.drawImage(video, 0, 0, canvas.width, canvas.height);
    
    // Converta a imagem para um data URL
    const photoData = canvas.toDataURL('image/png');
    setPhoto(photoData);

    // Opcional: passar a imagem capturada para o componente pai
    onCapture(photoData);

    // Fechar a câmera após tirar a foto
    const stream = video.srcObject;
    const tracks = stream.getTracks();
    tracks.forEach(track => track.stop());
    setIsCameraOpen(false);
  };

  return (
    <div>
      {isCameraOpen ? (
        <div>
          <video ref={videoRef} autoPlay style={{ width: '100%' }} />
          <button onClick={takePhoto}>Capturar Foto</button>
        </div>
      ) : (
        <button onClick={openCamera}>Abrir Câmera</button>
      )}

      {photo && (
        <div>
          <h3>Foto Capturada:</h3>
          <img src={photo} alt="Capturada" style={{ width: '100%' }} />
        </div>
      )}

      {/* Canvas invisível para capturar a foto */}
      <canvas ref={canvasRef} style={{ display: 'none' }}></canvas>
    </div>
  );
};

export default FotoCamera;
