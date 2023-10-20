import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import InfoRecursos from "../components/InfoRecursos";
import Footer from "../components/Footer";

function Recursos() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-mid"
        title="Recursos"
        btnClass="hide"
      />
      <InfoRecursos/>
      <Footer/>
    </>
  );
}

export default Recursos;
