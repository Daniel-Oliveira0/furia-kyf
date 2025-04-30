import React from 'react';
import './Header.css';

function Header() {
  return (
    <header className="dashboard-header">
      <h1>Bem-vindo, Daniel!</h1>
      <button className="logout-button">Sair</button>
    </header>
  );
}

export default Header;
