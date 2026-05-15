import { useState, useEffect } from 'react'
import './App.css'
import { useNavigate } from 'react-router-dom'
import logo from './img/logo-sin-fondo.png'
import objetos from './data/objetos'

import escalera from './img/banner/escalera.webp'
import ollaArrocera from './img/banner/ollaArrocera.webp'
import setMuebles from './img/banner/setMuebles.webp'
import setSillas from './img/banner/setSillas.webp'




import Button from '@mui/material/Button'
import Badge from '@mui/material/Badge'
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong'

function App() {
  const imagenesBanner = [
    escalera,
    ollaArrocera,
    setMuebles,
    setSillas
  ]

  const [imagenActual, setImagenActual] = useState(0)

  useEffect(() => {

    const intervalo = setInterval(() => {

      setImagenActual((prev) =>
        prev === imagenesBanner.length - 1 ? 0 : prev + 1
      )

    }, 3000)

    return () => clearInterval(intervalo)

  }, [])

  const navigate = useNavigate()
  useEffect(() => {

    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual'
    }

    window.scrollTo(0, 0)

  }, [])
  const [menuAbierto, setMenuAbierto] = useState(false)
  return (
    <>
      {/* Header */}
      <header className="header">
        <div className="container">
          <button
            className="hamburger-btn"
            onClick={() => setMenuAbierto(true)}
          >
            ☰
          </button>
          <a href="#inicio" className="logo-link">
            <div className="logo">
              <img src={logo} alt="Logo PrestaCosa" className="logo-img" />
            </div>
          </a>
          <div className="buscador-container">
            <input type="text" id="buscador" className="buscador-input" placeholder="Buscar objetos para prestar..." />
            <button className="buscador-btn" id="buscadorBtn">🔍</button>
          </div>
          <nav className="nav">
            <a href="#inicio" className="nav-link">
              Inicio
            </a>

            <a href="#productos" className="nav-link">
              Objetos
            </a>

            <Button
              variant="contained"
              color="secondary"
              onClick={() => navigate('/inicioregistro')}
            >
              Iniciar sesión / Registrarse
            </Button>

            <Button variant="contained" color="error">

              <Badge
                badgeContent={0}
                color="primary"
              >
                <ReceiptLongIcon />
              </Badge>

            </Button>
          </nav>
        </div>
      </header>

      {/* Menú Lateral */}
      <div className={`side-menu ${menuAbierto ? 'activo' : ''}`}>

        <div className="side-menu-content">

          <button
            className="close-menu"
            onClick={() => setMenuAbierto(false)}
          >
            &times;
          </button>

          <h3>Menú</h3>

          <div className="menu-categories">

            <a href="#" className="menu-category">
              Opción A <span>›</span>
            </a>

            <a href="#" className="menu-category">
              Opción B <span>›</span>
            </a>

            <a href="#" className="menu-category">
              Opción C <span>›</span>
            </a>

            <a href="#" className="menu-category">
              Opción D <span>›</span>
            </a>

          </div>

        </div>

      </div>

      {/* Overlay del Menú */}
      <div
        className={`menu-overlay ${menuAbierto ? 'activo' : ''}`}
        onClick={() => setMenuAbierto(false)}
      ></div>

      {/* Banner */}
      <section id="inicio" className="banner">

        

        <div className="banner-slider">

          {imagenesBanner.map((img, index) => (

            <div
              key={index}
              className={`banner-cuadro ${index === imagenActual ? 'activo' : ''}`}
            >
              <img src={img} alt="" />
            </div>

          ))}

        </div>

      </section>

      {/* Productos */}
      <section id="productos" className="productos">
        <div className="container">
          <h2 className="seccion-titulo">Objetos disponibles para préstamo</h2>
          <div className="productos-grid">

            {objetos.map((objeto) => (

              <div key={objeto.id} className="producto-card">

                <div className="producto-imagen">
                  {objeto.imagen}
                </div>

                <div className="producto-info">

                  <div className="producto-categoria">
                    {objeto.categoria}
                  </div>

                  <h3 className="producto-nombre">
                    {objeto.nombre}
                  </h3>

                  <p className="producto-descripcion">
                    {objeto.descripcion}
                  </p>

                  <div className="producto-precio">
                    S/. {objeto.precio}
                  </div>

                  <div className="producto-acciones">

                    <Button
                      variant="contained"
                      color="error"
                      fullWidth
                    >
                      Solicitar
                    </Button>

                  </div>

                </div>

              </div>

            ))}

          </div>
        </div>
      </section>

      {/* Modal del Carrito */}
      <div className="modal" id="carritoModal">
        <div className="modal-content">
          <div className="modal-header">
            <h2>Mis Solicitudes</h2>
            <button className="cerrar-modal" id="cerrarModal">&times;</button>
          </div>
          <div className="modal-body">
            <div id="carritoItems" className="carrito-items"></div>
          </div>
          <div className="modal-footer">
            <div className="carrito-total">
              <strong>Total estimado: $<span id="totalCarrito">0.00</span></strong>
            </div>
            <button className="btn btn-primary" id="comprarBtn">Enviar solicitud</button>
          </div>
        </div>
      </div>

      {/* Modal de Producto */}
      <div className="modal" id="productoModal">
        <div className="modal-content modal-producto">
          <button className="cerrar-modal" id="cerrarProductoModal">&times;</button>
          <div className="producto-detalle" id="productoDetalle"></div>
        </div>
      </div>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2024 PrestaCasa - Préstamo de objetos del hogar. Todos los derechos reservados.</p>
      </footer>
    </>
  )
}

export default App