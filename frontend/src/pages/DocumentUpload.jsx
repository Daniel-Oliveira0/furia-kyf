import React, { useState } from 'react';
import Header from '../components/Header/Header';
import '../styles/DocumentUpload.css';

function DocumentUpload() {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (file) {
      console.log('Arquivo selecionado:', file.name);
      // Lógica de envio vai aqui
    }
  };

  return (
    <div className="upload-container">
      <Header />
      <main className="upload-content">
        <h2>Envio de Documentos</h2>
        <form onSubmit={handleSubmit}>
          <input type="file" onChange={handleFileChange} />
          <button type="submit">Enviar</button>
        </form>
      </main>
    </div>
  );
}

export default DocumentUpload;
