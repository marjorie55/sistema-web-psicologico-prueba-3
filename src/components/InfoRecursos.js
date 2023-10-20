import "./InfoRecursosStyles.css";
import RecursosData from "./RecursosData";
import pdf from "../docs/RecursosMindfulness.pdf";
import pdf2 from "../docs/guiasdeautoayuda.pdf";
import Recurso1 from "../assets/7207192.jpg";
import Recurso2 from "../assets/autoayuda.jpg";
import Recurso3 from "../assets/prevencioSuicidio.png";

function InfoRecursos() {
  return (
    <div className="InfoRecursos">
      <h1>
        Herramientas para Tu Bienestar Emocional: Recursos sobre la Depresión
      </h1>
      {/* <p>insertar texto para recursos</p> */}

      <div>
        <p className="text">
          En esta sección, te ofrecemos una variedad de recursos para mejorar tu
          bienestar emocional, centrándonos en la gestión de la depresión.
          Sabemos que cada individuo es único, y la depresión puede afectar a
          las personas de diferentes maneras. Por eso, hemos organizado nuestros
          recursos en tres categorías clave:
        </p>
      </div>

      <div className="styled-list-1">
        <div>
          <h1>1. Mindfulness</h1>
        </div>
        <div className="styled-list-item-1">
          <p>
            Esta metodología práctica es vital para incrementar la atención
            plena, es decir, a través de esta rutina puedes conectar con el
            momento presente, mirar en tu interior e incrementar una actitud
            positiva ante la vida a través de la aceptación interior y la
            autoconciencia. Por medio del mindfulness, puedes escuchar con más
            detenimiento tu diálogo interior. Por esta razón, el mindfulness es
            terapéutico para prevenir la depresión puesto que para poder
            minimizar el impacto de los pensamientos negativos, en primer lugar
            es fundamental identificarlos para poder cambiar el enfoque.
          </p>
        </div>

        <div>
          <h1>2. Guías de autoayuda</h1>
        </div>
        <div className="styled-list-item-1">
          <p>
            Las guías de autoayuda para la depresión son un conjunto de recursos
            cuidadosamente seleccionados que ofrecen estrategias, consejos y
            ejercicios prácticos para fortalecer tu bienestar emocional y
            enfrentar la depresión. Estas guías están diseñadas para
            proporcionarte herramientas efectivas que puedes utilizar en tu día
            a día. Ya sea que estés buscando formas de manejar el estrés,
            mejorar tu autoestima o aprender técnicas de afrontamiento, estas
            guías están aquí para apoyarte en tu viaje hacia una vida más
            saludable y equilibrada.
          </p>
        </div>

        <div>
          <h1>3. Prevención del suicidio</h1>
        </div>
        <div className="styled-list-item-1">
          <p>
            La prevención del suicidio implica la detección temprana de señales
            de advertencia, la intervención oportuna, la provisión de apoyo
            emocional, el acceso a recursos y tratamientos de salud mental, la
            concienciación pública y la reducción del estigma asociado con los
            problemas de salud mental y el suicidio. El enfoque en la prevención
            del suicidio busca ofrecer esperanza y ayudar a las personas a
            superar momentos de desesperación, brindándoles las herramientas y
            el apoyo necesarios para encontrar una salida a sus problemas
            emocionales.
          </p>
        </div>
      </div>

      <div className="RecursosCard">
        <RecursosData
          image={Recurso1}
          heading="Recursos Mindfulness"
          text="Técnicas de respiración y meditaciones guiadas."
          pdfUrl={pdf} // Ruta del PDF para esta tarjeta
        />
        <RecursosData
          image={Recurso2}
          heading="Guías de autoayuda"
          text="Para desarrollar habilidades de afrontamiento y mejorar su bienestar emocional."
          pdfUrl={pdf2} // Ruta del PDF para esta tarjeta
        />
        <RecursosData
          image={Recurso3}
          heading="Recursos para la prevención del suicidio"
          text="Es importante saber que el suicidio puede prevenirse."
          url="/RecursosPreSuicidio" // Navegará a la página RecursosMind.js
          // pdfUrl={pdf3}// Ruta del PDF para esta tarjeta
        />
      </div>
      {/* btn whasap */}
      <div>
        <h1 className="noestassolo">¡Recuerda No estás solo!</h1>
      </div>
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
}
export default InfoRecursos;
