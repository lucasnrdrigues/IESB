/* Faça uma função para converter um número decimal em hexadecimal. */

const prompt = require("prompt-sync")();

// Função para converter decimal em hexadecimal
function decimalToHex(decimal) {
    return decimal.toString(16).toUpperCase(); // Converte para hexadecimal e transforma em maiúsculo
}

// Função principal para pedir um número ao usuário e converter para hexadecimal
function converterParaHexadecimal() {
    // Pedir ao usuário um número decimal
    var numeroDecimal = parseInt(prompt("Digite um número decimal:"));

    // Verificar se o número digitado é válido
    if (isNaN(numeroDecimal)) {
        console.log("Por favor, digite um número válido.");
        return;
    }

    // Converter o número decimal para hexadecimal
    var hexadecimal = decimalToHex(numeroDecimal);

    // Mostrar o resultado ao usuário
    console.log("O número " + numeroDecimal + " em hexadecimal é: " + hexadecimal);
}

// Chamar a função principal
converterParaHexadecimal();
