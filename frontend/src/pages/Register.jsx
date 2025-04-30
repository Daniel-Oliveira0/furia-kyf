import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Input from '../components/Input/Input';
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
  };

  return (
    <div className="register-container">
      <h2>Cadastro de Usuário</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-columns">
          <div className="input-wrapper">
            <Input type="text" name="nome" placeholder="Nome completo" value={formData.nome} onChange={handleChange} />
          </div>
          <div className="input-wrapper">
            <Input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} />
          </div>
          <div className="input-wrapper">
            <Input type="text" name="cpf" placeholder="CPF" value={formData.cpf} onChange={handleChange} />
          </div>
          <div className="input-wrapper">
            <Input type="text" name="endereco" placeholder="Endereço" value={formData.endereco} onChange={handleChange} />
          </div>
          <div className="input-wrapper">
            <Input type="text" name="interesses" placeholder="Interesses (ex: CS:GO, LoL)" value={formData.interesses} onChange={handleChange} />
          </div>
          <div className="input-wrapper">
            <Input type="text" name="eventos" placeholder="Eventos que participou" value={formData.eventos} onChange={handleChange} />
          </div>
          <div className="input-wrapper">
            <Input type="text" name="compras" placeholder="Compras relacionadas a e-sports" value={formData.compras} onChange={handleChange} />
          </div>
          <div className="input-wrapper">
            <Input type="password" name="senha" placeholder="Senha" value={formData.senha} onChange={handleChange} />
          </div>
        </div>
        <button type="submit">Cadastrar</button>
      </form>
      <p className="register-link">
        Já tem uma conta? <Link to="/">Entrar</Link>
      </p>
    </div>
  );
}

export default Register;
