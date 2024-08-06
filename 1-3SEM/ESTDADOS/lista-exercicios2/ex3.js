/* Crie um script que pergunte 3 números ao usuário, coloque em um array, depois exiba tal
array. Modifique os elementos do array de modo a a sequência de números ficar do contrário.
Ou seja, se digitou: 1,2,3
Vai aparecer: 3,2,1 */

const prompt = require("prompt-sync")();

let numeros = []
for(let i = 0; i < 3; i++){
    let numero = parseFloat(prompt(`Digite o ${i + 1} o. número: `))
    numeros.push(numero)
}

function inverte(array){
    let tamanho = array.length

    for(let i = 0; i < Math.floor(tamanho/2); i++){
        let temp = array[i]
        array[i] = array[tamanho - 1 - i]; //Menos 1 é pq o índice começa no 0
        array[tamanho - 1 - i] = temp;
    }

    return array //NUNCA se esqueça disso!
}

console.log(inverte(numeros))
