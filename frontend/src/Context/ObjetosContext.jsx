// Context/ObjetosContext.jsx
import { createContext, useContext, useState } from "react";
import objetosIniciales from "../data/objetos";

// 1. Crear el contexto
const ObjetosContext = createContext();

// 2. Crear el Provider
export const ObjetosProvider = ({ children }) => {
  const [objetos, setObjetos] = useState(objetosIniciales);

  // Agregar un objeto nuevo
  const agregarObjeto = (nuevoObjeto) => {
    const objeto = {
      ...nuevoObjeto,
      id: objetos.length + 1,  // id temporal sin backend
      rating: 0,
    };
    setObjetos([...objetos, objeto]);
  };

  // Editar un objeto existente
  const editarObjeto = (id, datosActualizados) => {
    setObjetos(objetos.map((obj) =>
      obj.id === id ? { ...obj, ...datosActualizados } : obj
    ));
  };

  // Eliminar un objeto
  const eliminarObjeto = (id) => {
    setObjetos(objetos.filter((obj) => obj.id !== id));
  };

  return (
    <ObjetosContext.Provider value={{ objetos, agregarObjeto, editarObjeto, eliminarObjeto }}>
      {children}
    </ObjetosContext.Provider>
  );
};

// 3. Hook personalizado
export const useObjetos = () => useContext(ObjetosContext);