let n = parseInt(prompt("Digite um número inteiro N:"));
let primos Encontrados = [];

for (let i = 2; i <= n; i++) {
    let ePrimo = true;
    for (let j = 2; j < i; j++) {
        if (i % j === 0) {
            ePrimo = false;
            break;
        }
    }
    if (ePrimo) {
        primosEncontrados.push(i);
    }
}

alert("Números primos entre 1 e " + n + ": " + primosEncontrados.join(", "));