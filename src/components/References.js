import React from 'react';
import style from '../components/modules/styleDashboard.module.css';

const References = () => {
  return (
    <div className={style.boxBaseboard}>
      <div className={style.alinBaseboard}>
        <div className={style.title}>REFERÊNCIAS</div>
        <div className={style.spaceBaseboard}></div>
        <div className={style.baseboard}>MUSICAIS</div>
      </div>
      <div className={style.textSection}>
        <p>
          Todo músico precisa ter boas referências e alguém para se inspirar, por este motivo <br />
          separamos para você uma coletânea especial com vídeos de quem realmente entende do<br />
          assunto.
        </p>
      </div>
      <div className={style.textSection}>
        <p>
          Aqui você vai encontrar quem são as maiores referências musicais do seu instrumento<br />
          preferido. Conheça o trabalho de músicos como Victor Wooten, Mike Portnoy, George Benson,<br />
          Gabriel Grossi e muitos outros que mudaram o rumo da música no mundo. Acesse e curta esta<br />
          viagem!
        </p>
      </div>
      <button className={style.buttonReferences}>REFERÊNCIAS</button>
    </div>
  );
};

export default References;

