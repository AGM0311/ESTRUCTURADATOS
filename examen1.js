const prompt = require('prompt-sync')();

class Empleado {
  constructor(nombre, apellidos, rfc, direccion, telefono, sueldo) {
    this._nombre = nombre;
    this._apellidos = apellidos;
    this._rfc = rfc;
    this._direccion = direccion;
    this._telefono = telefono;
    this._sueldo = sueldo;
  }

  get nombre() {
    return this._nombre;
  }

  set nombre(value) {
    this._nombre = value;
  }

  calcularSueldo() {
    return this._sueldo * 0.15;
  }
}

let arreglo = [];

function añadir() {
  let tamaño = parseInt(prompt("Ingrese el número de empleados a agregar: "));
  for (let i = 0; i < tamaño; i++) {
    let nombre = prompt("Ingrese el nombre del empleado: ");
    let apellidos = prompt("Ingrese los apellidos del empleado: ");
    let rfc = prompt("Ingrese el RFC del empleado: ");
    let direccion = prompt("Ingrese la dirección del empleado: ");
    let telefono = prompt("Ingrese el teléfono del empleado: ");
    let sueldo = parseFloat(prompt("Ingrese el sueldo: "));
    
    let empleado = new Empleado(nombre, apellidos, rfc, direccion, telefono, sueldo);
    arreglo.push(empleado);

    let sueldoBono = empleado.calcularSueldo();
    console.log(`Sueldo con bono del empleado ${nombre}: ${sueldoBono}`);

    let sueldoTotal = sueldo + sueldoBono;
    console.log(`Sueldo total del empleado ${nombre}: ${sueldoTotal}`);
  }
}

añadir();
arreglo.pop()
console.log(arreglo);
 
