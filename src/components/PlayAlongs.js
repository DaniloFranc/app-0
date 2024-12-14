import React from 'react';
import style from '../components/modules/styleDashboard.module.css';
const PlayAlongs = () => {
  return (
    <div>
      <div className={style.backgroundPlayAlongs}>
        <div className={style.PlayAlongsBox}>
          <div className={style.contentPlayAlongs}>
            <div className={style.boxPlayAlongs}>
              <div className={style.textTitle}>
                <div>Uma Biblioteca com</div>
                <div className={style.PlayAlongsTextBoxSpace}></div>
                <div className={style.AlongBoxNegrito}>mais de 500 play</div>
              </div>
              <div className={style.textTitle2}>alongs</div>
              <div className={style.textSubtitle}>Toque ou cante sua música preferida!</div>
            </div>
          </div>
          <button className={style.buttonPlayAlongs}>ACESSAR</button>
        </div>
        <div className={style.spacePlayAlongs}></div>
        <div>
          <div className={style.PlayAlongAudio}>
            <div className={style.PlayAlongAudioLetter}>Ouça um exemplo</div>
            <div className={style.PlayAlongAudioLetter}>de Play Along</div>
          </div>
          <div className={style.audioBox}>
            <audio controls>
              <source src="audio/karaoke - Ironic.mp3" type="audio/mpeg" />
              Seu navegador não suporta o elemento de áudio.
            </audio>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayAlongs;
