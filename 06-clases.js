//definir clases con atrubutos dentro del constructor
class persona{
    constructor(nombre,edad,sexo,direccion){
        this.nombre=nombre;
        this.edad=edad;
        this.sexo=sexo;
        this.direccion=direccion;
    }
    saludar(){
        console.log(`hola ${this.nombre}`)
    }


get nombre(){
    return this._nombre
}
set nombre(values){
    this._nombre=values;
}

}

persona1 =new persona("mario",18,"m","casita")

console.log(persona1._nombre)
//persona1.saludar()