/* Faça o mesmo do exercício anterior, mas com fatorial.
Fatorial de 0: 0! = '
Fatorial de 1: 1 x elemento0 = 1
Fatorial de 2: 2 x elemento1 = 2
Fatorial de 3: 3 x elemento2 = 3 x 2 = 6 */

const prompt = require("prompt-sync")();

let numero = parseInt(prompt("Digite um número: "))

/* function fatorial(n){
    let fat = 1 
    for(let c = n; c > 1; c--){
            fat *= c
        }
       return fat
    }
*/

//Fazendo fatorial usando recursividade(chamando a função dentro dela mesma)
function fatorial(n){
    if (n == 1){
        return 1
    } else {
        return n * fatorial(n - 1)
     }
}

console.log(fatorial(numero))