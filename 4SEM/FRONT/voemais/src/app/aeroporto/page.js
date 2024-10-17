'use client'

//NESSA USAMOS PUXANDO OS DADOS DA API

import Link from "next/link"
import { useEffect, useState } from "react";
import { Table } from "react-bootstrap"
import { FaPlusCircle } from "react-icons/fa";
import { FaRegEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import Pagina from "../components/Pagina";


export default function Page() {

    const [aeroportos, setAeroportos] = useState([])

    useEffect(() => {
        setAeroportos(JSON.parse(localStorage.getItem('aeroporto')) || [])
    }, [])

    function excluir(id) {
        if (confirm('Deseja realmente excluir o registro?')) {
            const dados = aeroportos.filter(item => item.id != id)
            localStorage.setItem('aeroporto', JSON.stringify(dados))
            setAeroportos(dados)
        }
    }

    return (
        <Pagina titulo="Aeroporto">

            <Link
                href="/aeroporto/form"
                className="btn btn-primary mb-3"
            >
                <FaPlusCircle /> Novo
            </Link>

            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Nome</th>
                        <th>Sigla</th>
                        <th>País</th>
                        <th>Uf</th>
                        <th>Cidade</th>
                    </tr>
                </thead>
                <tbody>
                    {aeroportos.map((item, i) => (
                        <tr key={item.id}>
                            <td>
                                <Link href={`/aeroporto/form/${item.id}`}>
                                    <FaRegEdit title="Editar" className="text-primary" />
                                </Link>
                                <MdDelete
                                    title="Excluir"
                                    className="text-danger"
                                    onClick={() => excluir(item.id)}
                                />
                            </td>
                            <td>{item.nome}</td>
                            <td>{item.sigla}</td>
                            <td>{item.pais}</td>
                            <td>{item.uf}</td>
                            <td>{item.cidade}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </Pagina>
    )
}