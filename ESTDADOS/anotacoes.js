//Declarando uma CLASSE(construtor) que representa um livro
//Classe - "B" maiúsculo!
function Book (title, pages, isbn){
    this.title = title;
    this.pages = pages;
    this.isbn = isbn;
}

//Para Instanciar essa classe, podemos usar o código a seguir
//Objeto - "b" minúsculo
var book = new Book ("Estrutura de dados", 406, "978 85 7522 553 0");

/* Acessando suas propiedades */

//Exibindo o título do livro
console.log(book.title);

//Atualizando o valor do título
book.title = "Estrutura de Dados e Algoritmos com JS";

//Exibe o valor atualizado
console.log(book.title);
console.log("Este livro possui: " + book.pages + " páginas.");




/* Uma classe também pode conter funções (métodos)
▪ Podemos declarar e usar uma função/método:

✓ No exemplo com prototype, a função
printTitle será compartilhada entre todas as
instâncias, e somente uma cópia será criada.
✓ Quando usamos, uma definição baseada em
classe, como no exemplo, cada instância terá
a sua própria cópia das funções.
✓ O uso do método prototype economiza
memória e processamento quando se
atribuir funções à instância.
✓ Você só pode declarar funções e
propriedades public usando o método
prototype.
✓ Função é Público é porque ela está fora e estamos usando o método prototype.

*/

function Book(title, pages, isbn){
    this.title = title;
    this.pages = pages;
    this.isbn = isbn;
}

//Para instanciar essa classe, podemos usar o código a seguir
var book = new Book("Estrutura de Dados", 406, "978 85 7522 553 0");

//Podemos declarar e usar uma função/método, veja:
Book.prototype.printTitle = function(){         //printTitle é só o nome da função!!
    console.log(this.title);
};
book.printTitle();








/* Também podemos declarar funções diretamente na definição da classe */

/*Com uma definição baseada em
classe, você pode declarar funções e
propriedades private, e os outros
métodos da classe também poderão
acessá-las. 

✓ Como a função está dentro da classe, ela é privada*/

function Book (title, pages, isbn){
    this.title = title;
    this.pages = pages;
    this.isbn = isbn;
    this.printIsbn = function(){         //printIsbn é só o nome da função!!
        console.log("ISBN: " + this.isbn);
    }
}

//Para instanciar essa classe, podemos usar o código a seguir
var book = new Book("Estrutura de dados", 406, "978 85 7522 553 0")

//Executando a propiedade função da classe
book.printIsbn();