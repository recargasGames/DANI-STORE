/* =========================================================
   ELECTROHOGAR
   productos.js

   Catálogo temporal de demostración.
   Posteriormente estos productos serán reemplazados
   por productos provenientes de Firebase/Firestore.
   ========================================================= */


/* =========================================================
   PRODUCTOS DE DEMOSTRACIÓN
   ========================================================= */

const productos = [

    {
        id: 1,

        nombre: "Smart TV Samsung 55 pulgadas",

        categoria: "Televisores",

        marca: "Samsung",

        modelo: "55\" 4K UHD",

        imagen:
            "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?auto=format&fit=crop&w=900&q=80",

        descripcion:
            "Smart TV 4K UHD con excelente calidad de imagen y funciones inteligentes.",

        precioContado: 600,

        precioFinanciado: 700,

        inicial: 200,

        cuotas: 10,

        frecuencia: "Quincenal",

        cuota: 50,

        stock: 5,

        destacado: true,

        oferta: false,

        disponible: true
    },


    {
        id: 2,

        nombre: "Lavadora LG 12 Kg",

        categoria: "Lavadoras",

        marca: "LG",

        modelo: "12 Kg",

        imagen:
            "https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?auto=format&fit=crop&w=900&q=80",

        descripcion:
            "Lavadora de gran capacidad ideal para el hogar.",

        precioContado: 480,

        precioFinanciado: 560,

        inicial: 160,

        cuotas: 10,

        frecuencia: "Quincenal",

        cuota: 40,

        stock: 4,

        destacado: true,

        oferta: false,

        disponible: true
    },


    {
        id: 3,

        nombre: "Nevera Mabe 10 Pies",

        categoria: "Neveras",

        marca: "Mabe",

        modelo: "10 Pies",

        imagen:
            "https://images.unsplash.com/photo-1584568694244-14fbdf83bd30?auto=format&fit=crop&w=900&q=80",

        descripcion:
            "Nevera espaciosa y práctica para conservar tus alimentos.",

        precioContado: 550,

        precioFinanciado: 650,

        inicial: 200,

        cuotas: 10,

        frecuencia: "Quincenal",

        cuota: 45,

        stock: 3,

        destacado: true,

        oferta: false,

        disponible: true
    },


    {
        id: 4,

        nombre: "Cocina Eléctrica 4 Hornillas",

        categoria: "Cocinas",

        marca: "ElectroHome",

        modelo: "4 Hornillas",

        imagen:
            "https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&w=900&q=80",

        descripcion:
            "Cocina eléctrica moderna para preparar tus comidas cómodamente.",

        precioContado: 260,

        precioFinanciado: 320,

        inicial: 100,

        cuotas: 8,

        frecuencia: "Quincenal",

        cuota: 27.50,

        stock: 6,

        destacado: false,

        oferta: true,

        disponible: true
    },


    {
        id: 5,

        nombre: "Aire Acondicionado Split 12.000 BTU",

        categoria: "Aires acondicionados",

        marca: "Midea",

        modelo: "12.000 BTU",

        imagen:
            "https://images.unsplash.com/photo-1631545806609-4b7e4b1c8a2a?auto=format&fit=crop&w=900&q=80",

        descripcion:
            "Aire acondicionado Split para mantener tu hogar fresco y confortable.",

        precioContado: 450,

        precioFinanciado: 520,

        inicial: 170,

        cuotas: 10,

        frecuencia: "Quincenal",

        cuota: 35,

        stock: 2,

        destacado: true,

        oferta: false,

        disponible: true
    },


    {
        id: 6,

        nombre: "Microondas Digital",

        categoria: "Electrodomésticos",

        marca: "Oster",

        modelo: "Digital",

        imagen:
            "https://images.unsplash.com/photo-1585659722983-3a675dabf23d?auto=format&fit=crop&w=900&q=80",

        descripcion:
            "Microondas digital compacto y práctico para tu cocina.",

        precioContado: 140,

        precioFinanciado: 175,

        inicial: 60,

        cuotas: 5,

        frecuencia: "Quincenal",

        cuota: 23,

        stock: 8,

        destacado: false,

        oferta: true,

        disponible: true
    }

];


/* =========================================================
   FORMATO DE MONEDA
   ========================================================= */

function formatearPrecio(valor) {

    return new Intl.NumberFormat(
        "en-US",
        {
            style: "currency",
            currency: "USD",
            minimumFractionDigits: 0,
            maximumFractionDigits: 2
        }
    ).format(valor);

}


/* =========================================================
   CREAR TARJETA DE PRODUCTO
   ========================================================= */

function crearTarjetaProducto(producto) {

    if (!producto || !producto.disponible) {
        return "";
    }


    let badge = "";

    if (producto.oferta) {

        badge = `
            <span class="product-badge">
                OFERTA
            </span>
        `;

    } else if (producto.destacado) {

        badge = `
            <span class="product-badge">
                DESTACADO
            </span>
        `;

    }


    return `

        <article
            class="product-card"
            data-id="${producto.id}"
        >

            <div class="product-image">

                ${badge}

                <img
                    src="${producto.imagen}"
                    alt="${producto.nombre}"
                    loading="lazy"
                >

            </div>


            <div class="product-info">

                <span class="product-category">
                    ${producto.categoria}
                </span>


                <h3 class="product-name">
                    ${producto.nombre}
                </h3>


                <div class="product-price-label">
                    Precio de contado
                </div>


                <div class="product-price">
                    ${formatearPrecio(producto.precioContado)}
                </div>


                <div class="product-installment">

                    <span>
                        Desde ${formatearPrecio(producto.inicial)}
                        de inicial
                    </span>

                    <strong>
                        ${formatearPrecio(producto.cuota)}
                        / quincena
                    </strong>

                </div>


                <button
                    class="product-card-btn"
                    onclick="verProducto(${producto.id})"
                >
                    Ver producto
                </button>

            </div>

        </article>

    `;

}


/* =========================================================
   MOSTRAR PRODUCTOS
   ========================================================= */

function mostrarProductos(lista = productos) {

    const contenedor =
        document.getElementById("productsGrid");


    if (!contenedor) {
        return;
    }


    if (!lista.length) {

        contenedor.innerHTML = `

            <div
                class="empty-products"
                style="
                    grid-column: 1 / -1;
                    text-align: center;
                    padding: 50px 20px;
                "
            >

                <div
                    style="
                        font-size: 2.5rem;
                        margin-bottom: 15px;
                    "
                >
                    🔍
                </div>

                <h3>
                    No encontramos productos
                </h3>

                <p
                    style="
                        color: #6b7280;
                        margin-top: 5px;
                    "
                >
                    Intenta nuevamente con otra búsqueda.
                </p>

            </div>

        `;

        return;
    }


    contenedor.innerHTML =
        lista.map(
            crearTarjetaProducto
        ).join("");

}


/* =========================================================
   VER PRODUCTO
   ========================================================= */

function verProducto(id) {

    const producto =
        productos.find(
            item => item.id === id
        );


    if (!producto) {

        console.error(
            "Producto no encontrado:",
            id
        );

        return;

    }


    /*
     * Guardamos temporalmente el producto seleccionado.
     *
     * Más adelante podremos utilizar Firebase
     * y una página producto.html?id=1.
     */

    localStorage.setItem(
        "productoSeleccionado",
        JSON.stringify(producto)
    );


    window.location.href =
        `producto.html?id=${producto.id}`;

}


/* =========================================================
   BUSCAR PRODUCTOS
   ========================================================= */

function buscarProductos(texto) {

    const busqueda =
        texto
            .toLowerCase()
            .trim();


    if (!busqueda) {

        mostrarProductos();

        return;

    }


    const resultados =
        productos.filter(producto => {

            return (

                producto.nombre
                    .toLowerCase()
                    .includes(busqueda)

                ||

                producto.categoria
                    .toLowerCase()
                    .includes(busqueda)

                ||

                producto.marca
                    .toLowerCase()
                    .includes(busqueda)

            );

        });


    mostrarProductos(resultados);

}


/* =========================================================
   FILTRAR POR CATEGORÍA
   ========================================================= */

function filtrarPorCategoria(categoria) {

    if (
        !categoria ||
        categoria === "Todas"
    ) {

        mostrarProductos();

        return;

    }


    const resultados =
        productos.filter(
            producto =>
                producto.categoria === categoria
        );


    mostrarProductos(resultados);

}


/* =========================================================
   PRODUCTOS DESTACADOS
   ========================================================= */

function obtenerDestacados() {

    return productos.filter(
        producto =>
            producto.destacado &&
            producto.disponible
    );

}


/* =========================================================
   PRODUCTOS EN OFERTA
   ========================================================= */

function obtenerOfertas() {

    return productos.filter(
        producto =>
            producto.oferta &&
            producto.disponible
    );

}


/* =========================================================
   DISPONIBILIDAD
   ========================================================= */

function verificarDisponibilidad(id) {

    const producto =
        productos.find(
            item => item.id === id
        );


    if (!producto) {
        return false;
    }


    return (
        producto.disponible &&
        producto.stock > 0
    );

}


/* =========================================================
   INICIALIZAR CATÁLOGO
   ========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        mostrarProductos();

    }
);


/* =========================================================
   EXPONER FUNCIONES GLOBALMENTE
   ========================================================= */

window.productos = productos;

window.mostrarProductos =
    mostrarProductos;

window.buscarProductos =
    buscarProductos;

window.filtrarPorCategoria =
    filtrarPorCategoria;

window.verProducto =
    verProducto;

window.obtenerDestacados =
    obtenerDestacados;

window.obtenerOfertas =
    obtenerOfertas;

window.verificarDisponibilidad =
    verificarDisponibilidad;

window.formatearPrecio =
    formatearPrecio;
