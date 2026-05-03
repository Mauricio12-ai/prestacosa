// Objetos disponibles para préstamo en el hogar
const productos = [
    // Cocina
    {
        id: 1,
        nombre: 'Juego de Ollas Profesional',
        categoria: 'cocina',
        precio: 89.99,
        descripcion: 'Set de 5 ollas de acero inoxidable de alta calidad',
        icono: '🍲',
        especificaciones: 'Material: Acero inoxidable, Apto para inducción, Capacidades: 1.5L, 2L, 3L, 4L, 5L'
    },
    {
        id: 2,
        nombre: 'Juego de Cuchillos Cocina',
        categoria: 'cocina',
        precio: 45.99,
        descripcion: 'Set de 6 cuchillos con soporte de madera',
        icono: '🔪',
        especificaciones: 'Acero inoxidable de alta dureza, Cuchillos variados para diferentes tareas'
    },
    {
        id: 3,
        nombre: 'Batidora Eléctrica',
        categoria: 'cocina',
        precio: 65.00,
        descripcion: 'Batidora multifunción con 5 velocidades',
        icono: '⚙️',
        especificaciones: 'Potencia: 300W, 5 velocidades, Capacidad: 2L, Tecnología BPA-Free'
    },
    {
        id: 4,
        nombre: 'Microondas Digital',
        categoria: 'cocina',
        precio: 129.99,
        descripcion: 'Microondas 25L con controles digitales',
        icono: '📟',
        especificaciones: 'Capacidad: 25L, Potencia: 900W, 10 niveles de potencia, Temporizador'
    },
    {
        id: 5,
        nombre: 'Vajilla Porcelana',
        categoria: 'cocina',
        precio: 59.99,
        descripcion: 'Juego completo de 12 piezas de porcelana fina',
        icono: '🥘',
        especificaciones: '12 piezas, Porcelana de alta calidad, Apto para lavavajillas'
    },
    // Sala
    {
        id: 6,
        nombre: 'Sofá de 3 Cuerpos',
        categoria: 'sala',
        precio: 399.99,
        descripcion: 'Sofá cómodo con tapiz gris y cojines incluidos',
        icono: '🛋️',
        especificaciones: 'Medidas: 2.20m x 0.80m, Tapiz resistente, Estructura madera'
    },
    {
        id: 7,
        nombre: 'Mesa Centro Moderna',
        categoria: 'sala',
        precio: 149.99,
        descripcion: 'Mesa de centro en vidrio templado y madera',
        icono: '📺',
        especificaciones: 'Medidas: 1.20m x 0.60m, Vidrio templado, Base de madera'
    },
    {
        id: 8,
        nombre: 'Estantería de Pared',
        categoria: 'sala',
        precio: 89.99,
        descripcion: 'Estantería flotante para la sala',
        icono: '📚',
        especificaciones: 'Medidas: 1.50m x 0.25m, Capacidad: 20kg, Incluye herrajes'
    },
    {
        id: 9,
        nombre: 'Lámpara de Pie',
        categoria: 'sala',
        precio: 79.99,
        descripcion: 'Lámpara moderna con luz LED ajustable',
        icono: '💡',
        especificaciones: 'Altura: 1.60m, LED regulable, Control remoto, 3 tonos de luz'
    },
    {
        id: 10,
        nombre: 'Cortinas Modernas',
        categoria: 'sala',
        precio: 49.99,
        descripcion: 'Par de cortinas en tela blackout',
        icono: '🪟',
        especificaciones: 'Medidas: 1.40m x 2.20m, 100% blackout, Varias colores'
    },
    // Dormitorio
    {
        id: 11,
        nombre: 'Cama Queen 160x200',
        categoria: 'dormitorio',
        precio: 449.99,
        descripcion: 'Cama con estructura de madera y base acolchada',
        icono: '🛏️',
        especificaciones: 'Medidas: 160x200cm, Madera de pino, Base acolchada premium'
    },
    {
        id: 12,
        nombre: 'Colchón Espuma Viscoelástica',
        categoria: 'dormitorio',
        precio: 299.99,
        descripcion: 'Colchón ortopédico con espuma viscoelástica',
        icono: '⬜',
        especificaciones: 'Medidas: 160x200cm, Viscoelástica, Firmeza media-alta, Funda lavable'
    },
    {
        id: 13,
        nombre: 'Almohadas de Pluma',
        categoria: 'dormitorio',
        precio: 34.99,
        descripcion: 'Set de 2 almohadas de pluma de ganso',
        icono: '☁️',
        especificaciones: 'Relleno: Pluma 100%, Funda algodón, Tamaño estándar'
    },
    {
        id: 14,
        nombre: 'Juego de Sabanas Algodón',
        categoria: 'dormitorio',
        precio: 44.99,
        descripcion: 'Juego de sábanas 100% algodón Egyptian',
        icono: '🧺',
        especificaciones: '100% algodón, Hilo: 400, Incluye 2 sábanas y 2 fundas'
    },
    {
        id: 15,
        nombre: 'Velador con Cajón',
        categoria: 'dormitorio',
        precio: 89.99,
        descripcion: 'Velador de madera con cajón y superficie',
        icono: '🚪',
        especificaciones: 'Madera de pino, 1 cajón, Medidas: 0.45m x 0.40m'
    },
    // Decoración
    {
        id: 16,
        nombre: 'Cuadro Moderno',
        categoria: 'decoracion',
        precio: 39.99,
        descripcion: 'Cuadro decorativo abstracto enmarcado',
        icono: '🎨',
        especificaciones: 'Medidas: 60x80cm, Marco de madera, Vidrio protector'
    },
    {
        id: 17,
        nombre: 'Espejo de Pared',
        categoria: 'decoracion',
        precio: 69.99,
        descripcion: 'Espejo grande con marco de madera',
        icono: '🪞',
        especificaciones: 'Medidas: 1.20m x 0.80m, Marco decorativo, Cristal de alta calidad'
    },
    {
        id: 18,
        nombre: 'Maceta Decorativa',
        categoria: 'decoracion',
        precio: 24.99,
        descripcion: 'Maceta cerámica para plantas',
        icono: '🌱',
        especificaciones: 'Cerámica esmaltada, Diámetro: 25cm, Con drenaje'
    },
    {
        id: 19,
        nombre: 'Velas Aromáticas',
        categoria: 'decoracion',
        precio: 19.99,
        descripcion: 'Set de 3 velas aromáticas de soja',
        icono: '🕯️',
        especificaciones: '100% soja, Duración: 20h cada una, Varios aromas disponibles'
    },
    {
        id: 20,
        nombre: 'Reloj de Pared',
        categoria: 'decoracion',
        precio: 29.99,
        descripcion: 'Reloj decorativo silencioso',
        icono: '🕐',
        especificaciones: 'Mecanismo de cuarzo silencioso, Diámetro: 35cm, Batería incluida'
    }
];

// Variables globales
let carrito = [];
let productosFiltrados = [...productos];

// Elementos del Menú Hamburguer
const hamburgerBtn = document.getElementById('hamburgerBtn');
const sideMenu = document.getElementById('sideMenu');
const menuOverlay = document.getElementById('menuOverlay');
const closeMenuBtn = document.getElementById('closeMenuBtn');

function abrirMenu() {
    if (sideMenu) sideMenu.classList.add('activo');
    if (menuOverlay) menuOverlay.classList.add('activo');
}

function cerrarMenu() {
    if (sideMenu) sideMenu.classList.remove('activo');
    if (menuOverlay) menuOverlay.classList.remove('activo');
}

function cerrarMenuYFiltrar(categoria) {
    cerrarMenu();
    setTimeout(() => {
        filtrarProductos(categoria);
        filtrosBtns.forEach(btn => btn.classList.remove('activo'));
        const btnActivo = Array.from(filtrosBtns).find(btn => btn.dataset.filtro === categoria);
        if (btnActivo) btnActivo.classList.add('activo');
        document.getElementById('productos').scrollIntoView({ behavior: 'smooth' });
    }, 300);
}

// Elementos del DOM
const productosGrid = document.getElementById('productosGrid');
const carritoBtn = document.getElementById('carritoBtn');
const carritoModal = document.getElementById('carritoModal');
const productoModal = document.getElementById('productoModal');
const cerrarModal = document.getElementById('cerrarModal');
const cerrarProductoModal = document.getElementById('cerrarProductoModal');
const carritoItems = document.getElementById('carritoItems');
const totalCarrito = document.getElementById('totalCarrito');
const comprarBtn = document.getElementById('comprarBtn');
const filtrosBtns = document.querySelectorAll('.filtro-btn');
const buscador = document.getElementById('buscador');
const buscadorBtn = document.getElementById('buscadorBtn');

// Inicialización
document.addEventListener('DOMContentLoaded', () => {
    mostrarProductos(productos);
    configurarEventos();
    cargarCarritoDelStorage();
});

// Configurar eventos
function configurarEventos() {
    // Menú Hamburguer
    if (hamburgerBtn) hamburgerBtn.addEventListener('click', abrirMenu);
    if (closeMenuBtn) closeMenuBtn.addEventListener('click', cerrarMenu);
    if (menuOverlay) menuOverlay.addEventListener('click', cerrarMenu);

    // Carrito
    carritoBtn.addEventListener('click', abrirCarrito);
    cerrarModal.addEventListener('click', cerrarCarrito);
    cerrarProductoModal.addEventListener('click', cerrarDetalleProducto);
    comprarBtn.addEventListener('click', realizarCompra);

    // Buscador
    buscadorBtn.addEventListener('click', buscar);
    buscador.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') buscar();
    });

    // Filtros
    filtrosBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filtrosBtns.forEach(b => b.classList.remove('activo'));
            btn.classList.add('activo');
            filtrarProductos(btn.dataset.filtro);
        });
    });

    // Cerrar modal al hacer click fuera
    carritoModal.addEventListener('click', (e) => {
        if (e.target === carritoModal) cerrarCarrito();
    });

    productoModal.addEventListener('click', (e) => {
        if (e.target === productoModal) cerrarDetalleProducto();
    });
}

// Mostrar productos en la grid
function mostrarProductos(productosList) {
    productosGrid.innerHTML = '';
    
    if (productosList.length === 0) {
        productosGrid.innerHTML = '<p style="text-align: center; grid-column: 1/-1;">No se encontraron objetos</p>';
        return;
    }

    productosList.forEach(producto => {
        const card = document.createElement('div');
        card.className = 'producto-card';
        card.innerHTML = `
            <div class="producto-imagen">${producto.icono}</div>
            <div class="producto-info">
                <div class="producto-categoria">${producto.categoria}</div>
                <h3 class="producto-nombre">${producto.nombre}</h3>
                <p class="producto-descripcion">${producto.descripcion}</p>
                <div class="producto-precio">Costo por día: $${producto.precio.toFixed(2)}</div>
                <div class="producto-acciones">
                    <button class="btn-agregar" onclick="agregarAlCarrito(${producto.id})">Solicitar</button>
                    <button class="btn-ver-detalle" onclick="mostrarDetalleProducto(${producto.id})">Detalle</button>
                </div>
            </div>
        `;
        productosGrid.appendChild(card);
    });
}

// Filtrar productos
function filtrarProductos(categoria) {
    if (categoria === 'todos') {
        productosFiltrados = [...productos];
    } else {
        productosFiltrados = productos.filter(p => p.categoria === categoria);
    }
    mostrarProductos(productosFiltrados);
}

// Buscar productos
function buscar() {
    const termino = buscador.value.toLowerCase().trim();
    
    if (termino === '') {
        mostrarProductos(productos);
        return;
    }

    const resultados = productos.filter(p => 
        p.nombre.toLowerCase().includes(termino) ||
        p.descripcion.toLowerCase().includes(termino) ||
        p.categoria.toLowerCase().includes(termino)
    );

    // Limpiar filtros activos
    filtrosBtns.forEach(btn => btn.classList.remove('activo'));
    filtrosBtns[0].classList.add('activo');

    mostrarProductos(resultados);
    mostrarNotificacion(`Se encontraron ${resultados.length} objeto(s)`);
}

// Agregar al carrito
function agregarAlCarrito(productoId) {
    const producto = productos.find(p => p.id === productoId);
    const itemCarrito = carrito.find(item => item.id === productoId);

    if (itemCarrito) {
        itemCarrito.cantidad++;
    } else {
        carrito.push({
            ...producto,
            cantidad: 1
        });
    }

    guardarCarritoEnStorage();
    actualizarContadorCarrito();
    mostrarNotificacion(`${producto.nombre} solicitado`);
}

// Eliminar del carrito
function eliminarDelCarrito(productoId) {
    carrito = carrito.filter(item => item.id !== productoId);
    guardarCarritoEnStorage();
    actualizarContadorCarrito();
    mostrarCarrito();
}

// Cambiar cantidad
function cambiarCantidad(productoId, cantidad) {
    const item = carrito.find(item => item.id === productoId);
    if (item) {
        item.cantidad = Math.max(1, item.cantidad + cantidad);
        guardarCarritoEnStorage();
        mostrarCarrito();
    }
}

// Actualizar contador del carrito
function actualizarContadorCarrito() {
    const totalItems = carrito.reduce((sum, item) => sum + item.cantidad, 0);
    document.querySelector('.carrito-count').textContent = totalItems;
}

// Abrir carrito
function abrirCarrito() {
    carritoModal.classList.add('activo');
    mostrarCarrito();
}

// Cerrar carrito
function cerrarCarrito() {
    carritoModal.classList.remove('activo');
}

// Mostrar items del carrito
function mostrarCarrito() {
    if (carrito.length === 0) {
        carritoItems.innerHTML = '<div class="carrito-vacio">No hay solicitudes en la lista</div>';
        totalCarrito.textContent = '0.00';
        return;
    }

    let html = '';
    let total = 0;

    carrito.forEach(item => {
        const subtotal = item.precio * item.cantidad;
        total += subtotal;
        html += `
            <div class="carrito-item">
                <div class="carrito-item-info">
                    <div class="carrito-item-nombre">${item.nombre}</div>
                    <div class="carrito-item-precio">Costo por día: $${item.precio.toFixed(2)}</div>
                    <div class="carrito-item-cantidad">
                        <button class="cantidad-btn" onclick="cambiarCantidad(${item.id}, -1)">-</button>
                        <span>${item.cantidad}</span>
                        <button class="cantidad-btn" onclick="cambiarCantidad(${item.id}, 1)">+</button>
                        <span style="margin-left: 1rem;">Subtotal: $${subtotal.toFixed(2)}</span>
                    </div>
                </div>
                <button class="carrito-item-eliminar" onclick="eliminarDelCarrito(${item.id})">Eliminar</button>
            </div>
        `;
    });

    carritoItems.innerHTML = html;
    totalCarrito.textContent = total.toFixed(2);
}

// Mostrar detalle del producto
function mostrarDetalleProducto(productoId) {
    const producto = productos.find(p => p.id === productoId);
    if (!producto) return;

    const detalle = document.getElementById('productoDetalle');
    detalle.innerHTML = `
        <div class="producto-detalle-imagen">${producto.icono}</div>
        <div class="producto-detalle-info">
            <div class="producto-detalle-categoria">${producto.categoria}</div>
            <h3>${producto.nombre}</h3>
            <div class="producto-detalle-precio">Costo por día: $${producto.precio.toFixed(2)}</div>
            <div class="producto-detalle-descripcion">${producto.descripcion}</div>
            <div class="producto-detalle-especificaciones">
                <h4>Especificaciones:</h4>
                <p>${producto.especificaciones}</p>
            </div>
            <div class="producto-detalle-acciones">
                <button class="btn btn-primary" onclick="agregarAlCarrito(${producto.id}); cerrarDetalleProducto();">Solicitar</button>
                <button class="btn btn-secondary" onclick="cerrarDetalleProducto();">Cerrar</button>
            </div>
        </div>
    `;
    productoModal.classList.add('activo');
}

// Cerrar detalle del producto
function cerrarDetalleProducto() {
    productoModal.classList.remove('activo');
}

// Realizar compra
function realizarCompra() {
    if (carrito.length === 0) {
        alert('No hay solicitudes en la lista');
        return;
    }

    const total = carrito.reduce((sum, item) => sum + (item.precio * item.cantidad), 0);
    alert(`¡Solicitud enviada!\n\nTotal estimado: $${total.toFixed(2)}\n\nGracias por usar PrestaCasa.`);
    
    carrito = [];
    guardarCarritoEnStorage();
    actualizarContadorCarrito();
    cerrarCarrito();
}

// Notificación
function mostrarNotificacion(mensaje) {
    const notif = document.createElement('div');
    notif.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background-color: #27ae60;
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 5px;
        z-index: 2000;
        animation: slideIn 0.3s ease-in-out;
    `;
    notif.textContent = mensaje;
    document.body.appendChild(notif);

    setTimeout(() => {
        notif.style.animation = 'slideOut 0.3s ease-in-out';
        setTimeout(() => notif.remove(), 300);
    }, 2000);
}

// Guardar y cargar carrito del storage
function guardarCarritoEnStorage() {
    localStorage.setItem('carrito', JSON.stringify(carrito));
}

function cargarCarritoDelStorage() {
    const carritoGuardado = localStorage.getItem('carrito');
    if (carritoGuardado) {
        carrito = JSON.parse(carritoGuardado);
        actualizarContadorCarrito();
    }
}

// Animaciones
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(400px);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);
