const Calculadora = require('./Calculadora'); 
// Importa a classe Calculadora


describe("Funções de calculadora", () => {
    it('Criar nova calculadora', () => {
        const calculadora = new Calculadora();
        // Criando uma nova instância da calculadora
        expect(calculadora).toBeDefined();
        // Verificando se a calculadora foi criada
        expect(calculadora.resultado).toBeDefined();
        // Verificando se o resultado está definido
        expect(typeof calculadora.resultado).toBe("number");
        // Verificando se o tipo de dado do resultado é number
        expect(calculadora.resultado).toBe(0);
        // Verificando se o valor inicial do resultado é 0
    });

    it('Obter resultado', () => {
        const calculadora = new Calculadora();
        // Criando uma nova instância da calculadora
        expect(calculadora.resultado).toBeDefined();
        // Verificando se o resultado está definido
        expect(typeof calculadora.resultado).toBe("number");
        // Verificando se o tipo do resultado é number
    });

    it('Atribuir um novo valor à calculadora', () => {
        const calculadora = new Calculadora();
        // Criando uma nova instância da calculadora
        expect(() => calculadora.resultado = "Texto").toThrow(TypeError);
        // Lançando erro se tiver erro ao atribuir texto
        expect(() => calculadora.resultado = "Texto").toThrow("O argumento deve ser um número válido");
        // Verificando a mensagem do erro
        expect(calculadora.resultado).toBe(0);
        // Verificando se o resultado permanece 0 após erro
        expect(() => calculadora.resultado = "5").not.toThrow(TypeError);
        // Verificando se não houve erro ao atribuir uma string numérica
        expect(calculadora.resultado).toBe(5);
        // Verificando se o resultado foi atualizado para 5
    });

    // Teste de soma
    it('Somando valores', () => {
        const calculadora = new Calculadora();
        // Criando uma nova instância da calculadora
        calculadora.soma(5);
        // Adicionando 5 ao resultado
        expect(calculadora.resultado).toBe(5);
        // Verificando se o resultado é 5
        calculadora.soma("10");
        // Adicionando 10 ao resultado (a string é convertida para número)
        expect(calculadora.resultado).toBe(15);
        // Verificando se o resultado é 15
        calculadora.soma(-5);
        // Adicionando -5 ao resultado
        expect(calculadora.resultado).toBe(10);
        // Verificando se o resultado é 10
        expect(() => calculadora.soma("Texto")).toThrow(TypeError);
        // Verificando se há erro ao tentar somar texto
    });

    // Teste de subtração
    it('Subtraindo valores', () => {
        const calculadora = new Calculadora();
        // Criando uma nova instância da calculadora
        calculadora.subtracao(3);
        // Subtraindo 3 do resultado
        expect(calculadora.resultado).toBe(-3);
        // Verificando se o resultado é -3
        calculadora.subtracao("2");
        // Subtraindo 2 do resultado (a string é convertida para número)
        expect(calculadora.resultado).toBe(-5);
        // Verificando se o resultado é -5
        calculadora.subtracao(-1);
        // Subtraindo -1 do resultado
        expect(calculadora.resultado).toBe(-4);
        // Verificando se o resultado é -4
        expect(() => calculadora.subtracao("Texto")).toThrow(TypeError);
        // Verificando se há erro ao tentar subtrair texto
    });

    // Teste de multiplicação
    it('Multiplicando valores', () => {
        const calculadora = new Calculadora();
        // Criando uma nova instância da calculadora
        calculadora.multiplicacao(4);
        // Multiplicando o resultado (inicializado em 0) por 4
        expect(calculadora.resultado).toBe(0);
        // Verificando se o resultado é 0
        calculadora.resultado = 2;
        // Definindo o resultado inicial como 2
        calculadora.multiplicacao(3);
        // Multiplicando o resultado por 3
        expect(calculadora.resultado).toBe(6);
        // Verificando se o resultado é 6
        calculadora.multiplicacao("2");
        // Multiplicando o resultado por 2 (a string é convertida para número)
        expect(calculadora.resultado).toBe(12);
        // Verificando se o resultado é 12
        expect(() => calculadora.multiplicacao("Texto")).toThrow(TypeError);
        // Verificando se há erro ao tentar multiplicar texto
    });

    // Teste de divisão
    it('Dividindo valores', () => {
        const calculadora = new Calculadora();
        // Criando uma nova instância da calculadora
        calculadora.resultado = 10;
        // Definindo o resultado inicial como 10
        calculadora.divisao(2);
        // Dividindo o resultado por 2
        expect(calculadora.resultado).toBe(5);
        // Verificando se o resultado é 5
        calculadora.divisao("5");
        // Dividindo o resultado por 5 (a string é convertida para número)
        expect(calculadora.resultado).toBe(1);
        // Verificando se o resultado é 1
        expect(() => calculadora.divisao(0)).toThrow(Error);
        // Verificando se há erro ao tentar dividir por zero
        expect(() => calculadora.divisao("Texto")).toThrow(TypeError);
        // Verificando se há erro ao tentar dividir por texto
    });

    // Teste de inversão
    it('Invertendo sinal do resultado', () => {
        const calculadora = new Calculadora();
        // Criando uma nova instância da calculadora
        calculadora.resultado = 10;
        // Definindo o resultado inicial como 10
        calculadora.inversao();
        // Invertendo o sinal do resultado
        expect(calculadora.resultado).toBe(-10);
        // Verificando se o resultado é -10
        calculadora.inversao();
        // Invertendo o sinal novamente
        expect(calculadora.resultado).toBe(10);
        // Verificando se o resultado é 10 novamente
    });
});

/*

Sendo assim:
A classe Calculadora define uma calculadora com operações básicas e um método para converter valores
para números

Métodos usados:
soma, subtracao, multiplicacao, divisao, e inversao, para manipular o valor do resultado.
#convertToNumber é usado para garantir que valores sejam números válidos.

Testes:
Os testes verificam se a calculadora é criada corretamente. Também validam se as operações de soma, subtração, 
multiplicação, divisão e inversão funcionam como esperado. E testam o comportamento da calculadora com
diferentes tipos de entrada e garantem que erros sejam lançados.

*/