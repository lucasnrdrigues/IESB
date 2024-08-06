/* Escreva um programa que leia 10 números. Para cada número lido, verifique e codifique de
acordo com as regras a seguir:
a. Se o número for par, empilhe na pilha chamada par;
b. Se o número for ímpar, empilhe na pilha chamada impar;
c. Se o número for zero (0), desempilhe um elemento de cada pilha. Caso alguma pilha
esteja vazia, mostre uma mensagem de erro na tela.
d. Ao final do programa desempilhe todos os elementos das duas pilhas, imprimindo-os na
tela */

const prompt = require("prompt-sync")();

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
    const pilhaPar = new Pilha();
    const pilhaImpar = new Pilha();

    // Loop para ler 10 números
    for (let i = 0; i < 10; i++) {
        const numero = parseInt(prompt("Digite um número:"));

        if (numero % 2 === 0) {
            pilhaPar.push(numero); // Empilhar número par
        } else {
            pilhaImpar.push(numero); // Empilhar número ímpar
        }

        // Verificar se o número é zero
        if (numero === 0) {
            const desempilhadoPar = pilhaPar.pop();
            const desempilhadoImpar = pilhaImpar.pop();

            // Verificar se alguma pilha está vazia
            if (desempilhadoPar === "A pilha está vazia." || desempilhadoImpar === "A pilha está vazia.") {
                console.log("Erro: Alguma das pilhas está vazia ao desempilhar zero.");
            } else {
                console.log("Desempilhando zero - Par:", desempilhadoPar, "- Ímpar:", desempilhadoImpar);
            }
        }
    }

    // Desempilhar todos os elementos das duas pilhas e imprimir na tela
    console.log("Desempilhando todos os elementos da pilha Par:");
    while (!pilhaPar.isEmpty()) {
        console.log("Par:", pilhaPar.pop());
    }

    console.log("Desempilhando todos os elementos da pilha Ímpar:");
    while (!pilhaImpar.isEmpty()) {
        console.log("Ímpar:", pilhaImpar.pop());
    }
}

// Chamada da função principal
main();
