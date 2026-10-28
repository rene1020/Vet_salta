import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Inicio() {
  const [perros, setPerros] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random/6")
      .then((respuesta) => {
        if (!respuesta.ok) throw new Error("No se pudo consultar la API");
        return respuesta.json();
      })
      .then((datos) => setPerros(datos.message))
      .catch(() => setError(true))
      .finally(() => setCargando(false));
  }, []);

  return (
    <main className="contenedor">
      <section className="portada">
        <div>
          <p className="etiqueta">VETERINARIA EN SALTA CAPITAL</p>
          <h1>Cuidamos a quienes más querés</h1>
          <p>Atención veterinaria y mucho cariño para tus mejores amigos.</p>
          <Link className="boton" to="/contacto">Contactanos</Link>
        </div>
        <img
          src="https://images.unsplash.com/photo-1543466835-00a7907e9de1?w=800"
          alt="Perro en primer plano"
        />
      </section>

      <section>
        <h2>Conocé a nuestros amigos</h2>
        
        {cargando && <p>Cargando imágenes...</p>}
        {error && <p>No se pudieron cargar las imágenes. Revisá tu conexión e intentá nuevamente.</p>}
        {!cargando && !error && perros.length === 0 && <p>No hay imágenes disponibles.</p>}
        <div className="galeria">
          {perros.map((imagen, indice) => (
            <article className="tarjeta" key={imagen}>
              <img src={imagen} alt={`Perro ${indice + 1}`} loading="lazy" />
              <div className="tarjeta-contenido"><h3>Amigo número {indice + 1}</h3></div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

export default Inicio;