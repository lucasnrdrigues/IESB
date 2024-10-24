import express from 'express';
import contatos from './data/contatos.mjs'
const app = express();

//INSTALAR THUNDER CLIENT NAS EXTENSÕES

//Middleware
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Olá, mundo!');
});

//GET: /contatos - LISTANDO OS CONTATOS
app.get("/contatos", (req, res) => {
    res.status(200).json({
        error: false,
        contatos: contatos
    });
});

//GET: /contatos/:id - PUXANDO UM CONTATO PELO ID
app.get("/contatos/:id", (req, res) => {
    const id = req.params.id
    const sit = req.params.sit
    console.log(id, sit);
    const contato = contatos.find((contato) => contato.id == id);
    if(!contatos){
        return res.status(404).json({
            mensagem: "Contato não encontrado"
        });
    }
    return res.json({
        id: id,
        nome: contato.nome
    });
});

//POST: /contatos - CRIANDO UM CONTATO
app.post("/contatos", (req, res) => {
    const contato = req.body;
    if(!contato || !contato.nome || !contato.genero 
        || !contato.telefone || !contato.email){
        return res.status(400).json({
            mensagem: "Dados inválidos"
        });
    }
    //Se não
    contato.id = contatos[contatos.length - 1].id + 1;
    contatos.push(contato);
    res.status(201).json({
        mensagem: "Contato criado com sucesso",
        contato: contato
    });
});

//PUT - /contatos/:id - EDITANDO UM CONTATO
app.put("/contatos/:id", (req, res) => {
    const id = req.params.id
    const contato = req.body;
    if(!contato || !contato.nome || !contato.genero 
        || !contato.telefone || !contato.email){
        return res.status(400).json({
            mensagem: "Dados inválidos"
        });
    }

    contato.id = id;
    const index = contatos.findIndex((contato) => contato.id == id);
    if(index < 0) {
        return res.status(404).json({
            mensagem: "Contato não encontrado!"
        })
    }

    contatos[index] = contato;
    res.json({
        mensagem: "Contato atualizado com sucesso",
        contato: contato
    });

});

//DEL - /contatos/:id - DELETANDO UM CONTATO
app.delete("contaos/:id", (req, res) => {
    const id = req.params.id;
    const index = contatos.findIndex((contato) => contato.id == id);
    if(index < 0) {
        return res.status(404).json({
            mensagem: "Contato não encontrado!"
        });
    }

    contatos.splice(index, 1);
    res.json({
        mensagem: "Contato removido com sucesso!"
    });
});

//Configurando o servidor para atuar na porta 3000
app.listen(3000, () => {
    console.log('Servidor iniciando na porta 3000!')
});

//Execute o comando node --watch server.mjs 