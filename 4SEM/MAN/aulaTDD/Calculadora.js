class Calculadora {
    // criando classe Calculadora: 

    #resultado;
    // Declarando a propriedade que armazenará o resultado

    constructor() {
        this.#resultado = 0;
        // Inicializando o resultado com 0
    }

    get resultado() {
        return this.#resultado;
        // Usando método get para acessar o valor do resultado
    }

    set resultado(numero) {
        // Usando método set para definir o valor do resultado
        if (typeof numero === 'string') {
            numero = Number(numero);
            // Convertendo o valor de string para número, se precisar
        }
        if (isNaN(numero)) {
            throw new TypeError("O argumento deve ser um número válido");
            // Informando erro se a conversão falhar (if anterior)
        }
        this.#resultado = numero;
        // Definindo o resultado com o valor validado
    }

    soma(valor) {
        this.#resultado += this.#convertToNumber(valor);
        // Adicionando o valor convertido ao resultado
    }

    subtracao(valor) {
        this.#resultado -= this.#convertToNumber(valor);
        // Subtraindo o valor convertido do resultado
    }

    multiplicacao(valor) {
        this.#resultado *= this.#convertToNumber(valor);
        // Multiplicando o resultado pelo valor convertido
    }

    divisao(valor) {
        const numero = this.#convertToNumber(valor);
        // Convertendo o valor para número
        if (numero === 0) {
            throw new Error("Divisão ilegal por zero");
            // Lançando erro se o divisor for zero
        }
        this.#resultado /= numero;
        // Dividindo o resultado pelo número convertido
    }

    inversao() {
        this.#resultado = -this.#resultado;
        // Invertendo o sinal do resultado

    }

    #convertToNumber(valor) {
        if (typeof valor === 'string') {
            valor = Number(valor);
            // Convertendo string para número
        }
        if (isNaN(valor)) {
            throw new TypeError("O argumento deve ser um número válido");
            // Lançando erro se a conversão falhar
        }
        return valor;
        // Retornando o valor convertido
    }
}

module.exports = Calculadora; 
// Exporta a classe para que possa ser usada em outros arquivos
