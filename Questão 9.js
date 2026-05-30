let maiores = 0;
let menores = 0;

while (true) {
    let nome = prompt("Digite o nome da pessoa (ou deixe em branco para sair):");
    if (!nome) {
        break;
    }
    let idade = parseInt(prompt("Digite a idade de " + nome + ":"));
    
    if (idade >= 18) {
        maiores++;
    } else {
        menores++;
    }
}

let resultado = "Maiores de idade: " + maiores + "\nMenores de idade: " + menores;
alert(resultado);
console.log(resultado);