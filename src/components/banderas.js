import React from "react";
import guatemala from "../assets/GTBandera.png";
import elsalvador from "../assets/Salvador.png";
import honduras from "../assets/hondura.png";
import nicaragua from "../assets/nicaragua.png";
import costarica from "../assets/costarica.png";
import panama from "../assets/panama.png";
import mexico from "../assets/mexico.png";
import eua from "../assets/eua.png";
import argent from "../assets/argentina.png";
import colombia from "../assets/colombia.png";
import rp from "../assets/rp.png";
import chile from "../assets/chile.png";
import libro1 from "../assets/libro1.jpg";
import libro2 from "../assets/libro2.jpg";
import libro3 from "../assets/libro3.jpg";
import libro4 from "../assets/libro4.jpg";
import libro5 from "../assets/libro5.jpg";
import libro6 from "../assets/libro6.jpg";

export const banderas = [
  {
    nombre: "Guatemala",
    imagen: guatemala,
    telefono: "110",
    text: "Situación de emergencia o riesgo de suicidio",
  },
  {
    nombre: "El Salvador",
    imagen: elsalvador,
    telefono: "911 / 70 201 201",
    text: "Situación de emergencia o riesgo de suicidio",
  },
  {
    nombre: "Honduras",
    imagen: honduras,
    telefono: "(00 504) 2558 08 08",
    text: "Apoyo e información sobre salud mental",
  },
  {
    nombre: "Nicaragua",
    imagen: nicaragua,
    telefono: "118 / 911 / 115 / 128 (español) 101 (inglés y español)",
    text: "Líneas de ayuda de Nicaragua",
  },
  {
    nombre: "Costa Rica",
    imagen: costarica,
    telefono: "506-253-5439",
    text: "Riesgo y prevención de suicidio",
  },
  {
    nombre: "Panamá",
    imagen: panama,
    telefono: "911",
    text: "Situación de emergencia o riesgo de suicidio",
  },
];

export const banderasAbajo = [
  {
    nombre: "México",
    imagen: mexico,
    telefono: "(800) 900 8432 / (800) 420 5782/ (800) 420 5280",
    text: "Sí a la Vida (prevención del suicidio)",
  },
  {
    nombre: "Estados Unidos",
    imagen: eua,
    telefono: "+1 (800) 273-8255",
    text: "Prevención del suicidio",
  },
  {
    nombre: "Argentina",
    imagen: argent,
    telefono: "(54-11) 4758-2554",
    text: "Situación de emergencia o riesgo de suicidio",
  },
  {
    nombre: "Colombia",
    imagen: colombia,
    telefono: "(57-5) 372 27 27 /  (57-1) 323 24 25",
    text: "Información sobre salud mental",
  },
  {
    nombre: "República Dominicana",
    imagen: rp,
    telefono: "911",
    text: "Emergencias y riesgo de suicidio",
  },
  {
    nombre: "Chile",
    imagen: chile,
    telefono: "(00 56 42) 22 12 00",
    text: "Información sobre salud mental",
  },
];

//libros data
export const libros = [
  {
    title:
      "El año del pensamiento mágico (2005, Literatura Random House), de Joan Didion.",
    image: libro1,
    synopsis:"Joan Didion, la escritora y periodista, enfrenta una cadena de desgracias. Su única hija, Quintana, de 37 años, recién casada y sana, lucha por su vida en una clínica privada en Nueva York debido a una gripe que se convierte en neumonía y choque séptico. Mientras tanto, Joan y su esposo John regresan a casa después de un día en el hospital, y John, que estaba bien, de repente deja de hablar. En palabras de Joan Didion, la vida cambia en un instante, recordándonos la fragilidad de nuestra existencia. Esta trágica serie de eventos pone a prueba la fortaleza de la escritora y su familia."
      //"Quien dijo que las desgracias nunca vienen solas seguramente se refería a la vida de la escritora y periodista Joan Didion. Su única hija, Quintana, de 37 años, recién casada, sana, está muriendo en una clínica privadísima de Nueva York sin que los doctores puedan hacer nada. Una gripe boba deriva en neumonía y luego en choque séptico. Quintana agoniza. Didion y su marido John llegan a casa después de pasar el día en el hospital y él, que estaba perfecto, “estaba hablando y deja de hablar”. De Joan Didion es la frase que resume todas nuestras pérdidas: “La vida cambia rápidamente. La vida cambia en un instante. Te sientas a cenar y la vida que conoces termina”.",
  },
  {
    title: "Noches azules (2011, Literatura Random House), de Joan Didion.",
    image: libro2,
    synopsis: "Dos años después de la muerte de su esposo John, le sigue su única hija, Quintana, y Didion, el fantasma que queda vivo, escribe un libro sobre la tristeza desde la tristeza. “Este libro se titula Noches azules porque en la época en que lo empecé a escribir sorprendí a mi mente volviéndose cada vez más hacia la enfermedad, hacia la muerte de las promesas, el acortamiento de los días, lo inevitable del apagamiento, la muerte de la luz”.",
  },
  {
    title:"Memorias de una viuda (2011, Alfaguara), de Joyce Carol Oates.",
    image: libro3,
    synopsis:
      "Ray se llamaba el marido de la brillante escritora, y entre ambos y sus gatos habían construido un reino inquebrantable. La fragilidad de todo sorprende hasta a los más sensibles y la muerte de Ray de una neumonía deja a su viuda perpleja e incapaz de entender el mundo sin él. Un libro honestísimo sobre qué somos cuando perdemos a quien da sentido a nuestras vidas.",
  },
  {
    title: "La hora violeta (2013, Literatura Random House), de Sergio del Molino.",
    image: libro4,
    synopsis: "Del Molino se pregunta sobre la ausencia de una palabra para definir a los padres que pierden a un hijo. Hay viudo/a, huérfano/a, pero no hay nombres para aquellos a los que se les muere su niño. El libro es una carta de amor a Pablo, su bebé, enfermo de leucemia, escrita durante el tiempo que pasan juntos en oncología infantil. El libro más triste del mundo es también una dulce celebración de la breve vida de Pablo y a la maravilla terrible de amar a otro ser más que a uno mismo.",
  }, {
    title:"El olvido que seremos (2006, Alfaguara), de Héctor Abad Faciolince.",
    image: libro5,
    synopsis:
      "La cita que abre el libro de Abad, de Yehuda Amijai, me sigue haciendo llorar: “Y por amor a la memoria llevo sobre la cara la cara de mi padre”. Aún hoy, siete años después, me cuesta hablar sobre este libro. Quizás porque todo el tiempo envidié la relación del narrador con su papá. Quizás porque lo más horrible de que mi padre se hubiera muerto no fue eso, la muerte, sino que ya no tendríamos oportunidad de querernos como yo, y probablemente él, hubiésemos querido querernos. La muerte también es eso: el fin de las oportunidades.",
  },
  {
    title: "El desierto y su semilla (1998, Eterna Cadencia), de Jorge Barón Biza.",
    image: libro6,
    synopsis: "Un padre, una madre, un hijo, un vaso de ácido sulfúrico. La novela de Barón Biza es un alarido en un décimo piso y también el fluir de aguas subterráneas. Es el dolor de una madre desfigurada por el hombre que amó y el dolor de un hijo que es testigo de todas las atrocidades del mundo en la cara sin labios, sin párpados, de su mamá. Es la historia, también, de la enfermedad mental, del alcoholismo y de la vida violenta, esa larga antesala al suicidio.",
  },
];

// Resto del código para mostrar las banderas
export default banderas;
