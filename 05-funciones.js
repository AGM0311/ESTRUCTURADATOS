/* //funcion factorial
/* const Persona={
    nombre: "axl",
    edad: "18"
}
const Persona2={
    nombre: "mario",
    edad: "19"
}
 
function datospersona(nombre,edad){
    return{
        nombre,
        edad,
        active:true
    }
}

let persona1=datospersona("axl",18)

let persona2=datospersona("Mario",19)
//console.log(persona1,persona2)
//camel case
const datosUsuario={
    nombre:"axl",
    edad: "34",
    password:"21221212",
    direccion:{
       colonia: "el carmen",
       callle: "principal",
       numext: 123
    },
    sueldo:234.78,
    guardarUsuario:function(){
    console.log("guardar ususario")
    }
} 
datosUsuario.guardarUsuario()*/
 const user={id:1}
 user.nombre="axl";
 user.guardarUser=function(){
    console.log("guardando user...");
 }
/*  console.log(user);
 
 user.guardarUser() */
 
 //objetos definidos
 //const Person=Object.freeze({id:1,nombre:"axl"});
 const Person=Object.seal({id:1,nombre:"axl"});
 Person.id=2
 Person.edad=23,
 Person.nombre="juan"
 //console.log(Person)
 //pasar funciones como parametro
 function pitbull(nombre){
 this._nombre=nombre;
 }
function Animal(Fn,argumento){
    return new Fn(argumento)
}
let animal1=Animal(pitbull,"mario")
console.log(animal1);