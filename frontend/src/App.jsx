import './App.css'

function App() {
  return (
    <>
      {/* Header */}
      <header className="header">
        <div className="container">
          <button className="hamburger-btn" id="hamburgerBtn">☰</button>
          <a href="#inicio" className="logo-link">
            <div className="logo">
              <img src="imagenes/logo/logo-sin-fondo.png" alt="Logo PrestaCasa" className="logo-img" />
            </div>
          </a>
          <div className="buscador-container">
            <input type="text" id="buscador" className="buscador-input" placeholder="Buscar objetos para prestar..." />
            <button className="buscador-btn" id="buscadorBtn">🔍</button>
          </div>
          <nav className="nav">
            <a href="#inicio" className="nav-link">Inicio</a>
            <a href="#productos" className="nav-link">Objetos</a>
            <a href="inicioregistrar/inicioregistro.html" className="btn btn-secondary nav-login-btn">Iniciar sesión / Registrarse</a>
            <button className="carrito-btn" id="carritoBtn">
              🧾 Solicitudes <span className="carrito-count">0</span>
            </button>
          </nav>
        </div>
      </header>

      {/* Menú Lateral */}
      <div id="sideMenu" className="side-menu">
        <div className="side-menu-content">
          <button className="close-menu" id="closeMenuBtn">&times;</button>
          <h3>¡Hola!</h3>
          <div className="menu-categories">
            <a href="#" className="menu-category">Todos</a>
            <a href="#" className="menu-category">Cocina</a>
            <a href="#" className="menu-category">Sala</a>
            <a href="#" className="menu-category">Dormitorio</a>
            <a href="#" className="menu-category">Decoración</a>
          </div>
        </div>
      </div>

      {/* Overlay del Menú */}
      <div id="menuOverlay" className="menu-overlay"></div>

      {/* Banner */}
      <section id="inicio" className="banner">
        <div className="banner-content">
          <h1>Bienvenido a PrestaCasa</h1>
          <p>Encuentra y solicita objetos del hogar que otros usuarios pueden prestarte</p>
          <a href="#productos" className="btn btn-primary">Ver objetos</a>
        </div>
      </section>

      {/* Productos */}
      <section id="productos" className="productos">
        <div className="container">
          <h2 className="seccion-titulo">Objetos disponibles para préstamo</h2>
          <div className="productos-grid" id="productosGrid">
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
        <p>&copy; 2024 PrestaCosa - Préstamo de objetos del hogar. Todos los derechos reservados.</p>
      </footer>
    </>
  )
}

export default App