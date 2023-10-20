import React, { useState } from "react";
import { Box, Button, TextField, Paper } from "@mui/material";
import "./ContactFormStyles.css";
import contact from "../assets/3764135.jpg";

export default function Register() {
  const [nombre, setNombre] = useState("");
  const [telefono, setTelefono] = useState("");
  const [email, setEmail] = useState("");
  const [asunto, setAsunto] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [error, setError] = useState({
    error: false,
    message: "",

  });


  const emailValidation = (email) => {
    // Expresión regular para validar email
    const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    return regex.test(email);
  };

  const enviarCorreoDestino = async (data) => {
    try {
      const response = await fetch("https://localhost:44388/RegistroContacto/CorreoDestino", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
  
      if (response.ok) {
        console.log("Correo de destino enviado con éxito");
      } else {
        console.error("Error al enviar el correo de destino");
      }
    } catch (error) {
      console.error("Error al enviar el correo de destino:", error);
    }
  };
  
  const onSubmit = async (e) => {
    e.preventDefault();
    if (!emailValidation(email)) {
      setError({
        error: true,
        message: "El email no es válido",
      });
      return;
    }
  
    // Crear un objeto con los datos del formulario
    const formData = {
      nombre: nombre,
      telefono: telefono,
      correo: email,
      asunto: asunto,
      mensaje: mensaje,
    };
  
    try {
      // Realizar una solicitud POST al endpoint de la API
      const response = await fetch("https://bienestaremocional.azurewebsites.net/RegistroContacto/Contacto", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
  
      if (response.ok) {
        console.log("Mensaje enviado con éxito");
        setNombre(""); // Establecer nombre como cadena vacía
      setTelefono(""); // Establecer telefono como cadena vacía
      setEmail(""); // Establecer email como cadena vacía
      setAsunto(""); // Establecer asunto como cadena vacía
      setMensaje(""); // Establecer mensaje como cadena vacía
      } else {
        console.error("Error al enviar el mensaje");
      }
    } catch (error) {
      console.error("Error al enviar el mensaje:", error);
    }
  
    // Llamar a la función para enviar el correo de destino después de enviar el mensaje
    enviarCorreoDestino(formData);
  };
  

  return (
    <>
      <h1>Haz tu cita</h1>
      <Paper elevation={3} className="form-container">
        <form onSubmit={onSubmit} autoComplete="off">
          <TextField
            id="nombre"
            label="Nombre"
            type="text"
            inputmode="text"
            pattern="[A-Za-z\s]"
            required
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
          <div className="margenes">
            <TextField
              id="telefono"
              label="Telefono"
              type="text"
              inputmode="number"
              inputProps={{
                pattern: "[0-9]*",
              }}
              required
              value={telefono}
              onChange={(e) => {
                const inputValue = e.target.value;
                // Remover caracteres no numéricos utilizando una expresión regular
                const numericValue = inputValue.replace(/\D/g, "");
                setTelefono(numericValue);
              }}
            />
          </div>

          <div className="margenes">
            <TextField
              label="Email"
              variant="outlined"
              id="email"
              type="email"
              required
              error={error.error}
              helperText={error.message}
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </div>
          <div className="margenes">
            <TextField
              id="asunto"
              label="Asunto"
              required
              value={asunto}
              onChange={(e) => setAsunto(e.target.value)}
            />
          </div>

          <div className="margenes">
            <TextField
              id="mensaje"
              label="Mensaje"
              required
              value={mensaje}
              onChange={(e) => setMensaje(e.target.value)}
            />
          </div>

          <Button variant="outlined" type="submit" sx={{ mt: 2 }}>
            Enviar Mensaje
          </Button>
        </form>
        <div className="image-container3">
          <img src={contact} alt="Descripción de la imagen" />
        </div>
      </Paper>
      <div className="pcontac">
        <p>
          Tu bienestar es importante, toma el primer paso hacia una vida más
          saludable.
        </p>
        <div className="p2contact">
          <p>¡Agenda tu terapia en línea hoy mismo!</p>
        </div>
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
    </>
  );
}