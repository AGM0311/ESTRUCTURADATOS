const prompt = require("prompt-sync")();

class Alumno {
    constructor(nombre, apellido, numControl) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.numControl = numControl;
        this.calificaciones = {};
    }

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