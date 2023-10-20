import React, { useState } from 'react';
import '../App.css'

function Formulario() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:3000/v1/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        const data = await response.json();
        const tokenJWT = data.jwt;
        window.alert('Login realizado com sucesso! Token obtido: ' + tokenJWT);
        console.log(tokenJWT)
        } else {
        window.alert('Dados inválidos', response.status);
      }
    } catch (error) {
      console.error('Erro ao enviar os dados:', error);
    }
  };

  return (
    <div className='login'>
        <form onSubmit={handleSubmit}>
            <div className='dados'>
            <div className='teste'>
                    <div>Email</div>
                    <input
                        type="email"
                        value={email}
                        onChange={handleChangeEmail}
                    />
                </div>
            </div>
            <div className='dados'>
                <div className='teste'>
                    <div>Senha</div>
                    <input
                        type="password"
                        value={password}
                        onChange={handleChangePassword}
                    />
                </div>
            </div>
            <div className='dados'>
                <button className='botao' type="submit">
                    <b>LOGIN</b>
                </button>
            </div>
        </form>
  </div>
    
  );
}

export default Formulario;
