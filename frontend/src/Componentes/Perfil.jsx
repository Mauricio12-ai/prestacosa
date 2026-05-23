// Componentes/Perfil.jsx
import { useState } from "react";
import { useAuth } from "../Context/AuthContext";
import "./Perfil.css";

const Perfil = () => {
  const { user, updateUser } = useAuth();

  // Estado para nombre
  const [editandoNombre, setEditandoNombre] = useState(false);
  const [nuevoNombre, setNuevoNombre] = useState(user?.nombre || "");

  // Estado para email
  const [editandoEmail, setEditandoEmail] = useState(false);
  const [nuevoEmail, setNuevoEmail] = useState(user?.email || "");

  const [exito, setExito] = useState("");

  const mostrarExito = (mensaje) => {
    setExito(mensaje);
    setTimeout(() => setExito(""), 3000);
  };

  // Handlers nombre
  const handleGuardarNombre = () => {
    if (nuevoNombre.trim() === "") return;
    updateUser({ nombre: nuevoNombre });
    setEditandoNombre(false);
    mostrarExito("✅ Nombre actualizado correctamente");
  };

  const handleCancelarNombre = () => {
    setNuevoNombre(user?.nombre || "");
    setEditandoNombre(false);
  };

  // Handlers email
  const handleGuardarEmail = () => {
    if (nuevoEmail.trim() === "") return;
    if (!nuevoEmail.includes("@")) {
      mostrarExito("❌ Ingresa un email válido");
      return;
    }
    updateUser({ email: nuevoEmail });
    setEditandoEmail(false);
    mostrarExito("✅ Email actualizado correctamente");
  };

  const handleCancelarEmail = () => {
    setNuevoEmail(user?.email || "");
    setEditandoEmail(false);
  };

  return (
    <div className="perfil-container">

      <div className="perfil-header">
        <h1>Mi Perfil</h1>
        <p>Administra tu información personal</p>
      </div>

      <div className="perfil-card">

        {/* Avatar */}
        <div className="perfil-avatar">
          {user?.nombre?.charAt(0).toUpperCase()}
        </div>

        <h2 className="perfil-nombre">{user?.nombre}</h2>
        <p className="perfil-email">{user?.email}</p>

        {/* Mensaje éxito/error */}
        {exito && (
          <div className={`perfil-exito ${exito.startsWith("❌") ? "error" : ""}`}>
            {exito}
          </div>
        )}

        {/* Nombre */}
        <div className="perfil-seccion">
          <label className="perfil-label">Nombre completo</label>
          {editandoNombre ? (
            <div className="perfil-editar">
              <input
                type="text"
                value={nuevoNombre}
                onChange={(e) => setNuevoNombre(e.target.value)}
                className="perfil-input"
                autoFocus
              />
              <div className="perfil-botones">
                <button className="btn-guardar" onClick={handleGuardarNombre}>Guardar</button>
                <button className="btn-cancelar" onClick={handleCancelarNombre}>Cancelar</button>
              </div>
            </div>
          ) : (
            <div className="perfil-valor">
              <span>{user?.nombre}</span>
              <button className="btn-editar" onClick={() => setEditandoNombre(true)}>
                <i className="ti ti-pencil"></i> Editar
              </button>
            </div>
          )}
        </div>

        {/* Email */}
        <div className="perfil-seccion">
          <label className="perfil-label">Email</label>
          {editandoEmail ? (
            <div className="perfil-editar">
              <input
                type="email"
                value={nuevoEmail}
                onChange={(e) => setNuevoEmail(e.target.value)}
                className="perfil-input"
                autoFocus
              />
              <div className="perfil-botones">
                <button className="btn-guardar" onClick={handleGuardarEmail}>Guardar</button>
                <button className="btn-cancelar" onClick={handleCancelarEmail}>Cancelar</button>
              </div>
            </div>
          ) : (
            <div className="perfil-valor">
              <span>{user?.email}</span>
              <button className="btn-editar" onClick={() => setEditandoEmail(true)}>
                <i className="ti ti-pencil"></i> Editar
              </button>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};

export default Perfil;

