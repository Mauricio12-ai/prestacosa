// Context/SolicitudesContext.jsx
import { createContext, useContext, useState, useMemo } from "react";
import solicitudesIniciales from "../data/solicitudes";

const SolicitudesContext = createContext();

export const SolicitudesProvider = ({ children }) => {
  const [solicitudes, setSolicitudes] = useState(solicitudesIniciales);

  // ── Mauricio: crear solicitud ──
  const crearSolicitud = (nuevaSolicitud) => {
    const solicitud = {
      ...nuevaSolicitud,
      id: solicitudes.length + 1,
      estado: "pendiente",
    };
    setSolicitudes([...solicitudes, solicitud]);
  };

  // ── Mauricio: cancelar solicitud (solo si está pendiente) ──
  const cancelarSolicitud = (id) => {
    setSolicitudes(solicitudes.map((s) =>
      s.id === id && s.estado === "pendiente"
        ? { ...s, estado: "cancelada" }
        : s
    ));
  };

  // ── Aaron: verificar conflicto de fechas ──
  const hayConflicto = (objetoId, fechaInicio, fechaFin, solicitudId) => {
    return solicitudes.some((s) =>
      s.objetoId === objetoId &&
      s.estado === "aprobada" &&
      s.id !== solicitudId &&
      fechaInicio <= s.fechaFin &&
      fechaFin >= s.fechaInicio
    );
  };

  // ── Aaron: aprobar solicitud ──
  const aprobarSolicitud = (id) => {
    const solicitud = solicitudes.find((s) => s.id === id);

    if (!solicitud) return { exito: false, mensaje: "Solicitud no encontrada" };

    if (hayConflicto(solicitud.objetoId, solicitud.fechaInicio, solicitud.fechaFin, id)) {
      return { exito: false, mensaje: "Ya existe un préstamo aprobado en esas fechas" };
    }

    setSolicitudes(solicitudes.map((s) =>
      s.id === id ? { ...s, estado: "aprobada" } : s
    ));

    return { exito: true, mensaje: "Solicitud aprobada" };
  };

  // ── Aaron: rechazar solicitud ──
  const rechazarSolicitud = (id) => {
    setSolicitudes(solicitudes.map((s) =>
      s.id === id ? { ...s, estado: "rechazada" } : s
    ));
  };

  return (
    <SolicitudesContext.Provider value={{
      solicitudes,
      crearSolicitud,
      cancelarSolicitud,
      aprobarSolicitud,
      rechazarSolicitud,
    }}>
      {children}
    </SolicitudesContext.Provider>
  );
};

export const useSolicitudes = () => useContext(SolicitudesContext);