import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header/Header';
import Card from '../components/Card/Card';
import Input from '../components/Input/Input';
import '../styles/Dashboard.css';

function Dashboard() {
  const [busca, setBusca] = useState('');
  const navigate = useNavigate(); 

  return (
    <div className="dashboard-container">
      <Header />

      <main className="dashboard-content">
        <Card title="Suas Atividades">
          <p>Você participou de 3 eventos este ano.</p>
          <p>Seguindo 5 times nas redes sociais.</p>
        </Card>

        <Card title="Documentos Verificados">
          <p>Status: <span className="verified">Verificado ✅</span></p>
        </Card>
      </main>

      <div style={{ marginTop: '40px', maxWidth: '400px', marginInline: 'auto' }}>
        <Input
          label="Buscar informações"
          value={busca}
          onChange={(e) => setBusca(e.target.value)}
          placeholder="Digite aqui..."
        />
      </div>

      <button
        onClick={() => navigate('/upload')}
        style={{
          marginTop: '20px',
          padding: '12px 20px',
          backgroundColor: 'var(--primary-color)',
          color: '#fff',
          border: 'none',
          borderRadius: '8px',
          cursor: 'pointer'
        }}
      >
        Enviar Documentos
      </button>
    </div>
  );
}

export default Dashboard;
