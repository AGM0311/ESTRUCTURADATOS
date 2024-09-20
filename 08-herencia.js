class Persona{
    constructor(nombre,apellidos,edad,sexo,direccion,telefono,correo,hr){
        this._nombre=nombre,
        this._apellidos=apellidos,
        this._edad=edad,
        this._sexo=sexo,
        this._direccion=direccion,
        this._telefono=telefono,
        this._correo=correo;
        this._hr=hr;
    }
}
class Alumno extends Persona {
    constructor(nombre,apellidos,hr,matricula,carrera,semestre,) {
        super(nombre,apellidos,hr);
        this._matricula=matricula,
        this._carrera=carrera,
        this._semestre=semestre;
        
    }
mensaje(){
    console.log(`soy el alumno ${this._nombre} y estudio la carrera ${this._carrera}`);
}

}
 
let alumno1 = new Alumno ("axl","gamas","10-16","8485848","sistemas","3")
 alumno1.mensaje()



//inestigar recursividad
//material icons