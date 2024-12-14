import React from 'react';
import style from '../components/modules/styleDashboard.module.css';
import MusicTheoryImage from '../img/MusicalTheory.png';
import MelodicReadingImage from '../img/leituraRitmica0.png';
import RhythmicReadingImage from '../img/leituraRitmica1.png';
import MusicalPerceptionImage from '../img/percepcaoMusical.png';
import CheckBookIcon from '../icons/checkbook_60dp_5F6368_FILL0_wght400_GRAD0_opsz48.svg';

const Courses = () => {
  return (
    <div id="cursos" className={style.frameCourses}>
      <div className={style.titleCourses}>CURSOS</div>

      <div className={style.alinApprenticeships}>
        {/* Teoria Musical */}
        <div className={style.musicTheoryMenu}>
          <img src={MusicTheoryImage} className={style.imgMusicTheory} alt="Teoria Musical" />
          <a href="MusicTheory.html">
            <button className={style.viewCourseButton}>ACESSAR</button>
          </a>
          <div className={style.boxCourse}>
            <div className={style.titleCourseBox}>TEORIA MUSICAL</div>
            <div className={style.spaceBoxCourse}></div>
            <div className={style.progressCourse}>Última Interação: Não iniciado</div>
          </div>
          <div className={style.line}></div>
          <div className={style.alinMusicTheorS}>
            <div className={style.alinMusicTheory0}>
              <img src={CheckBookIcon} className={style.courseIcon} alt="Ícone de Livro" />
              <div className={style.concCourse}>36 aulas</div>
            </div>
          </div>
          <div className={style.progressBar}>
            <div className={style.progress} id="progress"></div>
            <div className={style.progressValue} id="progress-value">0%</div>
          </div>
        </div>

        {/* Repetição para outros cursos */}
        <div className={style.musicTheoryMenu}>
          <img src={MelodicReadingImage} className={style.imgMusicTheory} alt="Leitura Melódica" />
          <button className={style.viewCourseButton}>ACESSAR</button>
          <div className={style.boxCourse}>
            <div className={style.titleCourseBox}>LEITURA MELÓDICA</div>
            <div className={style.spaceBoxCourse}></div>
            <div className={style.progressCourse}>Última Interação: Não iniciado</div>
          </div>
          <div className={style.line}></div>
          <div className={style.alinMusicTheorS}>
            <div className={style.alinMusicTheory0}>
              <img src={CheckBookIcon} className={style.courseIcon} alt="Ícone de Livro" />
              <div className={style.concCourse}>13 aulas</div>
            </div>
          </div>
          <div className={style.progressBar}>
            <div className={style.progress} id="progress"></div>
            <div className={style.progressValue} id="progress-value">0%</div>
          </div>
        </div>

        {/* Leitura Rítmica */}
        <div className={style.musicTheoryMenu}>
          <img src={RhythmicReadingImage} className={style.imgMusicTheory} alt="Leitura Rítmica" />
          <button className={style.viewCourseButton}>ACESSAR</button>
          <div className={style.boxCourse}>
            <div className={style.titleCourseBox}>LEITURA RÍTMICA</div>
            <div className={style.spaceBoxCourse}></div>
            <div className={style.progressCourse}>Última Interação: Não iniciado</div>
          </div>
          <div className={style.line}></div>
          <div className={style.alinMusicTheorS}>
            <div className={style.alinMusicTheory0}>
              <img src={CheckBookIcon} className={style.courseIcon} alt="Ícone de Livro" />
              <div className={style.concCourse}>22 aulas</div>
            </div>
          </div>
          <div className={style.progressBar}>
            <div className={style.progress} id="progress"></div>
            <div className={style.progressValue} id="progress-value">0%</div>
          </div>
        </div>

        {/* Percepção Musical */}
        <div className={style.musicTheoryMenu}>
          <img src={MusicalPerceptionImage} className={style.imgMusicTheory} alt="Percepção Musical" />
          <button className={style.viewCourseButton}>ACESSAR</button>
          <div className={style.boxCourse}>
            <div className={style.titleCourseBox}>PERCEPÇÃO MUSICAL</div>
            <div className={style.spaceBoxCourse}></div>
            <div className={style.progressCourse}>Última Interação: Não iniciado</div>
          </div>
          <div className={style.line}></div>
          <div className={style.alinMusicTheorS}>
            <div className={style.alinMusicTheory0}>
              <img src={CheckBookIcon} className={style.courseIcon} alt="Ícone de Livro" />
              <div className={style.concCourse}>19 aulas</div>
            </div>
          </div>
          <div className={style.progressBar}>
            <div className={style.progress} id="progress"></div>
            <div className={style.progressValue} id="progress-value">0%</div>
          </div>
        </div>
      </div>

      <div className={style.lineEnd}></div>
    </div>
  );
};

export default Courses;
