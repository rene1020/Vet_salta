const servicios = [
  {
    id: 1,
    nombre: "Consulta veterinaria",
    descripcion: "Control general de la salud de tu mascota.",
    precio: "Consultar",
    imagen: "https://images.unsplash.com/photo-1628009368231-7bb7cfcb0def?w=600"
  },
  {
    id: 2,
    nombre: "Vacunación",
    descripcion: "Prevención y cuidado de la salud animal.",
    precio: "Consultar",
    imagen: "https://images.unsplash.com/photo-1576201836106-db1758fd1c97?w=600"
  },
  {
    id: 3,
    nombre: "Peluquería canina",
    descripcion: "Higiene y cuidado del pelaje de tu mascota.",
    precio: "Consultar",
    imagen: "https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?w=600"
  }
];

function Servicios() {
  return (
    <main className="contenedor">
      <h1>Nuestros servicios</h1>
      <p>Todo lo que necesitás para cuidar a tu mascota.</p>
      <div className="galeria">
        {servicios.map((servicio) => (
          <article className="tarjeta" key={servicio.id}>
            <img src={servicio.imagen} alt={servicio.nombre} loading="lazy" />
            <div className="tarjeta-contenido">
              <h2>{servicio.nombre}</h2>
              <p>{servicio.descripcion}</p>
              <p><strong>Precio:</strong> {servicio.precio}</p>
            </div>
          </article>
        ))}
      </div>
      <p className="nota">Tus mascostas esta en buenas manos</p>
    </main>
  );
}

export default Servicios;