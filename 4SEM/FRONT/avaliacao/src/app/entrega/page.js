'use client'

import Pagina from "@/app/components/Pagina";
import Link from "next/link";
import { Table } from "react-bootstrap";
import { FaTrashAlt } from "react-icons/fa";
import { FaPen } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import { useEffect, useState } from "react";

export default function Page() {
    const [entrega, setEntrega] = useState([]);

    useEffect(() => {
        setEntrega(JSON.parse(localStorage.getItem('entrega')) || []);
    }, []);

    function excluir(id) {
        if (confirm('Deseja realmente excluir?')) {
            const dados = entrega.filter(item => item.id !== id);
            localStorage.setItem('entrega', JSON.stringify(dados));
            setEntrega(dados);
        }
    }

    return (
        <div className="page-container">
                <Pagina titulo="Entregas - Pacotes para Entrega">
                    <div className="d-flex justify-content-start mb-3">
                        <Link href="/entrega/form" className="btn btn-danger me-2">
                            <FaPlus /> Adicionar pacote
                        </Link>
                    </div>

                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Número</th>
                                <th>Produto</th>
                                <th>Cliente</th>
                                <th>Preço</th>
                                <th>Peso</th>
                                <th>Tamanho</th>
                            </tr>
                        </thead>
                        <tbody>
                            {entrega.map((item, index) => (
                                <tr key={item.id}>
                                    <td>
                                        <Link href={`/entrega/form/${item.id}`}>
                                            <FaPen title='Editar' className="ms-2 me-2 text-primary" />
                                        </Link>
                                        <FaTrashAlt
                                            title='Excluir'
                                            className="text-danger"
                                            onClick={() => excluir(item.id)} 
                                        />
                                    </td>
                                    <td>{item.id}</td>
                                    <td>{item.produto}</td>
                                    <td>{item.cliente}</td>
                                    <td>{item.preco}</td>
                                    <td>{item.peso}</td>
                                    <td>{item.tamanho}</td>
                                    
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </Pagina>
                <footer className="footer">
                <p>© 2024 Minha Empresa - Todos os direitos reservados.</p>
                <ul className="rodape__lista">
                    <li className="lista__link">
                        <a href="#">Idioma</a>
                    </li>
                    <li className="lista__link">
                        <a href="#">Dispositivos Compatíveis</a>
                    </li>
                    <li className="lista__link">
                        <a href="#">Contrato de Assinatura</a>
                    </li>
                    <li className="lista__link">
                        <a href="#">Política de privacidade</a>
                    </li>
                    <li className="lista__link">
                        <a href="#">Proteção de dados no Brasil</a>
                    </li>
                    <li className="lista__link">
                        <a href="#">Anuncios Personalizados</a>
                    </li>
                    <li className="lista__link">
                        <a href="#">Ajuda</a>
                    </li>
                </ul>
                <p className="rodape__texto">® 2024 nJsoft, nJsoft+ e nJsoft security. Todos os direitos reservados. Serviço de assinatura paga. Conteúdo sujeito a disponibilidade.</p>
                <p className="rodape__texto">nJsoft+ é um serviço pago, baseado em assinatura e sujeito a termos e condições. O serviço nJsoft+ é comercializado por Lucas Nóbrega Rodrigues, Ceilândia, X000, Brasília - DF, 00000000, Brasil e CNPJ xx.xxx.xxx/xxxx-xx</p>
            </footer>

            <style jsx>{`
                .page-container {
                    display: flex;
                    flex-direction: column;
                    min-height: 100vh;
                }
                .fixed-table {
                    height: 200px;
                    display: block;
                }
                .fixed-table tbody {
                    height: 150px;
                    display: block;
                    overflow-y: auto;
                }
                .footer {
                    margin-top: auto;
                    text-align: center;
                    padding: 10px;
                    background-color: #f8f9fa;
                    border-top: 1px solid #ddd;




                    .rodape {
                    bottom: 0;
                    left: 0;
                    width: 100%;
                    background-color: #000;
                    color: white;
                    text-align: center;
                    padding: 3em 2em;
                    z-index: 1000;
                }

                .rodape__lista {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    list-style-type: none;
                    padding: 0;
                    margin: 0;
                    margin-bottom: 1em;
                }

                .lista__link a {
                    text-decoration: none;
                    color: black;
                    margin: 0 1em;
                    transition: color 0.3s;
                }

                .lista__link a:hover {
                    color: var(--botao-azul, #1e90ff); /* Cor ao passar o mouse */
                }

                .lista__link a:active {
                    color: purple; /* Cor ao clicar */
                }

                .rodape__texto {
                    font-size: 14px;
                    margin: 0.5em 0;
                }

                }
            `}</style>
    </div>
    );
}
