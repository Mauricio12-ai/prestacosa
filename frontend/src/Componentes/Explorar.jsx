import { useState } from "react";
import "./Explorar.css";

const Explorar = () => {
  const [busqueda, setBusqueda] = useState("");
  const [categoria, setCategoria] = useState("Todas");

  const categorias = ["Todas", "Herramientas", "Deportes", "Cocina", "Electrónica", "Ropa", "Jardín"];

  return (
    <div className="explorar-container">

      {/* Título */}
      <div className="explorar-header">
        <h1>Explorar Objetos</h1>
        <p>Encuentra lo que necesitas en tu vecindad</p>
      </div>

      {/* Buscador + Filtro */}
      <div className="explorar-buscador">
        <div className="explorar-input-wrapper">
          <i className="ti ti-search explorar-search-icon"></i>
          <input
            type="text"
            placeholder="Buscar objetos..."
            value={busqueda}
            onChange={(e) => setBusqueda(e.target.value)}
            className="explorar-input"
          />
        </div>

        <div className="explorar-filtro-wrapper">
          <i className="ti ti-adjustments-horizontal explorar-filtro-icon"></i>
          <select
            value={categoria}
            onChange={(e) => setCategoria(e.target.value)}
            className="explorar-select"
          >
            {categorias.map((cat) => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
        </div>
      </div>

    </div>
  );
};

export default Explorar;

