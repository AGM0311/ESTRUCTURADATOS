const prompt = require("prompt-sync")();

class Alumno {
    constructor(nombre, apellido, numControl) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.numControl = numControl;
        this.calificaciones = {};
    }
2263 
    agregarCalificacion(materia, calificacion) {
        if (!this.calificaciones[materia]) {
            this.calificaciones[materia] = [];
        }
        this.calificaciones[materia].push(calificacion);
    }

    calcularPromedio() {
        let total = 0;
        let count = 0;
        for (let materia in this.calificaciones) {
            for (let calificacion of this.calificaciones[materia]) {
                total += parseFloat(calificacion);
                count++;
            }
        }
        return count ? total / count : 0;
    }
}

class Docente {
    constructor(nombre, materia) {
        this.nombre = nombre;
        this.materia = materia;
    }
}
function general() {
    let alumnos = [];
    let docentes = [];

    let numAlumnos = prompt("N° alumnos:");
    for (let i = 0; i < numAlumnos; i++) {
        let nombre = prompt(`Nombre alumno ${i + 1}:`);
        let apellido = prompt("Apellido:");
        let numControl = prompt("Numero de control:");
        let alumno = new Alumno(nombre, apellido, numControl);
        alumnos.push(alumno);
    }

    let numDocentes = prompt("N° docentes:");
    for (let i = 0; i < numDocentes; i++) {
        let nombre = prompt(`Nombre docente ${i + 1}:`);
        let materia = prompt("Materia:");
        let docente = new Docente(nombre, materia);
        docentes.push(docente);
    }

    for (let alumno of alumnos) {
        for (let docente of docentes) {
            for (let j = 0; j < 2; j++) {
                let calificacion = prompt(`Ingrese la calificacion para ${alumno.nombre} ${alumno.apellido} por ${docente.nombre}:`);
                alumno.agregarCalificacion(docente.materia, calificacion);
            }
        }
    }

    console.log("Resultados por alumno:");
    for (let alumno of alumnos) {
        console.log(`\nAlumno: ${alumno.nombre} ${alumno.apellido} (No. Control: ${alumno.numControl})`);
        for (let materia in alumno.calificaciones) {
            console.log(`Materia: ${materia}`);
            for (let calificacion of alumno.calificaciones[materia]) {
                console.log(` - Calificacion: ${calificacion}`);
            }
        }
        console.log(`Promedio: ${alumno.calcularPromedio().toFixed(2)}`);
    }
}

general();
