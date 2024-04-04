/* Crie uma função que recebe um array de 3 números e coloque eles em ordem crescente. Crie
sua própria função para isso. */
let lista = [7, 3, 2];

function ordemCrescente(array){
    for(let i = 0; i < array.length - 1; i++){
        for(let j = 0; j < array.length - 1; j++ ){
            if(array[j] > array[j + 1]){
                var temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
            }
        }
    }

    return array;
}

console.log(`Array em ordem crescente: ${ordemCrescente(lista)}`)