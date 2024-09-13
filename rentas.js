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