let temp = parseFloat(prompt("Digite a temperatura:"));
let tipo = prompt("Para qual unidade deseja converter? Digite C para Celsius ou F para Fahrenheit:").toUpperCase();

if (tipo === "C") {
    let resultado = (temp - 32) * 5 / 9;
    alert("Resultado: " + resultado + "°C");
} else if (tipo === "F") {
    let resultado = (temp * 9 / 5) + 32;
    alert("Resultado: " + resultado + "°F");
} else {
    alert("Opção inválida.");
}