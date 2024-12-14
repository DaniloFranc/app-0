import React, { useEffect } from 'react';
import style from '../components/modules/styleDashboard.module.css'; 
import IconPrevious from '../icons/icon-previous.svg';
import IconNext from '../icons/icon-next.svg'; 

const Inicio = () => {
  useEffect(() => {
    const buttonCenter = document.querySelector(`.${style.buttonCenter}`);
    if (buttonCenter) {
      buttonCenter.addEventListener('click', () => {
        console.log('Botão Cursos clicado');
        const target = document.getElementById('cursos');
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' });

          
          target.classList.add(style.highlight);

          
          setTimeout(() => target.classList.remove(style.highlight), 2000);
        }
      });
    }
  }, []);

  return (
    <div className={style.backgroundCenter}>
      <div className={style.contentCenter}>
        {/* Botão Anterior */}
        <div>
          <button className={style.buttonPrevious}>
            <img src={IconPrevious} className={style.iconPrevious} alt="Anterior" />
          </button>
        </div>

        {/* Espaço entre os botões */}
        <div className={style.spaceButton}></div>

        {/* Conteúdo Principal */}
        <div className={style.AlinMid}>
          <div>
            <div className={style.letterT}>A versão digital da sua escola de música preferida</div>
            <div className={style.letter1}>Estude Música</div>
            <div className={style.letter2}>A Qualquer Hora do Dia</div>
          </div>

          <div>
            <button className={style.buttonCenter}>Cursos</button>
          </div>
        </div>

        {/* Espaço entre os botões */}
        <div className={style.spaceButton}></div>

        {/* Botão Próximo */}
        <div>
          <button className={style.buttonNext}>
            <img src={IconNext} className={style.iconNext} alt="Próximo" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Inicio;