/* /* const array=["axl","mario","natyely"]


array.pop()
console.log(array)  
const persona={
nombre:"axl",
edad: 56,
comidafavorita:"pollo"
}

for(let loco in persona){

    
    console.log(loco,persona[loco])
    
} */

/* combinados=[{
    nombre:"axl",
    edad:18,
    comidafavorita:"spaguetti"
},
{nombre:"natyely",
    edad:18,
    comidafavorita:"mole"
},
{
    nombre:"maria",
    edad:18,
    comidafavorita:"mole"
}]


console.log(combinados)

 */
/* combinados = {
    nombre: "axl",
    edad: 18,
    comidafavorita: "spaguetti",
    idiomas: {
        nativo: "espa;ol",
        extranjero: {
            ingles: "avanzado",
            frances: "intermedio",
            aleman: "bajo"
        }


    }
};
console.log(combinados)


 */
/* for(let loco in combinados){

    console.log(loco,combinados)

} */
/* //for each

/combinados.forEach(persona => {
    console.log(`Nombre: ${persona.nombre}`);
    console.log(`Edad: ${persona.edad}`);
    console.log(`Comida favorita: ${persona.comidafavorita}`);
    console.log('------------------------');
});  */

/* for (let i in combinados) {
    const persona = combinados[i];
    for (let propiedad in persona) {
        console.log(`${propiedad}: ${persona[propiedad]}`);
    }
    console.log('------------------------');
} */
//objeto con array
/* const lupillo={
    nombre: "axl",
    arr: ["abeja","banana","perro"]
}
lupillo.arr.forEach(elementO => {
    console.log(elementO+"jajaja")

});
console.log("fin del ciclo") */

//ciclos anidados
/* for(let i=0; i<= 2; i++){
    console.log(`empieza iteracion ${i}`)
for(let j=0; j<= 4; j++){
    console.log(j)
}
} */

//while

/* let x=1;
while( x <= 4 ){
    console.log(`iteracion ${x}`);
    x++;
} */

//do while
/* 
let y = 1;
do{
console.log(`iteraccion ${y}`)
y++;
}while(y<=4); */


//constructores de objetos
/* let disco1 ={
    artista:"RADIOHEAD",
    ALBUM:"KID",
    YEAR:2000,
}

let disco2 ={
    artista:"RADIOHEAD2",
    ALBUM:"KID2",
    YEAR:2080,
}
function Disco(ARTIST,ALBUM,YEAR){
    this.ARTIST = ARTIST,
    this.ALBUM = ALBUM,
    this.YEAR = YEAR
}

let disco3 = new Disco('beach','bloom',2012)
    console.log(disco3)
    let disco4 = new Disco('beach3','bloom3',20123)
    console.log(disco4)


    
   // Definición de la clase Persona
class Persona {
    constructor(nombre, edad) {
      this.nombre = nombre;
      this.edad = edad;
    }
  
    saludar() {
      console.log(`Hola, me llamo ${this.nombre} y tengo ${this.edad} años.`);
    }
  }
  
  // Crear una instancia de Persona
  const persona1 = new Persona('Juan', 30);
  persona1.saludar(); // Imprime: Hola, me llamo Juan y tengo 30 años.
   */
/* 
  class Player{
    constructor(nombre,colorsombrero){
        this._nombre = nombre,
        this._colorsombrero = colorsombrero;
    }
    saltar(){}
    correr(){}
    saludar(){
        return `HOLA SOY ${this._nombre} y mi sombrero es ${this.colorsombrero}`;
    }
  }
  let player1 = new Player ('MARIO','ROJO')
  let player2 = new Player ('LUIGI','VERDE')
  console.log(player1)

 */