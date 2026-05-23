// App.jsx
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider, useAuth } from "./Context/AuthContext";
import { ObjetosProvider } from "./Context/ObjetosContext"; 

import MainLayout from "./Componentes/MainLayout";
import Inicio from "./Componentes/Inicio";
import Explorar from "./Componentes/Explorar";
import Login from "./Componentes/Login";
import Register from "./Componentes/Register";
import Perfil from "./Componentes/Perfil";
import MisObjetos from "./Componentes/MisObjetos";  // ← agrega

// Ruta protegida: si no hay usuario, redirige al login
const RutaProtegida = ({ children }) => {
  const { user } = useAuth();
  return user ? children : <Navigate to="/login" />;
};


function App() {
  return (
    <AuthProvider>          {/* ← fuera del BrowserRouter */}
      <ObjetosProvider>     {/* ← agrega el nuevo */}
        <BrowserRouter>
          <Routes>

            {/* Rutas públicas */}
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />

            {/* Rutas protegidas */}
            <Route path="/" element={<RutaProtegida><MainLayout><Inicio /></MainLayout></RutaProtegida>} />
            <Route path="/explorar" element={<RutaProtegida><MainLayout><Explorar /></MainLayout></RutaProtegida>} />
            <Route path="/perfil" element={<RutaProtegida><MainLayout><Perfil /></MainLayout></RutaProtegida>} />  {/* ← agrega / */}
            <Route path="/mis-objetos" element={ <RutaProtegida><MainLayout><MisObjetos /></MainLayout></RutaProtegida>}/>
          </Routes>
        </BrowserRouter>
      </ObjetosProvider>
    </AuthProvider>
  );
};
  


export default App;