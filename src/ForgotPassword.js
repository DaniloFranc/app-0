import React, { useState } from 'react';

const ForgotPassword = ({ onBackToLogin }) => {
  const [email, setEmail] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch('https://nova-pasta-5.onrender.com/solicitar-redefinicao', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();
      if (data.success) {
        alert('E-mail de redefinição enviado!');
        window.location.href = '/index.html';
      } else {
        setErrorMessage(data.message);
      }
    } catch (error) {
      setErrorMessage('Erro ao enviar o e-mail.');
    }
  };

  return (
    <div className="forgotPasswordBox">
      <h2>Recuperação de Senha</h2>
      <form className="caixaPrinc" onSubmit={handleSubmit}>
        <input
          type="email"
          id="email"
          placeholder="Digite seu e-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit" id="redefinir">Enviar e-mail</button>
      </form>
      {errorMessage && <p id="error-message" style={{ color: 'red' }}>{errorMessage}</p>}
      <button id="backToLogin" onClick={onBackToLogin} style={{ marginTop: '10px' }}>
        Voltar para login
      </button>
    </div>
  );
};

export default ForgotPassword;
