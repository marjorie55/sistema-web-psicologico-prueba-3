import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import RecursosSuicidio from "../components/RecursosSuicidio";

function RecursosPreSuicidio() {
  return (
    <>
    
      <Navbar />
      <Hero
        cName="hero-mid4"
        title="Rercusos Prevención del Suicidio"
        btnClass="hide"
      />
      <RecursosSuicidio/>
      <Footer/>
      
    </>
  );
}

export default RecursosPreSuicidio;
