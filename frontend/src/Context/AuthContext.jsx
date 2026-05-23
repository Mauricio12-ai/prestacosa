// Context/AuthContext.jsx
import { createContext, useContext, useState } from "react";
import usuarios from "../data/usuarios";

// 1. Crear el contexto
const AuthContext = createContext();

// 2. Crear el Provider (envuelve toda la app)
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState("");

  // Busca el usuario en el array de datos
  const login = (email, password) => {
    const encontrado = usuarios.find(
      (u) => u.email === email && u.password === password
    );

    if (encontrado) {
      setUser(encontrado);
      setError("");
      return true; // login exitoso
    } else {
      setError("Email o contraseña incorrectos");
      return false; // login fallido
    }
  };

  // Registra un nuevo usuario al array (temporal, sin backend)
  const register = (nombre, email, password) => {
    const existe = usuarios.find((u) => u.email === email);

    if (existe) {
      setError("Ya existe una cuenta con ese email");
      return false;
    }

    const nuevoUsuario = {
      id: usuarios.length + 1,
      nombre,
      email,
      password,
    };

    usuarios.push(nuevoUsuario); // agrega al array temporal
    setUser(nuevoUsuario);
    setError("");
    return true;
  };

  const updateUser = (datos) => {
  setUser((prev) => ({ ...prev, ...datos }));
};

  const logout = () => {
    setUser(null);
    setError("");
  };

  return (
    <AuthContext.Provider value={{ user, error, login, register, logout, updateUser }}>
      {children}
    </AuthContext.Provider>
  );
};

// 3. Hook personalizado para usar el contexto fácilmente
export const useAuth = () => useContext(AuthContext);
