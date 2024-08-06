/*
var averageTempDay1 = [36, 5, 28, 30, 25, 18, 40];
var averageTempDay2 = [19, 22.5, 29, 31, 23.5, 32.5];

var averageTemp = [];
averageTemp[0] = averageTempDay1;
averageTemp[1] = averageTempDay2;

function printMatrix(myMatrix){
    for(let i = 0; i < myMatrix.length; i++){
        for(let j = 0; j < myMatrix[0].length; j++){
            console.log(myMatrix[i][j])
        }
    }
}

//printMatrix(averageTemp) -> Tem como mostrar desse jeito, mas nâo vai na forma de tabela
console.table(averageTemp)



const matrix3x3x3 = []

for(var i = 0; i < 3; i++){
    matrix3x3x3[i] = []; //precisamos inicializar cada array
    for(var j = 0; j < 3; j++){
        matrix3x3x3[i][j] = [];
        for(var z = 0; z < 3; z++){
            matrix3x3x3[i][j][z] = i + j + z;
        }
    }
}

console.table(matrix3x3x3)


//MÉTODOS ARRAY
concat() - concatena

    const zero = 0
    const positiveNumbers = [1, 2, 3];
    const negativeNumbers = [-3, -2, -1];
    let numbers = negativeNumbers.concat(zero, positiveNumbers)

    console.log(numbers.join(" "))


every() - 
    function isEven(x){
        //devolve true e x for múltiplo de 2
        console.log(x);
        return (x % 2 === 0) ? true : false;
    }
    let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]

    //nesse caso, o nosso primeiro elemento do array numbers é 1
    //O número 1 não é múltiplo de 2, pois é ímpar, portanto a função isEven devolverá falso logo na leitura do primeiro elemento
    //A partir do momento em que for FALSE ele para e retorna o elemento que deu "falso"

    //OBS:  o SOME() a partir do momento que é verdadeiro ele retorna o elemento
    // numbers.some(isEven)
    numbers.every(isEven);

forEach() - retorna true ou false de acordo com a condição estabelecida
    let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
    numbers.forEach(x => console.log(x % 2 === 0));


map() - Ele junta a resposta em um array
    function isEven(x){
        //devolve true e x for múltiplo de 2
        //console.log(x)
        return (x % 2 === 0) ? true : false;
    }

    let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

    const myMap = numbers.map(isEven);
    console.log(myMap);

filter() - mostra o que você quer,  "filtra"
    function isEven(x){
    //devolve true e x for múltiplo de 2
    //console.log(x)
    return (x % 2 === 0) ? true : false;
    }

    let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

    const myMap = numbers.filter(isEven); //retorna os números pares
    console.log(myMap);

reduce() - "somátoria", ele reduz o array para um único valor
    let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
    console.log(numbers.reduce((previous, current) => previous + current));

    const soma = [1, 2, 3, 4, 5].reduce((a, b) => a + b);
    console.log(soma)

Iterando com o laço for...of
    let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

    for (const n of numbers){
        console.log(n % 2 === 0 ? n + " é par" : n + " é ímpar")
    }

*/





