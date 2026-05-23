import React from 'react';
import { useAuth } from '../Context/AuthContext';  // ← importa el hook
import "./Inicio.css";

const Inicio = () =>{
  const { user } = useAuth();
  return (
    <div>
      {/* Saludo */}
      <div className="inicio-saludo">
        <h1>¡Hola, {user?.nombre}! 👋</h1>
        <p>Bienvenido a tu comunidad de préstamos entre vecinos</p>
      </div>

      {/* Cajas */}
      <div className="feature-cards">
        <div className="feature-card green">
          <i className="ti ti-users"></i>
          <h3>Comunidad Activa</h3>
          <p>Conecta con vecinos y comparte recursos</p>
        </div>

        <div className="feature-card blue">
          <i className="ti ti-trending-up"></i>
          <h3>Ahorra Dinero</h3>
          <p>No compres lo que solo usarás una vez</p>
        </div>

        <div className="feature-card purple">
          <i className="ti ti-sparkles"></i>
          <h3>Sostenible</h3>
          <p>Reduce el consumo y cuida el planeta</p>
        </div>
      </div>
    </div>
  );
};

export default Inicio;