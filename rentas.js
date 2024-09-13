const prompt = require("prompt-sync")();

class Cliente {
    constructor(membresia, nombre, direccion, telefono, estado) {
        this.membresia = membresia,
        this.nombre = nombre,
        this.direccion = direccion,
        this.telefono = telefono,
        this.estado = estado;
    }
}

class Pelicula {
    constructor(numero, titulo, clasificacion, tipo) {
        this.numero = numero,
        this.titulo = titulo,
        this.clasificacion = clasificacion,
        this.estado = 'Disponible',
        this.tipo = tipo; 
    }
}

class Renta {
    constructor(cliente, pelicula, fechaRenta, fechaDevolucion) {
        this.cliente = cliente,
        this.pelicula = pelicula,
        this.fechaRenta = fechaRenta,
        this.fechaDevolucion = fechaDevolucion;
    }
}

let clientes = [], peliculas = [], rentas = [];

function mostrarMenu() {
    console.log("\n1- registros de los clientes")
    console.log("2- consultas generales de los clientes")
    console.log("3- dar de baja un cliente")
    console.log("4- registro de peliculas")
    console.log("5- Consultas general de peliculas")
    console.log("6- Baja de pelicula")
    console.log("7- Renta de pelicula")
    console.log("8- Consultar películas rentadas")
    console.log("9- Salida")
}
function registrarCliente() {
    const membresia = parseInt(prompt("Nmero de membresia: "))
    const nombre = prompt("Nombre: ")
    const direccion = prompt("Direccion: ")
    const telefono = parseInt(prompt("Telefono: "))
    const estado = prompt("Estado (Deudor/Libre de multa): ") //se tiene que escribir identico
    clientes.push(new Cliente(membresia, nombre, direccion, telefono, estado));
}

function registrarPelicula() {
    const numero = parseInt(prompt("Numero: "))
    const titulo = prompt("Titulo: ");
    const clasificacion = prompt("Clasificacion: ")
    const tipo = prompt("Tipo (Estreno/Catalogo): ");
    peliculas.push(new Pelicula(numero, titulo, clasificacion, tipo));
}

function mostrar(array, tipo) {
    if (array.length === 0) {
        console.log(`No hay ${tipo}.`);
        return;
    }
    array.forEach(item => {
        console.log(item);
    });
}

function baja(array, clave, mensaje) {
    const id = parseInt(prompt(mensaje));
    const index = array.findIndex(item => item[clave] === id);
    if (index !== -1) {
        array.splice(index, 1);
        console.log(`${clave} eliminado.`);
    } else {
        console.log(`${clave} no encontrado.`);
    }
}

function rentaPelicula() {
    const membresia = parseInt(prompt("Numero de membresia del cliente: "));
    const numero = parseInt(prompt("Numero de pelicula: "));
    const cliente = clientes.find(c => c.membresia === membresia);
    const pelicula = peliculas.find(p => p.numero === numero);

    if (cliente && pelicula && cliente.estado === 'Libre de multa' && pelicula.estado === 'Disponible') {
        const fechaRenta = new Date();
        const fechaDevolucion = new Date(fechaRenta);
        fechaDevolucion.setDate(fechaRenta.getDate() + 3);
        pelicula.estado = 'Rentada';
        rentas.push(new Renta(cliente, pelicula, fechaRenta, fechaDevolucion));
        console.log(`Pelicula rentada hasta: ${fechaDevolucion}`);
    } else {
        console.log("No se puede realizar la renta");
    }
}

function mostrarRentas() {
    if (rentas.length === 0) {
        console.log("No hay rentas registradas.");
        return;
    }
    rentas.forEach(r => {
        console.log(`Cliente: ${r.cliente.nombre}, Pelicula: ${r.pelicula.titulo}, Fecha de Devolucion: ${r.fechaDevolucion}`);
    });
}
function menu() {
    while (true) {
        mostrarMenu();
        const opcion = parseInt(prompt("ELIGE LA OPCION QUE MAS TE LLAME LA ATENCION: "));
        switch (opcion) {
            case 1: registrarCliente(); break;
            case 2: mostrar(clientes, 'clientes'); break;
            case 3: baja(clientes, 'membresia', "Que numero de membresia quieres eliminar?: "); break;
            case 4: registrarPelicula(); break;
            case 5: mostrar(peliculas, 'peliculas'); break;
            case 6: baja(peliculas, 'numero', "Que numero de pelicula quieres eliminar?: "); break;
            case 7: rentaPelicula(); break;
            case 8: mostrarRentas(); break;
            case 9: return;
            default: console.log("Opcion incorrecta.");
        }
    }
}

menu();
