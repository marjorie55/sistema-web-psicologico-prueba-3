import React from "react";

function RecursosData(props) {
  function handleCardClick() {
    if (props.url) {
      // Navegar a otra página si hay una URL definida
      // Aquí asumimos que props.url solo está definido en la tarjeta "Recursos para la prevención del suicidio"
      window.location.href = props.url;
    } else if (props.pdfUrl) {
      // Abrir el PDF si hay una URL de PDF definida
      window.open(props.pdfUrl, "_blank");
    }
  }

  return (
    <div className="t-card" onClick={handleCardClick}>
      <div className="t-image">
        <img src={props.image} alt="image" />
      </div>
      <h4>{props.heading}</h4>
      <p>{props.text}</p>
    </div>
  );
}

export default RecursosData;

































// import "./InfoRecursosStyles.css";


// function RecursosData(props) {
//   function handleCardClick() {
//     window.open(props.pdfUrl, "_blank");
//   }

//   return (
//     <div className="t-card" onClick={handleCardClick} >
//       <div className="t-image">
//         <img src={props.image} alt="image" />
//       </div>
//       <h4>{props.heading}</h4>
//       <p>{props.text}</p>
//     </div>
//   );
// }
// export default RecursosData;





{/* <Link to={props.pdf}>EXPLORAR</Link> */}
      {/* <a href={pdf} target="_blank" rel="noopener noreferrer">
        Abrir PDF
      </a>  */}