import "./styles.css";
import { Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import Recursos from "./routes/Recursos";
import Terapiaonline from "./routes/Terapiaonline";
import Contacto from "./routes/Contacto";
import RecursosPreSuicidio from "./routes/RecursosPreSuicidio";


export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Recursos" element={<Recursos />} />
        <Route path="/Terapiaonline" element={<Terapiaonline />} />
        <Route path="/Contacto" element={<Contacto />} />
        <Route path="/RecursosPreSuicidio" element={<RecursosPreSuicidio/>} />
      </Routes>
    </div>
  );
}
