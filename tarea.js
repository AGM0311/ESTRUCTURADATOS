/*/Realizar un arreglo con dos dimensiones
y guardar dos arreglos internos y dar lectura a los datos
internos*/

//for of
/*const tarea = [[2,4,5],[5,6,7]];

for (const valor of tarea.flat()){
    console.log(valor);
}

//for in
/*const tarea1 = [[4,7,5],[9,8,7]]

for (let i in tarea1){
    let arregloint = tarea1[i]
    for (let j in arregloint){
        let valor = arregloint[j]
        //console.log(`elemento en [${i}][${j}] = ${valor} `);
        console.log(valor);
    }
}*/

//for each
const tarea2 = [[1,6,9],[3,6,4]];

tarea2.forEach(function(array){ 
    array.forEach(function(estruct) {
        console.log(estruct);
    })
    
})

//funcion flecha
/*const tarea3 = [[1,3,5],[8,6,3]]

const leer = (array) => {
    console.log(array.flat().join(','))
}
leer(tarea3)*/

//while
/*
const tar3 = [[3,4,5],[4,5,2]]
const leerda = (array) => {

    let i = 0

    while(i < array.length){
    
    let j = 0

    while(j < array[i].length){
        
        console.log(array[i][j])
        
        j++
    }

    i++
}
}
leerda(tar3)

/*Hay que quitar las diagonales dependiendo de lo que
necesites ejecutar*/