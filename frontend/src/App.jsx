// App.jsx
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider, useAuth } from "./Context/AuthContext";

import MainLayout from "./Componentes/MainLayout";
import Inicio from "./Componentes/Inicio";
import Explorar from "./Componentes/Explorar";
import Login from "./Componentes/Login";
import Register from "./Componentes/Register";
import Perfil from "./Componentes/Perfil";

// Ruta protegida: si no hay usuario, redirige al login
const RutaProtegida = ({ children }) => {
  const { user } = useAuth();
  return user ? children : <Navigate to="/login" />;
};


function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>

          {/* Rutas públicas (sin layout) */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          {/* Rutas protegidas (con layout) */}
          <Route
            path="/"
            element={
              <RutaProtegida>
                <MainLayout>
                  <Inicio />
                </MainLayout>
              </RutaProtegida>
            }
          />
          <Route
            path="/explorar"
            element={
              <RutaProtegida>
                <MainLayout>
                  <Explorar />
                </MainLayout>
              </RutaProtegida>
            }
          />
          
          <Route
            path="Perfil"
            element={
              <RutaProtegida>
                <MainLayout>
                  <Perfil/>
                </MainLayout>
              </RutaProtegida>
            }
          />

        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
};

export default App;