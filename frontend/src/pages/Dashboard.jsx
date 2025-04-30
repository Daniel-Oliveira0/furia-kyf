import React, { useState } from 'react';
import Header from '../components/Header/Header';
import Card from '../components/Card/Card';
import Input from '../components/Input/Input';
import '../styles/Dashboard.css';

function Dashboard() {
  const [busca, setBusca] = useState('');

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
    </div>
  );
}

export default Dashboard;
