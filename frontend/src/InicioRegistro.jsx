import { useState } from 'react'
import './App.css'
import logo from './img/logo-sin-fondo.png'
import fondo from './img/fondo-ini-reg.png'


import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import IconButton from '@mui/material/IconButton'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import InputAdornment from '@mui/material/InputAdornment'
import Visibility from '@mui/icons-material/Visibility'
import VisibilityOff from '@mui/icons-material/VisibilityOff'

function InicioRegistro() {
  const [mostrarRegistro, setMostrarRegistro] = useState(false)
  const [mostrarPassword, setMostrarPassword] = useState(false)

  return (
    <>
      <header className="header">
        <div className="container">
          <a href="/" className="logo-link">
            <div className="logo">
              <img src={logo} alt="Logo PrestaCasa" className="logo-img" />
            </div>
          </a>
          <nav className="nav">
            <a href="/" className="nav-link">Inicio</a>
            <a href="/#productos" className="nav-link">Objetos</a>
          </nav>
        </div>
      </header>

      <main>
        <section
          className="login-seccion"
          style={{
            backgroundImage: `url(${fondo})`
          }}
        >
          <div className="container login-container">
            <div className="login-card">

              {/* Formulario de Login */}
              {!mostrarRegistro && (
                <div>
                  <div className="login-header">
                    <IconButton onClick={() => window.history.back()}>
                      <ArrowBackIcon />
                    </IconButton>

                    <h2>Iniciar sesión</h2>
                  </div>

                  <p>
                    Accede para ver tus solicitudes y administrar tus objetos prestados.
                  </p>

                  <div className="login-form">

                    <TextField
                      label="Correo electrónico"
                      type="email"
                      variant="outlined"
                      fullWidth
                      margin="normal"
                    />

                    <TextField
                      label="Contraseña"
                      type={mostrarPassword ? 'text' : 'password'}
                      variant="outlined"
                      fullWidth
                      margin="normal"

                      slotProps={{
                        input: {
                          endAdornment: (
                            <InputAdornment position="end">
                              <IconButton
                                onClick={() => setMostrarPassword(!mostrarPassword)}
                                edge="end"
                              >
                                {mostrarPassword ? <VisibilityOff /> : <Visibility />}
                              </IconButton>
                            </InputAdornment>
                          )
                        }
                      }}
                    />

                    <Button
                      variant="contained"
                      color="primary"
                      fullWidth
                      sx={{ mt: 2 }}
                    >
                      Entrar
                    </Button>

                    <p className="registro-link">
                      ¿No tienes cuenta?{' '}


                      <Button
                        variant="text"
                        onClick={() => setMostrarRegistro(true)}
                      >
                        Registrarse
                      </Button>
                    </p>
                  </div>
                </div>
              )}

              {/* Formulario de Registro */}
              {mostrarRegistro && (
                <div>

                  <div className="login-header">
                    <IconButton onClick={() => window.history.back()}>
                      <ArrowBackIcon />
                    </IconButton>

                    <h2>Registro</h2>
                  </div>

                  <p>
                    Crea tu cuenta para empezar a solicitar y prestar objetos.
                  </p>

                  <div className="login-form registro-grid">

                    <TextField
                      label="Nombre"
                      variant="outlined"
                      fullWidth
                      margin="normal"
                    />

                    <TextField
                      label="Apellido"
                      variant="outlined"
                      fullWidth
                      margin="normal"
                    />

                    <TextField
                      label="Correo electrónico"
                      type="email"
                      variant="outlined"
                      fullWidth
                      margin="normal"
                    />

                    <TextField
                      label="Contraseña"
                      type={mostrarPassword ? 'text' : 'password'}
                      variant="outlined"
                      fullWidth
                      margin="normal"

                      slotProps={{
                        input: {
                          endAdornment: (
                            <InputAdornment position="end">
                              <IconButton
                                onClick={() => setMostrarPassword(!mostrarPassword)}
                                edge="end"
                              >
                                {mostrarPassword ? <VisibilityOff /> : <Visibility />}
                              </IconButton>
                            </InputAdornment>
                          )
                        }
                      }}
                    />

                    <TextField
                      label="Teléfono"
                      variant="outlined"
                      fullWidth
                      margin="normal"
                    />
                    <TextField
                      label="Ubicación"
                      variant="outlined"
                      fullWidth
                      margin="normal"
                    />

                    <Button
                      variant="contained"
                      color="primary"
                      fullWidth
                      className="btn-registro"
                    >
                      Registrarse
                    </Button>

                    <p className="registro-link">
                      ¿Ya tienes cuenta?{' '}

                      <Button
                        variant="text"
                        onClick={() => setMostrarRegistro(false)}
                      >
                        Iniciar sesión
                      </Button>
                    </p>

                  </div>
                </div>
              )}

            </div>
          </div>
        </section>
      </main>

      <footer className="footer footer-login">
        <p>&copy; 2024 PrestaCasa - Préstamo de objetos del hogar. Todos los derechos reservados.</p>
      </footer>
    </>
  )
}

export default InicioRegistro