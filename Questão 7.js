let n = parseInt(prompt("Digite um número inteiro N para calcular o fatorial:"));
let fatorial = 1;

for (let i = n; i > 1; i--) {
    fatorial *= i;
}

alert("O fatorial de " + n + " é: " + fatorial);