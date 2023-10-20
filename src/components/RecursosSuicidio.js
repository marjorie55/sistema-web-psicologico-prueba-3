import "./RecursosSuicidioStyles.css";
import { banderas, banderasAbajo, libros } from "./banderas";
import ReactPlayer from "react-player";

function RecursosSuicidio() {
  return (
    <div className="RecursosSuici">
      <h1>Prevención del Suicidio</h1>
      <p>
        La prevención del suicidio es una cuestión de vital importancia en
        nuestra sociedad. Las estadísticas muestran que el suicidio es una de
        las principales causas de muerte en todo el mundo, y afecta a personas
        de todas las edades, géneros y trasfondos. En un mundo que a menudo
        puede ser abrumador y desafiante, es esencial proporcionar apoyo,
        recursos y esperanza a aquellos que están luchando contra la
        desesperación.
      </p>
      <div>
        <p className="text2">
          En esta sección, nos enfocamos en la prevención del suicidio y en
          brindar información y recursos para ayudar a quienes puedan
          necesitarlo. Nuestra misión es ofrecer esperanza y apoyo a las
          personas que se enfrentan a momentos difíciles y ayudarlas a encontrar
          una salida a sus problemas emocionales.
        </p>
        <div className="textp">
          <p>
            El servicio es anónimo, gratuito y totalmente ajeno a
            BienestarEmocional:
          </p>
        </div>
      </div>

      {/* Seccion lineas de emergencias */}
      <div className="h3lineas">
        <h3>Líneas de emergencias Centroamérica</h3>
      </div>
      <div className="container">
        {banderas.map((bandera, index) => (
          <div className="outer-div" key={index}>
            <div className="image-container">
              <img src={bandera.imagen} alt={`Bandera de ${bandera.nombre}`} />
            </div>
            <div className="text-container">
              <h2>{bandera.nombre}</h2>
              <p>
                {/* Situación de emergencia o riesgo de suicidio */}
                {bandera.text}: {bandera.telefono}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="h3lineas">
        <h2>Si te encuentras fuera de Centroamérica</h2>
      </div>
      <div className="container">
        {banderasAbajo.map((bandera, index) => (
          <div className="outer-div" key={index}>
            <div className="image-container">
              <img src={bandera.imagen} alt={`Bandera de ${bandera.nombre}`} />
            </div>
            <div className="text-container">
              <h2>{bandera.nombre}</h2>
              <p>
                {/* Situación de emergencia o riesgo de suicidio */}
                {bandera.text}: {bandera.telefono}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Seccion videos */}
      <div className="videoeduca">
        <h3>Educación y Concienciación</h3>
      </div>
      <div className="video1">
        <div className="bordevideo">
          <ReactPlayer
            url="https://www.youtube.com/watch?v=0SYj8pYq5xQ"
            controls
            loop
            width="100%" // Ancho del reproductor
            height="300px" // Altura del reproductor
            config={{
              youtube: {
                playerVars: { origin: "https://www.youtube.com" }
              }
            }}
          /> 
        </div>
        <div className="bordevideo">
          <ReactPlayer
            url='https://www.youtube.com/watch?v=5zxQJG1khlc' 
            controls
            loop
            width="100%" // Ancho del reproductor
            height="300px" // Altura del reproductor
            config={{
              youtube: {
                playerVars: { origin: "https://www.youtube.com" }
              }
            }}
          />
        </div>
      </div>

      {/* seccion libros */}
      <div>
        <p className="text3">
          La escritora y periodista ecuatoriana María Fernanda Ampuero comparte
          una lista de libros que le ayudaron a sobrellevar una de las etapas
          más complicadas de su vida.
        </p>
      </div>

      <div className="container2">
        {libros.map((libro, index) => (
          <div className="outer-div2" key={index}>
            <div className="image-container2">
              <img src={libro.image} alt={`Portada de ${libro.title}`} />
            </div>
            <div className="text-container2">
              <h2>{libro.title}</h2>
              <p>{libro.synopsis}</p>
            </div>
          </div>
        ))}
      </div>
      <div>
        <h2>
        "Cada persona es valiosa y única. Tu presencia en este mundo hace la diferencia."
        </h2>
      </div>

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
}
export default RecursosSuicidio;
