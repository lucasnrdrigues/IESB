/* Peça ao usuário uma quantidade de linhas e outra de colunas, depois declare tal matriz,
inicialize todos os elementos de 1 até 'linha x coluna'. Para preencher cada elemento use a
soma dos seus índices. */

const prompt = require("prompt-sync")();

// Função para criar a matriz
function criarMatriz(linhas, colunas) {
    // Declarando a matriz
    const matriz = new Array(linhas);
    for (let i = 0; i < linhas; i++) {
      matriz[i] = new Array(colunas);
    }
  
    // Preenchendo a matriz
    for (let i = 0; i < linhas; i++) {
      for (let j = 0; j < colunas; j++) {
        matriz[i][j] = i + j + 1;
      }
    }
  
    return matriz;
  }
  
  // Pedindo as informações ao usuário
  const linhas = parseInt(prompt("Digite a quantidade de linhas: "));
  const colunas = parseInt(prompt("Digite a quantidade de colunas: "));
  
  // Criando a matriz
  const matriz = criarMatriz(linhas, colunas);
  
  // Mostrando a matriz
  console.log("Matriz:");
  for (let i = 0; i < linhas; i++) {
    console.log(matriz[i].join(" "));
  }