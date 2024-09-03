//funcion factorial
const Persona={
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
console.log(persona1,persona2)