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

*/

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