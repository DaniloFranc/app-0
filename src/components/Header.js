import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import style from '../components/modules/styleDashboard.module.css'; 
import 'bootstrap/dist/css/bootstrap.min.css'; 
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Logo from '../img/LogoEmPauta.png';
import UserIcon from '../icons/person_70dp_5F6368_FILL0_wght400_GRAD0_opsz48.svg'; 

const Header = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('nvlAcesso');
    navigate('/');
  };

  useEffect(() => {
    const nvlAcesso = localStorage.getItem('nvlAcesso');
    if (nvlAcesso) {
      document.getElementById('nivelAcessoDisplay').innerText = `Nível de Acesso: ${nvlAcesso}`;
    } else {
      document.getElementById('nivelAcessoDisplay').innerText = 'Nível de Acesso não encontrado';
    }

    if (nvlAcesso === '2' || nvlAcesso === '3') {
      const usuariosMenuItem = document.querySelector('a[href="CrudUsuarios.html"]');
      if (usuariosMenuItem) {
        usuariosMenuItem.closest('li').style.display = 'none'; 
      }
    }

    const nomeUsuario = localStorage.getItem('nome');
    if (nomeUsuario) {
      document.getElementById('welcome-message').innerText = `Bem-vindo, ${nomeUsuario}`;
    }

    async function validateAccess() {
      const token = localStorage.getItem('token');
      if (!token) {
        redirectToLogin('Você precisa fazer login para acessar esta página.');
        return;
      }

      try {
        const response = await fetch('https://nova-pasta-5.onrender.com/dashboard-data', {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const data = await response.json();
        if (!data.success) {
          throw new Error(data.message);
        }

        document.body.classList.remove('hidden');
        document.getElementById('welcome-message').innerText = `${data.user.nome}`;
      } catch (error) {
        console.error('Acesso negado:', error);
        redirectToLogin('Sessão expirada ou inválida. Faça login novamente.');
      }
    }

    function redirectToLogin(message) {
      alert(message);
      localStorage.removeItem('token');
      window.location.href = '/';
    }

    validateAccess();

    

  }, [navigate]);

  return (
    <header>
      <div className={style.topoAlin1}>
        <div className={style.AlinUsuario}>
          <img src={UserIcon} className={style.iconUser} alt="Ícone de usuário" />
          <div className={style.letterUser} id="welcome-message">
            Olá, Usuário!
          </div>
        </div>
        <div className={style.spaceTop}></div>
        <div>
          <button id="logoutButton" className={style.logoutButton} onClick={handleLogout}>
            Sair
          </button>
        </div>
      </div>
      <div className={style.topoAlin2}>
        <div>
          <img src={Logo} className={style.logoDashboard} alt="Logo" />
        </div>
        <div className={style.spaceLogo}></div>

        <div className={style.MusicNavBar}>
          <nav className="navbar navbar-expand-lg bg-light">
            <div className="container-fluid">
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#menuNavbar"
                aria-controls="menuNavbar"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="menuNavbar">
                <ul className="navbar-nav mx-auto">
                  <li className="nav-item">
                    <button className="nav-link" onClick={() => {}}>Área do Aluno</button>
                  </li>
                  <li className="nav-item dropdown">
                    <button
                      className="nav-link dropdown-toggle"
                      type="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Cursos
                    </button>
                    <ul className="dropdown-menu" aria-labelledby="gestaoDropdown">
                      <li><button className="dropdown-item" onClick={() => window.location.href = 'MusicTheory.html'}>Teoria Musical</button></li>
                      <li><button className="dropdown-item" onClick={() => {}}>Leitura Melódica</button></li>
                      <li><button className="dropdown-item" onClick={() => {}}>Leitura Rítmica</button></li>
                      <li><button className="dropdown-item" onClick={() => {}}>Percepção Musical</button></li>
                    </ul>
                  </li>
                  <li className="nav-item dropdown">
                    <button
                      className="nav-link dropdown-toggle"
                      type="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Material de Apoio
                    </button>
                    <ul className="dropdown-menu" aria-labelledby="gestaoDropdown">
                      <li><button className="dropdown-item" onClick={() => {}}>Metrônomo / Sequencer</button></li>
                      <li><button className="dropdown-item" onClick={() => {}}>Play Alongs</button></li>
                      <li><button className="dropdown-item" onClick={() => {}}>Referências Musicais</button></li>
                      <li><button className="dropdown-item" onClick={() => {}}>Folhas</button></li>
                      <li><button className="dropdown-item" onClick={() => {}}>Escalas para guitarra e violão</button></li>
                      <li><button className="dropdown-item" onClick={() => {}}>Acordes para guitarra e violão</button></li>
                      <li><button className="dropdown-item" onClick={() => {}}>Acordes para Ukulelê</button></li>
                      <li><button className="dropdown-item" onClick={() => {}}>Acordes para Teclado</button></li>
                      <li><button className="dropdown-item" onClick={() => {}}>Vocalizes</button></li>
                    </ul>
                  </li>
                  <li className="nav-item dropdown">
                    <button
                      className="nav-link dropdown-toggle"
                      type="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Gestão
                    </button>
                    <ul className="dropdown-menu" aria-labelledby="gestaoDropdown">
                      <li><button className="dropdown-item" onClick={() => window.location.href = 'CrudUsuarios.html'}>Usuários</button></li>
                      <li><button className="dropdown-item" onClick={() => {}}>Configurações</button></li>
                    </ul>
                  </li>
                  <div className={style.hidden} id="nivelAcessoDisplay"></div>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
