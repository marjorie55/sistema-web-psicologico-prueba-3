import Hero from "../components/Hero";
import InfoInicio from "../components/InfoInicio";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero"
        title="Una herramienta en línea para el bienestar emocional"
        text="Afrontemos juntos aquello que te preocupa y te impide sonreír."
        buttonText="Agendar Cita"
        url="/Contacto"
        btnClass="show"
      />
      <InfoInicio />
      <Footer/>
    </>
  );
}

export default Home;
