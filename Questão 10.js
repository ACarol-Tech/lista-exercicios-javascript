let soma = 0;
let contador = 0;
let maior = null;
let menor = null;

while (true) {
    let numero = parseInt(prompt("Digite um número inteiro (ou 0 para parar):"));
    
    if (numero === 0) {
        break;
    }
    
    soma += numero;
    
    if (contador === 0) {
        maior = numero;
        menor = numero;
    } else {
        if (numero > maior) maior = numero;
        if (numero < menor) menor = numero;
    }
    
    contador++;
}

if (contador > 0) {
    let media = soma / contador;
    let mensagem = "Soma: " + soma + "\nMédia: " + media + "\nMaior: " + maior + "\nMenor: " + menor;
    alert(mensagem);
    console.log(mensagem);
} else {
    alert("Nenhum número válido foi digitado.");
}