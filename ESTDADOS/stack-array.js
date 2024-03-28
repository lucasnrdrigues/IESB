class Stack {
    constructor(){
        this.items = [];
    }

    push(element){
        //adiciona um novo item à pilha
        this.items.push(element);
    }

    pop(){
        //remove o item do topo da pilha
        return this.items.pop();
    }

    peek(){
        //devolve o elemento que está no topo da pilha
        return this.items[this.items.length - 1];
    }

    isEmpty(){
        //informa se a pilha está vazia ou cheia
        return this.items.length === 0;
    }

    clear(){
        //limpa a pilha
        this.items = []
    }

    size(){
        //informa o tamanho da pilha
        return this.items.length;
    }

    print(){
        //imprime a pilha no console
        console.log(this.items.toString()) // Nos slides do prof nâo tinha o "this"

    }
}


//Criando (instancia) um objeto stack(pilha)
const stack = new Stack()

//Verificando se a pilha stack está vazia
console.log(stack.isEmpty()); //exibe true or false

//Adicionando elementos no topo da pilha
stack.push(5)
stack.push(8)

//Exibindo o elemento do topo da pilha
console.log(stack.peek()); 

//Vamos adicionar outro elemento na pilha
stack.push(11);

// Exibindo o tamanho da pilha
console.log(stack.size());

//Verificando se a pilha está vazia
console.log(stack.isEmpty());

//Por fim, vamos acrescentar outro elemento
stack.push(15);

// Mostrando todos os elementos da pilha
stack.print()

//Retirando dois elementos do topo da pilha
stack.pop();
stack.pop();
stack.print();


//EMPILHANDO E DESEMPILHANDO ELEMENTOS
var pilha = new Stack();
pilha.print(pilha.isEmpty());
//Empilhando
pilha.push(5);
pilha.print();
pilha.push(8);
pilha.print();
pilha.push(11);
pilha.print();
pilha.push(15);
pilha.print();

//Desempilhando
pilha.pop();
pilha.print();
pilha.pop();
pilha.print();
pilha.pop();
pilha.print();
pilha.pop();
pilha.print();

console.log(pilha.isEmpty());
