const prompt = require("prompt-sync")();
const n = parseInt(prompt("Ingrese cuántas veces quiere que se repita la secuencia: "));

// Recursividad
function fibo(n) {
    return n < 2 ? n : fibo(n - 1) + fibo(n - 2);
}

function secuencia(n) {
    for (let i = 0; i < n; i++) {
        console.log(fibo(i));
    }
}

secuencia(n);

