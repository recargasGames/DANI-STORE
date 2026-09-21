// =====================================================
// ELECTROHOGAR - APP.JS
// Funciones generales de la tienda
// =====================================================

document.addEventListener("DOMContentLoaded", () => {
    iniciarMenuMovil();
    iniciarNavegacionSuave();
    cerrarMenuAlCambiarPantalla();
});


// =====================================================
// MENÚ MÓVIL
// =====================================================

function iniciarMenuMovil() {
    const menuToggle = document.getElementById("menuToggle");
    const menu = document.getElementById("mainMenu");

    if (!menuToggle || !menu) return;

    menuToggle.addEventListener("click", () => {
        menu.classList.toggle("active");

        const abierto = menu.classList.contains("active");

        menuToggle.setAttribute(
            "aria-expanded",
            abierto ? "true" : "false"
        );
    });

    // Cerrar menú al hacer clic en un enlace
    const enlaces = menu.querySelectorAll("a");

    enlaces.forEach((enlace) => {
        enlace.addEventListener("click", () => {
            menu.classList.remove("active");
            menuToggle.setAttribute("aria-expanded", "false");
        });
    });

    // Cerrar si se hace clic fuera del menú
    document.addEventListener("click", (evento) => {
        const hizoClickEnMenu = menu.contains(evento.target);
        const hizoClickEnBoton = menuToggle.contains(evento.target);

        if (!hizoClickEnMenu && !hizoClickEnBoton) {
            menu.classList.remove("active");
            menuToggle.setAttribute("aria-expanded", "false");
        }
    });
}


// =====================================================
// NAVEGACIÓN SUAVE
// =====================================================

function iniciarNavegacionSuave() {
    const enlaces = document.querySelectorAll('a[href^="#"]');

    enlaces.forEach((enlace) => {
        enlace.addEventListener("click", (evento) => {
            const destino = enlace.getAttribute("href");

            if (!destino || destino === "#") {
                return;
            }

            const elemento = document.querySelector(destino);

            if (!elemento) {
                return;
            }

            evento.preventDefault();

            elemento.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        });
    });
}


// =====================================================
// CERRAR MENÚ AL CAMBIAR A ESCRITORIO
// =====================================================

function cerrarMenuAlCambiarPantalla() {
    const menu = document.getElementById("mainMenu");
    const menuToggle = document.getElementById("menuToggle");

    if (!menu || !menuToggle) return;

    window.addEventListener("resize", () => {
        if (window.innerWidth > 720) {
            menu.classList.remove("active");
            menuToggle.setAttribute("aria-expanded", "false");
        }
    });
}


// =====================================================
// UTILIDADES GENERALES
// =====================================================

// Mostrar un mensaje sencillo
function mostrarMensaje(mensaje) {
    alert(mensaje);
}


// Guardar información temporalmente
function guardarDato(clave, valor) {
    localStorage.setItem(clave, JSON.stringify(valor));
}


// Obtener información guardada
function obtenerDato(clave) {
    const dato = localStorage.getItem(clave);

    if (!dato) {
        return null;
    }

    try {
        return JSON.parse(dato);
    } catch (error) {
        return dato;
    }
}


// Eliminar información guardada
function eliminarDato(clave) {
    localStorage.removeItem(clave);
}


// =====================================================
// EXPORTAR FUNCIONES
// =====================================================

window.mostrarMensaje = mostrarMensaje;
window.guardarDato = guardarDato;
window.obtenerDato = obtenerDato;
window.eliminarDato = eliminarDato;
