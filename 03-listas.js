// crear una lista con diferentes tipos de datos
let datos = [ {NOMBRE: "AXL", APELLIDOS: "GAMAS", EDAD: 35, ESTUDIANTE: false },
    {NOMBRE: "MARIO", APELLIDOS: "CAMARA", EDAD: 35, ESTUDIANTE: true}];

const info = () => {
/*     for(let arr in array){
        console.log(array[arr]);
    }
} */
    /* for (let lis in datos) {
        console.log(`${lis}:${datos[lis]}`)
    } */
/* let valores=Object.values(datos);
valores.map((data,index)=> {
    console.log(`:${data}`);
}); */

 let valores = Object.values(datos)
for ( valor of valores){
    console.log(valor);

} 
/*     Object.entries(datos).forEach(([key,value])=>{
    console.log(` ${key} :${value}`);
}
)
 */
};

info();
