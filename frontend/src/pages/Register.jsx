import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Register.css';

function Register() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    cpf: '',
    endereco: '',
    interesses: '',
    eventos: '',
    compras: '',
    senha: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Dados do formulário:', formData);
    // Enviar com fetch para backend 
  };

  return (
    <div className="register-container">
      <h2>Cadastro de Usuário</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="nome" placeholder="Nome completo" onChange={handleChange} required />
        <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
        <input type="text" name="cpf" placeholder="CPF" onChange={handleChange} required />
        <input type="text" name="endereco" placeholder="Endereço" onChange={handleChange} required />
        <input type="text" name="interesses" placeholder="Interesses (ex: CS:GO, LoL)" onChange={handleChange} />
        <input type="text" name="eventos" placeholder="Eventos que participou" onChange={handleChange} />
        <input type="text" name="compras" placeholder="Compras relacionadas a e-sports" onChange={handleChange} />
        <input type="password" name="senha" placeholder="Senha" onChange={handleChange} required />
        <button type="submit">Cadastrar</button>
      </form>
      <p className="register-link">
        Já tem uma conta? <Link to="/">Entrar</Link>
      </p>
    </div>
  );
}

export default Register;
