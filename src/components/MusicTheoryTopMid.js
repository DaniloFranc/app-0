import React, { useEffect, useRef } from "react";
import style from "../components/modules/MusicTheory.module.css";
import iconeCalendario from '../icons/iconCalendar.svg';
import iconeRelogio from '../icons/relogio.png';
import iconeModulo from '../icons/modulo.png'
import videoAbertura from '../videos/MusicalTheoryModule1/aula 1 - Abertura.mp4'
import videoPROPRIEDADESDAMÚSICAMELODIA from '../videos/MusicalTheoryModule1/aula 2 - PROPRIEDADES DA MÚSICAMELODIA.mp4'

// Dados de exemplo para os módulos e lições
const modulesData = [
  {
    name: "Módulo 1",
    lessons: [
      { id: "ABERTURA", title: "ABERTURA", type: "main" },
      { id: "PROPRIEDADESDAMÚSICAMELODIA", title: "PROPRIEDADES DA MÚSICA/MELODIA", type: "secondary" },
      { id: "CONCEITODEHARMONIA", title: "CONCEITO DE HARMONIA", type: "secondary" },
      { id: "CONCEITODERITMO", title: "CONCEITO DE RITMO", type: "secondary" },
      { id: "RITMOMELODIAEHARMONIA", title: "RITMO, MELODIA E HARMONIA", type: "secondary" },
    ],
  },
  {
    name: "Módulo 2",
    lessons: [
      { id: "AS7NOTASMUSICAIS", title: "AS 7 NOTAS MUSICAIS", type: "main" },
      { id: "ESCALACROMATICA", title: "ESCALA CROMÁTICA", type: "secondary" },
      { id: "CIFRAS", title: "CIFRAS", type: "secondary" },
      { id: "TONSESEMITONS", title: "TONS E SEMITONS", type: "secondary" },
      { id: "TRANSPOSICAO", title: "TRANSPOSIÇÃO", type: "secondary" },
    ],
  },
  {
    name: "Módulo 3",
    lessons: [
      { id: "CONCEITODEESCALA", title: "CONCEITO DE ESCALA", type: "main" },
      { id: "ESCALAMAIOR", title: "ESCALA MAIOR", type: "secondary" },
      { id: "ESCALAMENORNATURAL", title: "ESCALA MENOR NATURAL", type: "secondary" },
    ],
  },
  {
    name: "Módulo 4",
    lessons: [
      { id: "CONCEITODEINTERVALOS", title: "CONCEITO DE INTERVALOS", type: "main" },
      { id: "CLASSIFICACAODEINTERVALOS", title: "CLASSIFICAÇÃO DOS INTERVALOS", type: "secondary" },
      { id: "CONCEITODEOITAVA", title: "CONCEITO DE OITAVA", type: "secondary" },
      { id: "INTERVALOSSIMPLES", title: "INTERVALOS SIMPLES E COMPOSTOS", type: "secondary" },
      { id: "INTERVALOSCROMATICOS", title: "INTERVALOS DA ESCALA CROMÁTICA", type: "secondary" },
    ],
  },
  {
    name: "Módulo 5",
    lessons: [
      { id: "TRÍADEMAIOR", title: "TRÍADE MAIOR", type: "main" },
      { id: "TRÍADEMENOR", title: "TRÍADE MENOR", type: "secondary" },
      { id: "TRÍADEAUMENTADA", title: "TRÍADE AUMENTADA", type: "secondary" },
      { id: "TRÍADEDIMINUTA", title: "TRÍADE DIMINUTA", type: "secondary" },
      { id: "INVERSÕES", title: "INVERSÕES", type: "secondary" },
      { id: "TRÍADESABERTAS", title: "TRÍADES ABERTAS", type: "secondary" },
    ],
  },
  {
    name: "Módulo 6",
    lessons: [
      { id: "TÉTRADES", title: "TÉTRADES", type: "main" },
      { id: "MEIODIMINUTOEDIMINUTO", title: "ACORDE MEIO DIMINUTO E DIMINUTO", type: "secondary" },
      { id: "EXTENSÕES", title: "EXTENSÕES DOS ACORDES", type: "secondary" },
      { id: "ACORDESUS", title: "ACORDE SUS", type: "secondary" },
      { id: "POWERCHORDS", title: "POWER CHORDS", type: "secondary" },
    ],
  },
  {
    name: "Módulo 7",
    lessons: [
        { id: "INTRODUCAOCAMPOHARMONICO", title: "INTRODUÇÃO AO CAMPO HARMÔNICO", type: "main" },
        { id: "CAMPOHARMONICOMAIOR", title: "CAMPO HARMÔNICO MAIOR", type: "secondary" },
        { id: "CAMPOHARMONICOMAIORTETRADES", title: "CAMPO HARMÔNICO MAIOR EM TÉTRADES", type: "secondary" },
        { id: "CAMPOHARMONICOMENOR", title: "CAMPO HARMÔNICO MENOR", type: "secondary" },
        { id: "TRANSPOSICAODETONALIDADE", title: "TRANSPOSIÇÃO DE TONALIDADE", type: "secondary" }
    ],
  },
     
]

const MusicalTheory = () => {
  const boxClassroomRef = useRef(null);


  


 
  useEffect(() => {

    
    
    const handleAberturaClick = () => {
      // Limpa a tela antes de adicionar os novos elementos
      while (boxClassroomRef.current.firstChild) {
        boxClassroomRef.current.removeChild(boxClassroomRef.current.firstChild);
      }
       

      // Título da aula
      const titleAula = document.createElement("div");
      titleAula.setAttribute("class", style.titleAula); // Usando a classe do CSS module
      titleAula.innerHTML = "Aula 1 - Abertura";
      boxClassroomRef.current.prepend(titleAula);

      // Vídeo da aula
      const videoAula = document.createElement("video");
      videoAula.setAttribute("class", style.videoAula); // Usando a classe do CSS module
      videoAula.setAttribute("controls", "");

      const aula = document.createElement("source");
      aula.setAttribute("src", videoAbertura);
      aula.setAttribute("type", "video/mp4");
      videoAula.appendChild(aula);
      boxClassroomRef.current.appendChild(videoAula);

      // Botões de apostilas e exercícios
      const AlinBotApostilas = document.createElement("div");
      AlinBotApostilas.setAttribute("class", style.AlinBotApostilas); // Usando a classe do CSS module
      boxClassroomRef.current.appendChild(AlinBotApostilas);

      const buttonExercicies = document.createElement("button");
      buttonExercicies.setAttribute("id", "buttonExercicies");
      buttonExercicies.setAttribute("class", `${style.BotãoExercicio} ${style.clickedButton}`); // Usando múltiplas classes
      buttonExercicies.innerHTML = "EXERCÍCIO";
      AlinBotApostilas.appendChild(buttonExercicies);

      const ExerciciesBox = document.createElement("div");
      ExerciciesBox.setAttribute("class", style.ExerciciesBox); // Usando a classe do CSS module
      boxClassroomRef.current.appendChild(ExerciciesBox);

      const lineExerciciesBox = document.createElement("div");
      lineExerciciesBox.setAttribute("class", style.lineExerciciesBox); // Usando a classe do CSS module
      ExerciciesBox.prepend(lineExerciciesBox);

      const buttonIniciarExercicio = document.createElement("button");
      buttonIniciarExercicio.setAttribute("class", style.buttonIniciarExercicio); // Usando a classe do CSS module
      buttonIniciarExercicio.innerHTML = "Iniciar Exercício";
      ExerciciesBox.appendChild(buttonIniciarExercicio);

      const lineExerciciesBox1 = document.createElement("div");
      lineExerciciesBox1.setAttribute("class", style.lineExerciciesBox1); // Usando a classe do CSS module
      ExerciciesBox.appendChild(lineExerciciesBox1);

      // Adicionando o checkbox
      const checkboxContainer = document.createElement("div");
      checkboxContainer.setAttribute("class", style.checkboxContainer); // Usando a classe do CSS module

      const checkbox1 = document.createElement("input");
      checkbox1.setAttribute("type", "checkbox");
      checkbox1.setAttribute("class", style.lessonCheckbox); // Usando a classe do CSS module
      checkbox1.setAttribute("id", "checkbox1");
      checkbox1.setAttribute("data-percentage", "2.86");

      const label = document.createElement("label");
      label.setAttribute("for", "checkbox1");
      label.textContent = "Marcar como concluído";

      checkboxContainer.appendChild(checkbox1);
      checkboxContainer.appendChild(label);
      boxClassroomRef.current.appendChild(checkboxContainer);

      // Função para buscar o progresso do backend
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
          // const checkbox1 = document.getElementById('checkbox1');
          // checkbox1.checked = progress > 0;



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


      function toggleCheckbox1() {
        // Faz a requisição para obter o progresso da aula 1
        fetch('https://nova-pasta-5.onrender.com/get-progressMusicTheoryProgressMod1Aula1', {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}` // Usa o token do localStorage
          }
        })
        .then(response => response.json())
        .then(data => {
          if (data.success) {
            const progress = data.progress || 0; // Se não houver progresso, assume 0
            const checkbox1 = document.getElementById('checkbox1');
            
            // Marca a checkbox se o progresso for maior que 0, caso contrário desmarca
            checkbox1.checked = progress > 0;
          } else {
            console.error('Erro ao buscar o progresso:', data.message);
          }
        })
        .catch(error => {
          console.error('Erro na requisição:', error);
        });
      }

      toggleCheckbox1()
      

      // Atualizar barra de progresso ao marcar/desmarcar o checkbox
      checkbox1.addEventListener("change", () => {
        const progressBar = document.getElementById("progress");
        const progressValue = document.getElementById("progress-value");
        const percentage = parseFloat(checkbox1.dataset.percentage);

        if (checkbox1.checked) {
          progressBar.style.width = `${percentage}%`;
          progressValue.textContent = `${percentage}%`;
          sendProgressToDB(percentage); // Enviar progresso para o DB
        } else {
          progressBar.style.width = `${percentage}%`;
          progressValue.textContent = `${percentage}%`;
          sendProgressToDB(0); // Enviar 0% quando desmarcar
        }
      });

      // Função para enviar o progresso ao backend
      function sendProgressToDB(progress) {
        fetch('https://nova-pasta-5.onrender.com/update-progressMusicTheoryProgressMod1Aula1', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}` // Supondo que o token esteja armazenado no localStorage
          },
          body: JSON.stringify({ progress })
        })
        .then(response => response.json())
        .then(data => {
          if (data.success) {
            console.log('Progresso atualizado com sucesso!');
          } else {
            console.error('Erro ao atualizar o progresso:', data.message);
          }
        })
        .catch(error => {
          console.error('Erro na requisição:', error);
        });
      }

      boxClassroomRef.current.scrollIntoView({ behavior: 'smooth' });
    };

    const handlePROPRIEDADESDAMÚSICAMELODIAClick = () => {
      // Limpa a tela antes de adicionar os novos elementos
      while (boxClassroomRef.current.firstChild) {
        boxClassroomRef.current.removeChild(boxClassroomRef.current.firstChild);
      }
       

      // Título da aula
      const titleAula = document.createElement("div");
      titleAula.setAttribute("class", style.titleAula); // Usando a classe do CSS module
      titleAula.innerHTML = "Aula 2 - PROPRIEDADES DA MÚSICAMELODIA";
      boxClassroomRef.current.prepend(titleAula);

      // Vídeo da aula
      const videoAula = document.createElement("video");
      videoAula.setAttribute("class", style.videoAula); // Usando a classe do CSS module
      videoAula.setAttribute("controls", "");

      const aula = document.createElement("source");
      aula.setAttribute("src", videoPROPRIEDADESDAMÚSICAMELODIA);
      aula.setAttribute("type", "video/mp4");
      videoAula.appendChild(aula);
      boxClassroomRef.current.appendChild(videoAula);

      // Botões de apostilas e exercícios
      const AlinBotApostilas = document.createElement("div");
      AlinBotApostilas.setAttribute("class", style.AlinBotApostilas); // Usando a classe do CSS module
      boxClassroomRef.current.appendChild(AlinBotApostilas);

      const buttonExercicies = document.createElement("button");
      buttonExercicies.setAttribute("id", "buttonExercicies");
      buttonExercicies.setAttribute("class", `${style.BotãoExercicio} ${style.clickedButton}`); // Usando múltiplas classes
      buttonExercicies.innerHTML = "EXERCÍCIO";
      AlinBotApostilas.appendChild(buttonExercicies);

      const ExerciciesBox = document.createElement("div");
      ExerciciesBox.setAttribute("class", style.ExerciciesBox); // Usando a classe do CSS module
      boxClassroomRef.current.appendChild(ExerciciesBox);

      const lineExerciciesBox = document.createElement("div");
      lineExerciciesBox.setAttribute("class", style.lineExerciciesBox); // Usando a classe do CSS module
      ExerciciesBox.prepend(lineExerciciesBox);

      const buttonIniciarExercicio = document.createElement("button");
      buttonIniciarExercicio.setAttribute("class", style.buttonIniciarExercicio); // Usando a classe do CSS module
      buttonIniciarExercicio.innerHTML = "Iniciar Exercício";
      ExerciciesBox.appendChild(buttonIniciarExercicio);

      const lineExerciciesBox1 = document.createElement("div");
      lineExerciciesBox1.setAttribute("class", style.lineExerciciesBox1); // Usando a classe do CSS module
      ExerciciesBox.appendChild(lineExerciciesBox1);

      // Adicionando o checkbox
      const checkboxContainer = document.createElement("div");
      checkboxContainer.setAttribute("class", style.checkboxContainer); // Usando a classe do CSS module

      const checkbox2 = document.createElement("input");
      checkbox2.setAttribute("type", "checkbox");
      checkbox2.setAttribute("class", style.lessonCheckbox); // Usando a classe do CSS module
      checkbox2.setAttribute("id", "checkbox2");
      checkbox2.setAttribute("data-percentage", "2.86");

      const label = document.createElement("label");
      label.setAttribute("for", "checkbox2");
      label.textContent = "Marcar como concluído";

      checkboxContainer.appendChild(checkbox2);
      checkboxContainer.appendChild(label);
      boxClassroomRef.current.appendChild(checkboxContainer);

      // Função para buscar o progresso do backend
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
          // const checkbox2 = document.getElementById('checkbox2');
          // checkbox2.checked = progress > 0;



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


      function toggleCheckbox2() {
        // Faz a requisição para obter o progresso da aula 1
        fetch('https://nova-pasta-5.onrender.com/get-progressMusicTheoryProgressMod1Aula2', {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}` // Usa o token do localStorage
          }
        })
        .then(response => response.json())
        .then(data => {
          if (data.success) {
            const progress = data.progress || 0; // Se não houver progresso, assume 0
            const checkbox2 = document.getElementById('checkbox2');
            
            // Marca a checkbox se o progresso for maior que 0, caso contrário desmarca
            checkbox2.checked = progress > 0;
          } else {
            console.error('Erro ao buscar o progresso:', data.message);
          }
        })
        .catch(error => {
          console.error('Erro na requisição:', error);
        });
      }

      toggleCheckbox2()
      

      // Atualizar barra de progresso ao marcar/desmarcar o checkbox
      checkbox2.addEventListener("change", () => {
        const progressBar = document.getElementById("progress");
        const progressValue = document.getElementById("progress-value");
        const percentage = parseFloat(checkbox2.dataset.percentage);

        if (checkbox2.checked) {
          progressBar.style.width = `${percentage}%`;
          progressValue.textContent = `${percentage}%`;
          sendProgressToDB(percentage); // Enviar progresso para o DB
        } else {
          progressBar.style.width = `${percentage}%`;
          progressValue.textContent = `${percentage}%`;
          sendProgressToDB(0); // Enviar 0% quando desmarcar
        }
      });

      // Função para enviar o progresso ao backend
      function sendProgressToDB(progress) {
        fetch('https://nova-pasta-5.onrender.com/update-progressMusicTheoryProgressMod1Aula2', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}` // Supondo que o token esteja armazenado no localStorage
          },
          body: JSON.stringify({ progress })
        })
        .then(response => response.json())
        .then(data => {
          if (data.success) {
            console.log('Progresso atualizado com sucesso!');
          } else {
            console.error('Erro ao atualizar o progresso:', data.message);
          }
        })
        .catch(error => {
          console.error('Erro na requisição:', error);
        });
      }

      boxClassroomRef.current.scrollIntoView({ behavior: 'smooth' });
    };

    const aberturaElement = document.getElementById("ABERTURA");
    const propriedadesElement = document.getElementById("PROPRIEDADESDAMÚSICAMELODIA");

    if (aberturaElement) {
      aberturaElement.addEventListener("click", handleAberturaClick);
    }
    if (propriedadesElement) {
      propriedadesElement.addEventListener("click", handlePROPRIEDADESDAMÚSICAMELODIAClick);
    }

    // Cleanup dos listeners
    return () => {
      if (aberturaElement) {
        aberturaElement.removeEventListener("click", handleAberturaClick);
      }
      if (propriedadesElement) {
        propriedadesElement.removeEventListener("click", handlePROPRIEDADESDAMÚSICAMELODIAClick);
      }
    };

  }, []);


  
  return (
    <>
      {/* Título Principal */}
      <div className={style.AlinTheoryMusicalTop}>
        <div className={style.letterTheoryMusicalTop}>TEORIA MUSICAL</div>
      </div>

      {/* Caixa de Teoria Musical */}
      <div className={style.BoxMusicalTheory}>
        <div>
          <div className={style.BoxTopMusicalTheory}>Conteúdo:</div>

          {/* Módulos */}
          <div className={style.AlinModulo}>
            {modulesData.map((module, index) => (
              <div key={index}>
                <div className={style.AlinModulo1}>
                  <img src={iconeModulo} className={style.iconModulo} alt="Ícone Módulo" />
                  <div className={style.spaceModulo1}></div>
                  <div className={style.Modulo1}>{module.name}</div>
                </div>
                {module.lessons.map((lesson, lessonIndex) => (
                  <div
                    key={lessonIndex}
                    className={lesson.type === "main" ? style.AlinSubtitles0 : style.AlinSubtitles1}
                    id={lesson.id}
                  >
                    <img src={iconeRelogio} className={style.iconClock} alt="Ícone Relógio" />
                    <div className={style.spaceModuloSubtitles1}></div>
                    <div className={style.letterCourse}>{lesson.title}</div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Espaçamento */}
        <div className={style.spaceMusicalTheory}></div>

        {/* Progresso */}
        <div>
          <div className={style.titleMusicalTheoryCourse}>TEORIA MUSICAL</div>
          <div>
            <div className={style.littleBoxMusicalTheory}>
              <img src={iconeCalendario} className={style.iconCalendar} alt="Ícone Calendário" />
              <div id="removerAdicionar">
                <div className={style.AlinLetterProgressBoxCourse} id="AlinLetterProgressBoxCourse">
                  <div className={style.letterProgressBoxCourse0}>Você ainda não iniciou</div>
                  <div className={style.letterProgressBoxCourse1}>
                    seus estudos neste curso
                  </div>
                </div>
              </div>
              <div className={style.spaceLitteBox}></div>
              <div>
                <div className={style.letterProgressBox}>Andamento</div>
                <div className={style.progressBar0}>
                  <div className={style.progress0} id="progress"></div>
                  <div className={style.progressValue0} id="progress-value">
                    0%
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Caixa de Aulas */}
          <div id="boxClassroom" ref={boxClassroomRef}>
            {/* A função ABERTURA vai agir aqui */}
          </div>
        </div>
      </div>

      {/* Elemento escondido */}
      <div id="nivelAcessoDisplay" className={style.hidden}></div>
    </>
  );
};

export default MusicalTheory;
