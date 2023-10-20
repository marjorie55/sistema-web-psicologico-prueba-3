import ContactForm from "../components/ContactForm";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Contacto() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-mid3"
        title="Contacto"
        btnClass="hide"
      />
      <ContactForm />
      <Footer/>
    </>
  );
}

export default Contacto;
