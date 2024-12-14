import React from 'react';
import Header from '../src/components/Header'; // Importa o componente Header
import style from '../src/components/modules/styleDashboard.module.css'; // Importando o CSS modular
import Inicio from './components/Inicio';
import Courses from './components/Courses';
import PlayAlongs from './components/PlayAlongs';
import References from './components/References';

const Dashboard = () => {
  return (
    <div className={style.dashboardContainer}>
      {/* Header fica fixo no topo */}
      <Header />

     
      <Inicio />

      <Courses />

      <PlayAlongs />

      <References />
      {/* Rodapé */}
      <footer className={style.footer}>
        <p>&copy; 2024 Em Pauta - Todos os direitos reservados.</p>
      </footer>
    </div>
  );
};

export default Dashboard;
