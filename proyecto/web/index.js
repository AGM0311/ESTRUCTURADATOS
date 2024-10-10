const formDatos = document.getElementById("datos");
let datoArr=[]
formDatos.addEventListener("submit", (ev) => {
    ev.preventDefault()
    const nombre = document.getElementById("nombre").value;
    const edad = document.getElementById("edad").value;
    const sexo = document.getElementById("sexo").value;
    const rfc = document.getElementById("rfc").value;


    let info = { nombre: nombre, edad: edad, sexo: sexo, rfc: rfc }
    let infoJSON=JSON.stringify(info);
    //datoArr.push(info)
    console.log(datoArr);
})