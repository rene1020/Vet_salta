import { useState } from "react";
import emailjs from "@emailjs/browser";

function Contacto() {
  const [estado, setEstado] = useState("");

  function enviarMensaje(evento) {
    evento.preventDefault();
    setEstado("Enviando mensaje...");
    const formulario = evento.currentTarget;

    emailjs.sendForm(
      "TU_SERVICE_ID",
      "TU_TEMPLATE_ID",
      formulario,
      { publicKey: "TU_PUBLIC_KEY" }
    ).then(() => {
      setEstado("¡Mensaje enviado correctamente!");
      formulario.reset();
    }).catch(() => {
      setEstado("No se pudo enviar.");
    });
  }

  return (
    <main className="contenedor">
      <h1>Contactanos</h1>
      <p>Escribinos tu consulta</p>

      <div className="contacto-grid">
        <form className="formulario" onSubmit={enviarMensaje}>
          <label htmlFor="nombre">Nombre</label>
          <input id="nombre" name="nombre" type="text" required placeholder="Tu nombre" />

          <label htmlFor="email">Correo electrónico</label>
          <input id="email" name="email" type="email" required placeholder="tunombre@correo.com" />

          <label htmlFor="mensaje">Mensaje</label>
          <textarea id="mensaje" name="mensaje" required rows="5" placeholder="Escribí tu consulta" />

          <button className="boton" type="submit">Enviar mensaje</button>
          <p role="status" aria-live="polite">{estado}</p>
        </form>

        <div className="mapa">
          <h2>Ubicación de referencia</h2>
          <iframe
            title="Mapa de Salta Capital"
            src="https://maps.google.com/maps?q=Salta%20Capital%2C%20Argentina&output=embed"
            width="100%"
            height="350"
            style={{ border: 0 }}
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
          />
          <p>Salta, Capital</p>
        </div>
      </div>
    </main>
  );
}

export default Contacto;