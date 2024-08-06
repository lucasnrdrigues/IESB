/* Crie um script que pede um inteiro positivo para o usuário. Em seguida, popule uma array
com os números de Fibonacci. Exiba o resultado usando o método join. */

const prompt = require("prompt-sync")();

let n = parseInt(prompt("Digite quantos números você quer da sequência de fibonacci: ")) 

const fibonacci = [];
fibonacci[0] = 1;
fibonacci[1] = 1;

for(let i = 2; i < n; i++){
    fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
}

console.log(fibonacci.join(" "))

/* Você pode mostrar assim também, mas não é forma de array
for(let i = 0; i < fibonacci.length; i++){
    console.log(fibonacci[i])
}
*/