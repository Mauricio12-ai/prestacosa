import { useState } from 'react'

function InicioRegistro() {
  const [mostrarRegistro, setMostrarRegistro] = useState(false)

  return (
    <>
      <header className="header">
        <div className="container">
          <a href="/" className="logo-link">
            <div className="logo">
              <img src="/imagenes/logo/logo-sin-fondo.png" alt="Logo PrestaCasa" className="logo-img" />
            </div>
          </a>
          <nav className="nav">
            <a href="/" className="nav-link">Inicio</a>
            <a href="/#productos" className="nav-link">Objetos</a>
          </nav>
        </div>
      </header>

      <main>
        <section className="login-seccion">
          <div className="container login-container">
            <div className="login-card">

              {/* Formulario de Login */}
              {!mostrarRegistro && (
                <div>
                  <div className="login-header">
                    <button className="btn-back" onClick={() => window.history.back()}>←</button>
                    <h2>Iniciar sesión</h2>
                  </div>
                  <p>Accede para ver tus solicitudes y administrar tus objetos prestados.</p>
                  <div className="login-form">
                    <label htmlFor="email">Correo electrónico</label>
                    <input type="email" id="email" name="email" placeholder="tucorreo@ejemplo.com" required />

                    <label htmlFor="password">Contraseña</label>
                    <input type="password" id="password" name="password" placeholder="********" required />

                    <button className="btn btn-primary">Entrar</button>

                    <p className="registro-link">
                      ¿No tienes cuenta?{' '}
                      <a href="#" onClick={(e) => { e.preventDefault(); setMostrarRegistro(true) }} className="subrayado">
                        Registrarse
                      </a>
                    </p>
                  </div>
                </div>
              )}

              {/* Formulario de Registro */}
              {mostrarRegistro && (
                <div>
                  <div className="login-header">
                    <button className="btn-back" onClick={() => window.history.back()}>←</button>
                    <h2>Registro</h2>
                  </div>
                  <p>Crea tu cuenta para empezar a solicitar y prestar objetos.</p>
                  <div className="login-form">
                    <label htmlFor="nombre">Nombre</label>
                    <input type="text" id="nombre" name="nombre" placeholder="Tu nombre" required />

                    <label htmlFor="apellido">Apellido</label>
                    <input type="text" id="apellido" name="apellido" placeholder="Tu apellido" required />

                    <label htmlFor="email-registro">Correo electrónico</label>
                    <input type="email" id="email-registro" name="email" placeholder="tucorreo@ejemplo.com" required />

                    <label htmlFor="password-registro">Contraseña</label>
                    <input type="password" id="password-registro" name="password" placeholder="********" required />

                    <label htmlFor="telefono">Teléfono</label>
                    <input type="tel" id="telefono" name="telefono" placeholder="(123) 456-7890" required />

                    <button className="btn btn-primary">Registrarse</button>

                    <p className="registro-link">
                      ¿Ya tienes cuenta?{' '}
                      <a href="#" onClick={(e) => { e.preventDefault(); setMostrarRegistro(false) }} className="subrayado">
                        Iniciar sesión
                      </a>
                    </p>
                  </div>
                </div>
              )}

            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>&copy; 2024 PrestaCasa - Préstamo de objetos del hogar. Todos los derechos reservados.</p>
      </footer>
    </>
  )
}

export default InicioRegistro