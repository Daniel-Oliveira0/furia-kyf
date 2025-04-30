import React, { useState } from 'react';
import Header from '../components/Header/Header';
import '../styles/DocumentUpload.css';

function DocumentUpload() {
  const [files, setFiles] = useState([]);
  const [status, setStatus] = useState('');

  const handleFileChange = (e) => {
    const newFiles = Array.from(e.target.files);
    const existingNames = new Set(files.map(f => f.name));
    const filteredNew = newFiles.filter(f => !existingNames.has(f.name));
    setFiles(prev => [...prev, ...filteredNew]);
    setStatus('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (files.length === 0) return;

    setStatus('Enviando...');
    const formData = new FormData();
    files.forEach((file) => formData.append('documents', file));

    try {
      const response = await fetch('http://localhost:8000/upload', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        setStatus('Documentos enviados com sucesso!');
      } else {
        setStatus('Erro ao enviar documentos.');
      }
    } catch (error) {
      console.error(error);
      setStatus('Erro ao conectar com o servidor.');
    }
  };

  return (
    <div className="upload-container">
      <main className="upload-content">
        <h2>Envio de Documentos</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="file"
            multiple
            onChange={handleFileChange}
          />
          {files.length > 0 && (
            <ul style={{ fontSize: '14px', marginTop: '10px' }}>
              {files.map((file, idx) => (
                <li key={idx}>{file.name}</li>
              ))}
            </ul>
          )}
          <button type="submit">Enviar</button>
        </form>
        {status && <p style={{ marginTop: '16px' }}>{status}</p>}
      </main>
    </div>
  );
}

export default DocumentUpload;
