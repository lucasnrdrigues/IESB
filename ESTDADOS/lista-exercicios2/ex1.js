/* Crie uma função que recebe um array de 2 números e coloque eles em ordem crescente. Não
use o método sort.*/
let lista = [7, 3]

function ordemCrescente(array){
    if(array[0] > array[1]){
        //Para fazer essa troca devemos usar uma variável a mais
        var temp = array[0];
        array[0] = array[1]
        array[1] = temp
    }
    return array
}

console.log(`Array em ordem crescente: ${ordemCrescente(lista)}`)