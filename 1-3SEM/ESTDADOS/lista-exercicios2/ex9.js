/* Escreva um programa que leia 10 números. Para cada número lido, verifique e codifique de
acordo com as regras a seguir:
a. Se o número for par, empilhe na pilha;
b. Se o número for ímpar, desempilhe um número da pilha. Caso a pilha esteja vazia,
mostre uma mensagem;
c. Se ao final do programa a pilha não estiver vazia, desempilhe todos os elementos,
imprimindo-os na tela. */

const prompt = require("prompt-sync")();

// Função para verificar se um número é par
function isPar(numero) {
    return numero % 2 === 0;
}

// Definição da classe Pilha
class Pilha {
    constructor() {
        this.items = [];
    }

    // Método para empilhar um elemento
    push(element) {
        this.items.push(element);
    }

    // Método para desempilhar um elemento
    pop() {
        if (this.isEmpty()) {
            return "A pilha está vazia.";
        }
        return this.items.pop();
    }

    // Método para verificar se a pilha está vazia
    isEmpty() {
        return this.items.length === 0;
    }

    // Método para retornar o tamanho da pilha
    size() {
        return this.items.length;
    }

    // Método para imprimir todos os elementos da pilha
    print() {
        return this.items.join(' ');
    }
}

// Função principal
function main() {
    const pilha = new Pilha();

    // Loop para ler 10 números
    for (let i = 0; i < 10; i++) {
        const numero = parseInt(prompt("Digite um número:"));

        if (isPar(numero)) {
            pilha.push(numero); // Empilhar número par
        } else {
            const desempilhado = pilha.pop(); // Desempilhar número ímpar
            if (desempilhado === "A pilha está vazia.") {
                console.log("A pilha está vazia.");
            } else {
                console.log(`Número ímpar (${numero}): ${desempilhado}`);
            }
        }
    }

    // Verificar se a pilha não está vazia e desempilhar todos os elementos
    while (!pilha.isEmpty()) {
        console.log("Desempilhando elemento:", pilha.pop());
    }
}

// Chamada da função principal
main();
