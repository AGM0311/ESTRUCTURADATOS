/*/Realizar un arreglo con dos dimensiones
y guardar dos arreglos internos y dar lectura a los datos
internos*/

//for of
/*const tarea = [[2,4,5],[5,6,7]];

for (const valor of tarea.flat()){
    console.log(valor);
}*/

//for in
const tarea1 = [[4,7,5],[9,8,7]]

for (let i in tarea1){
    let arregloint = tarea1[i]
    for (let j in arregloint){
        let valor = arregloint[j]
        //console.log(`elemento en [${i}][${j}] = ${valor} `);
        console.log(valor);
    }
}

//for each

//funcion flecha

//while