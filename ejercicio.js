const prompt=require("prompt-sync")()

class Person {
    constructor(nombre, edad, sexo, direccion, telefono) {
      this._nombre = nombre;
      this._edad = edad;
      this._sexo = sexo;
      this._direccion = direccion;
      this._telefono = telefono;
      this.array = [];
    }
  
    añadir() {
      let tamaño = parseInt(prompt("Ingrese el número de empleados a agregar: "));
      for (let i = 0; i < tamaño; i++) {
        let nombre = prompt("Ingrese el nombre del empleado: ");
        let edad = prompt("Ingrese la edad: ");
        let sexo = prompt("Ingrese el sexo: ");
        let direccion = prompt("Ingrese la dirección : ");
        let telefono = prompt("Ingrese el teléfono : ");
        
        let personas = new Person(nombre, edad, sexo, direccion, telefono);
        this.array.push(personas);
      }
    }
  
    mostrarEmpleados() {
      console.log("Empleados:");
      this.array.forEach((persona) => {
        console.log(`Nombre: ${persona._nombre}, Edad: ${persona._edad}, Sexo: ${persona._sexo}, Dirección: ${persona._direccion}, Teléfono: ${persona._telefono}`);
      });
    }
  }
  

  let person = new Person();
  
  person.añadir();
  person.mostrarEmpleados();