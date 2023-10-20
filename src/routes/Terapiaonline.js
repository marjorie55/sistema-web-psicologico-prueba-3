import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import TerapiaOnline from "../components/TerapiaOnline";
function Terapiaonline() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-mid2"
        title="Terapia OnLine"
        btnClass="hide"
      />
      <TerapiaOnline/>
      <Footer/>
    </>
  );
}

export default Terapiaonline;
