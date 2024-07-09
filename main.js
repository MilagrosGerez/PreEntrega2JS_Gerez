const carrito = []; // Array donde se almacenarán los productos comprados


// Funciones
const verListas = () => {
    const ordenLista = productos.map(producto => "-" + producto.nombre + " $" + producto.precio.toFixed(2));
    alert("Lista de precios:\n\n" + ordenLista.join("\n"));
    comprarProductos(ordenLista); 
};
const comprarProductos = (ordenLista) => {
    let seguirComprando = true;

    while (seguirComprando) {
        let productoNombre = prompt("¿Qué producto desea comprar?\n\n" + ordenLista.join("\n"));
        
        if (!productoNombre) {
            seguirComprando = false;
            continue;
        }

        let productoCantidad = parseInt(prompt("¿Cuántos desea comprar?"));

        const producto = productos.find(p => p.nombre.toLowerCase() === productoNombre.toLowerCase());

        if (producto && !isNaN(productoCantidad) && productoCantidad > 0) {
            agregarAlCarrito(producto, productoCantidad);
        } else {
            alert("Ingrese un producto válido y una cantidad válida (número mayor que 0).");
        }

        seguirComprando = confirm("¿Desea seguir comprando?");
    }

    mostrarCarrito(); 
};

// Función para agregar un producto al carrito
const agregarAlCarrito = (producto, cantidad) => {
    carrito.push({ id: producto.id, nombre: producto.nombre, precio: producto.precio, cantidad: cantidad });
    alert(`Producto agregado al carrito: ${producto.nombre} - Cantidad: ${cantidad}`);
};

// Función para mostrar el contenido del carrito
const mostrarCarrito = () => {
    if (carrito.length === 0) {
        alert("No hay productos en el carrito.");
    } else {
        let contenidoCarrito = "Productos en el carrito:\n";
        carrito.forEach(item => {
            contenidoCarrito += `${item.nombre} - Cantidad: ${item.cantidad} - Precio unitario: $${item.precio.toFixed(2)}\n`;
        });
        contenidoCarrito += `\nTotal a pagar: $${calcularTotalCarrito().toFixed(2)}`;
        alert(contenidoCarrito);
    }
};

// Función para calcular el total del carrito
const calcularTotalCarrito = () => {
    let total = 0;
    carrito.forEach(item => {
        total += item.precio * item.cantidad;
    });
    return total;
};


verListas ();