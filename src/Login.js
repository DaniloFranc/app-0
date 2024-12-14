import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../src/components/modules/styles.module.css'; // Importando o CSS modular
import Logo from '../src/img/LogoEmPauta.png'

const Login = () => {
  const [isForgotPassword, setIsForgotPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  // Lógica de login
  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    const nome = e.target.nome.value;
    const password = e.target.password.value;

    try {
      const response = await fetch('https://nova-pasta-5.onrender.com/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ nome, password }),
      });

      const data = await response.json();
      if (data.success) {
        localStorage.setItem('token', data.token);
        localStorage.setItem('nvlAcesso', data.nvlAcesso);

        // Redireciona para o dashboard
        navigate('/dashboard');
      } else {
        setErrorMessage(data.message);
      }
    } catch (error) {
      console.error('Erro ao fazer login:', error);
      setErrorMessage('Erro ao conectar ao servidor.');
    }
  };

  // Lógica de recuperação de senha
  const handleForgotPasswordSubmit = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;

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
        setIsForgotPassword(false);
      } else {
        setErrorMessage(data.message);
      }
    } catch (error) {
      console.error('Erro ao solicitar redefinição:', error);
      setErrorMessage('Erro ao enviar o e-mail.');
    }
  };

  return (
    <div className={styles.bodyLogin}>
      <div className={styles.loginContainer}>
        <img src={Logo} alt="Logo" className={styles.logo} />

        {isForgotPassword ? (
          <div id="forgotPasswordBox" className={styles.forgotPasswordBox}>
            <h2 className={styles.recuperacao}>Recuperação de Senha</h2>
            <form id="forgotPasswordForm" onSubmit={handleForgotPasswordSubmit} className={styles.caixaPrinc}>
              <input type="email" id="email" placeholder="Digite seu e-mail" required />
              <button type="submit" id="redefinir">Enviar e-mail</button>
            </form>
            <button 
              id="backToLogin" 
              onClick={() => setIsForgotPassword(false)} 
              style={{ marginTop: '10px' }}
            >
              Voltar para login
            </button>
          </div>
        ) : (
          <div id="loginBox" className={styles.loginBox}>
            <h2 className={styles.titulo}>Login</h2>
            <form id="loginForm" onSubmit={handleLoginSubmit} className={styles.caixaPrinc}>
              <input type="text" id="nome" placeholder="Nome de usuário" required />
              <input type="password" id="password" placeholder="Senha" required />
              <button type="submit">Entrar</button>
            </form>
            {errorMessage && <p id="error-message" style={{ color: 'red' }}>{errorMessage}</p>}
            <h3>
              <button 
                className={styles.esqueceu} 
                id="forgotPasswordLink" 
                onClick={() => setIsForgotPassword(true)} 
                style={{ background: 'none', border: 'none', color: 'blue', cursor: 'pointer' }}
              >
                Esqueceu a senha?
              </button>
            </h3>
          </div>
        )}
      </div>
    </div>
  );
};

export default Login;
