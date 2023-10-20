<link
  rel="stylesheet"
  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
></link>;
import terapia from "../assets/terapiaonlineee.jpg";
import terapia2 from "../assets/terapiaonline22.jpg";
import "./TerapiaOnlineStyles.css";
import TerapiaOnlineData from "./TerapiaOnlineData";

document.addEventListener("DOMContentLoaded", function () {
  // Código para cargar la hoja de estilo de Font Awesome
  var linkElement = document.createElement("link");
  linkElement.rel = "stylesheet";
  linkElement.href =
    "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css";
  document.head.appendChild(linkElement);
});

const TerapiaOnline = () => {
  return (
    <div className="infoTerapia">
      <h1>Importancia de la Terapia Online</h1>
      <p>
        Recibir ayuda profesional puede guiar nuestro actuar con el fin de
        identificar nuestras emociones negativas disfuncionales, nuestros
        pensamientos irracionales y aquellas conductas que no están logrando
        ajustarse a la vida, según los nuevos cambios y las circunstancias que
        todos vivimos.
      </p>
      <br></br>
      <div>
        <p>
          <span style={{ color: "#00b09b" }}>
            La psicoterapia online permite que la distancia física no sea un
            obstáculo.
          </span>{" "}
          Entre psicoterapeuta y paciente se construye un sólido vínculo
          terapéutico, basado en la sintonía emocional, el respeto y el
          compromiso, en el que el paciente es acompañado mientras aprende a
          mirarse, entenderse, regularse y quererse, pudiendo así movilizar sus
          propios recursos para afrontar efectivamente los desafíos de esta
          situación adversa y por demás compleja.
        </p>
      </div>

      <TerapiaOnlineData
        className="first-descTera"
        // heading="¿Qué es la depresión?"
        text={`Lo único que se necesita es un espacio tranquilo y silencioso, íntimo y personal, donde puedas hablar, sentir y ser sin miedos.
        \nEste espacio debe ser libre de interrupciones, que ofrezca privacidad y un ordenador (debemos evitar pantallas pequeñas) con conexión estable a internet, así como el compromiso de dedicar una hora semanal para ti.
        \nTambién se recomienda el uso de auriculares para aumentar la sensación de intimidad y mayor concentración en la terapia.`}
        img1={terapia}
        img2={terapia2}
      />
      <br></br>
      <br></br>

      {/* Ventajas */}
      <section class="terapia-section">
        <h2>Beneficios de la Terapia Online</h2>

        <div class="ventajas">
          <div class="ventaja">
            <i class="fa-solid fa-house-user"></i>
            <p>No hay límite espacial</p>
          </div>
          <div class="ventaja">
            <i class="fa-solid fa-bed"></i>
            <p>Mayor Intimidad</p>
          </div>
          <div class="ventaja">
            <i class="fa-solid fa-money-check-dollar"></i>
            <p>Menor costo para el paciente</p>
          </div>
          <div class="ventaja">
            <i class="fa-solid fa-stopwatch-20"></i>
            <p>No hay tiempo de espera</p>
          </div>
          <div class="ventaja">
            <i class="fa-solid fa-laptop"></i>
            <p>Facilidades de acceso</p>
          </div>
        </div>
      </section>

      <section class="terapia-section">
        <h2>Tipos de Terapia Online</h2>

        <div class="ventajas">
          <div class="ventaja">
            <i class="fa-solid fa-video"></i>
            <p>Video Conferencia</p>
          </div>
          <div class="ventaja">
            <i class="fa-solid fa-pen"></i>
            <p>Comunicación Escrita</p>
          </div>
          <div class="ventaja">
            <i class="fa-solid fa-phone-volume"></i>
            <p>Terapia Telefónica Online</p>
          </div>
        </div>
      </section>

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

export default TerapiaOnline;
