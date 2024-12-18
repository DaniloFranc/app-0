import React from 'react';
import Header from '../src/components/Header';
import style from '../src/components/modules/styleDashboard.module.css'; 
import MusicTheoryTopMid from './components/MusicTheoryTopMid';



const MusicTheory = () => {

  function fetchProgress() {
          fetch('https://nova-pasta-5.onrender.com/get-progress', {
            method: 'GET',
            headers: {
              'Authorization': `Bearer ${localStorage.getItem('token')}` // Usando o token do localStorage
            }
          })
          .then(response => response.json())
          .then(data => {
            if (data.success) {
              const progress = data.progress || 0; // Se não houver progresso, assume 0
              const progressBar = document.getElementById("progress");
              const progressValue = document.getElementById("progress-value");
              // const ultimaInteracao = document.getElementById("ultimaInteracao");
              const progressBox = document.getElementById("AlinLetterProgressBoxCourse"); // Seleciona a caixa de progresso

              // Atualiza a barra de progresso com o valor recuperado do backend
              progressBar.style.width = `${progress}%`;
              progressValue.textContent = `${progress}%`;

              // Atualiza o valor de últimaInteracao e controla a visibilidade da caixa de progresso
              if (progress > 0) {

                // ultimaInteracao.innerHTML = `Última interação: ${progress}%`;
                progressBox.style.display = 'none';
                
                                
            } else {

                // ultimaInteracao.innerHTML = "Última interação: Não iniciado";
                progressBox.style.display = 'block'; 
            }

            // Se o progresso for maior que 0, marca o checkbox (opcional, se necessário)
            const checkbox = document.getElementById('checkbox');
            checkbox.checked = progress > 0;
            } else {
              console.error('Erro ao buscar o progresso:', data.message);
            }
          })
          .catch(error => {
            console.error('Erro na requisição:', error);
          });
        }

        // Chama a função para buscar o progresso ao carregar a aula
  fetchProgress();

  return (
    <div className={style.dashboardContainer}>
      {/* Header fica fixo no topo */}
      <Header />

      <MusicTheoryTopMid />
      
      {/* Rodapé */}
      <footer className={style.footer}>
        <p>&copy; 2024 Em Pauta - Todos os direitos reservados.</p>
      </footer>
    </div>
  );
};

export default MusicTheory;