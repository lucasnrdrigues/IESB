'use client'

import Pagina from "@/app/components/Pagina"
import Link from "next/link"
import { useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap"
import { FaRegEdit } from "react-icons/fa";
import { IoIosAirplane } from "react-icons/io";
import { MdDelete } from "react-icons/md";

export default function Page() {

    //Para poder usar o .map em empresas, precisamos passar os dados para uma array, pois o localStorage retorna uma string
    // const empresas = JSON.parse(localStorage.getItem('empresas'))

    const [empresas, setEmpresas] = useState([])

    useEffect(() => {
        setEmpresas(JSON.parse(localStorage.getItem('empresas')) || [])
    }, [])

    function excluir(id){
        if(confirm('Deseja realmente excluir o registro?')){
            //Excluindo
            const dados = empresas.filter(item => item.id != id)

            //Agora precisamos pegar o array novo no localStorage
            localStorage.setItem('empresas', JSON.stringify(dados))
            setEmpresas(dados)
        }
    }

    return (
        <Pagina titulo="Empresas">

            <Link
                href="/empresas/create"
                className="btn btn-primary mb-3"
            >
                <IoIosAirplane />
            </Link>

            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Nome</th>
                        <th>Logo</th>
                    </tr>
                </thead>
                <tbody>
                    {empresas.map((item, i) => (
                        <tr key={item.id}>
                            <td>
                                <Link href={`/empresas/edit/${item.id}`}>
                                    <FaRegEdit title="Editar" className="text-primary"/>
                                </Link>

                                <MdDelete 
                                    title="Excluir" 
                                    className="text-danger"
                                     onClick={() => excluir(item.id)}
                                />
                            </td>
                            <td>{item.nome}</td>
                            <td>
                                <a href={item.site} target="_blank">
                                    <img src={item.logo} width={100} />
                                </a>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </Pagina>
    )
}