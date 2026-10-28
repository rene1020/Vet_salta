import { HashRouter, Routes, Route, Link } from "react-router-dom";
import Inicio from "./pages/Inicio.jsx";
import Servicios from "./pages/Servicios.jsx";
import Contacto from "./pages/Contacto.jsx";
import "./index.css";

function App() {
  return (
    <HashRouter>
      <header className="encabezado">
        <Link to="/" className="logo">🐾 Huellitas de Salta</Link>
        <nav aria-label="Navegación principal">
          <Link to="/">Inicio</Link>
          <Link to="/servicios">Servicios</Link>
          <Link to="/contacto">Contacto</Link>
        </nav>
      </header>

      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/servicios" element={<Servicios />} />
        <Route path="/contacto" element={<Contacto />} />
      </Routes>

      <footer className="pie">
        <p>© 2026 Huellitas de Salta</p>
        <p>Telefono: 3874791258</p>
      </footer>
    </HashRouter>
  );
}

export default App;