let numero = parseInt(prompt("Digite um número inteiro:"));
let primo = numero > 1;

for (let i = 2; i < numero; i++) {
    if (numero % i === 0) {
        primo = false;
        break;
    }
}

if (primo) {
    alert(numero + " é um número primo.");
} else {
    alert(numero + " não é um número primo.");
}