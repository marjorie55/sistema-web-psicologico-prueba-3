<link
  rel="stylesheet"
  href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css"
  integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p"
  crossorigin="anonymous"
/>;
import depresion from "../assets/depresion.jpg";
import depresion2 from "../assets/depresion2.jpg";
import depresion3 from "../assets/depresion4.png";
import depresion4 from "../assets/depresion.png";
import whasap from "../assets/whasap.png";
import "./InfoInicioStyles.css";
import DepresionData from "./DepresionData";

const InfoInicio = () => {
  return (
    <div className="info">
      <h1>Depresión</h1>
      <p>
        "Cuando la depresión se reconoce pronto y se trata adecuadamente,
        generalmente responde bien al tratamiento". DR. JORGE PLA VIDAL
      </p>

      <DepresionData
        className="first-desc"
        heading="¿Qué es la depresión?"
        text="La depresión es un trastorno mental 
        caracterizado fundamentalmente por un bajo 
        estado de ánimo y sentimientos de tristeza, 
        asociados a alteraciones del comportamiento, 
        del grado de actividad y del pensamiento."
        img1={depresion}
        img2={depresion2}
      />

      <DepresionData
        className="first-desc-reverse"
        heading="¿Cómo se diagnostica la depresión?"
        text="Encontrarse en un momento determinado 
        más triste o con el estado de ánimo más bajo 
        no es suficiente para un diagnóstico de depresión.
        Para eso, es preciso que la intensidad de los síntomas, 
        su duración (al menos, 2 semanas) y la incapacidad que generan, 
        sean de una entidad suficiente como para afectar el normal o adecuado 
        funcionamiento de la persona."
        img1={depresion3}
        img2={depresion4}
      />

      <h1>Síntomas y tipologías</h1>
      <p>
        En un episodio depresivo, la persona experimenta un estado de ánimo
        deprimido (tristeza, irritabilidad, sensación de vacío) o una pérdida
        del placer o del interés por actividades. Un episodio depresivo es
        distinto de las variaciones habituales del estado de ánimo. Estos
        episodios abarcan la mayor parte del día, casi todos los días, durante
        al menos dos semanas.
      </p>
      <h3>Pueden presentarse varios síntomas más, como:</h3>
      <p>
        <ul class="styled-list">
          <li class="styled-list-item">Dificultades para concentrarse.</li>
          <li class="styled-list-item">
            Un sentimiento de culpa excesiva o de baja autoestima.
          </li>
          <li class="styled-list-item">
            Falta de esperanza acerca del futuro.
          </li>
          <li class="styled-list-item">Pensamientos de muerte o suicidio.</li>
          <li class="styled-list-item">Alteraciones del sueño.</li>
          <li class="styled-list-item">Cambios en el apetito o en el peso.</li>
          <li class="styled-list-item">
            Sensación de cansancio acusado o de falta de energía.
          </li>
        </ul>
      </p>
      {/* btn whasap */}
      <span className="tooltip whatsapp-tooltip">
        <a
          href="https://wa.me/50402020?text=¡Hola, necesito hablar y compartir cómo me siento. Estoy lidiando con la depresión y estoy buscando apoyo. ¿Puedes hablar?"
          target="_blank"
          className="whatsapp-floating-button"
        >
          <i className="fa-brands fa-whatsapp fa-2x"></i>
        </a>
      </span>
    </div>
  );
};

export default InfoInicio;
