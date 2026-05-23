// Componentes/Perfil.jsx
import { useState } from "react";
import { useAuth } from "../Context/AuthContext";
import "./Perfil.css";

const Perfil = () => {
  const { user, updateUser } = useAuth();
  const [editando, setEditando] = useState(false);
  const [nuevoNombre, setNuevoNombre] = useState(user?.nombre || "");
  const [exito, setExito] = useState(false);

  const handleGuardar = () => {
    if (nuevoNombre.trim() === "") return;
    updateUser({ nombre: nuevoNombre });
    setEditando(false);
    setExito(true);
    setTimeout(() => setExito(false), 3000); // oculta el mensaje a los 3s
  };

  const handleCancelar = () => {
    setNuevoNombre(user?.nombre || "");
    setEditando(false);
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

        {/* Mensaje de éxito */}
        {exito && (
          <div className="perfil-exito">
            ✅ Nombre actualizado correctamente
          </div>
        )}

        {/* Sección editar nombre */}
        <div className="perfil-seccion">
          <label className="perfil-label">Nombre completo</label>

          {editando ? (
            <div className="perfil-editar">
              <input
                type="text"
                value={nuevoNombre}
                onChange={(e) => setNuevoNombre(e.target.value)}
                className="perfil-input"
                autoFocus
              />
              <div className="perfil-botones">
                <button className="btn-guardar" onClick={handleGuardar}>
                  Guardar
                </button>
                <button className="btn-cancelar" onClick={handleCancelar}>
                  Cancelar
                </button>
              </div>
            </div>
          ) : (
            <div className="perfil-valor">
              <span>{user?.nombre}</span>
              <button className="btn-editar" onClick={() => setEditando(true)}>
                <i className="ti ti-pencil"></i> Editar
              </button>
            </div>
          )}
        </div>

        {/* Email (solo lectura por ahora) */}
        <div className="perfil-seccion">
          <label className="perfil-label">Email</label>
          <div className="perfil-valor readonly">
            <span>{user?.email}</span>
            <span className="perfil-badge">Solo lectura</span>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Perfil;

