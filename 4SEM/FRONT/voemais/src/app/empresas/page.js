'use client'

import Pagina from "@/app/components/Pagina"
import Link from "next/link"
import { Table } from "react-bootstrap"
import { IoIosAirplane } from "react-icons/io";

export default function Page() {

    //Para poder usar o .map em empresas, precisamos passar os dados para uma array, pois o localStorage retorna uma string
    // const empresas = JSON.parse(localStorage.getItem('empresas'))

    //COloque dentro da variavel empresas isso(local...) OU isso(no caso é [])
    let empresas = JSON.parse(localStorage.getItem('empresas')) || []
    //OBS: Tem como a gente utilizar o if e else também

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
                    {empresas.map(item => (

                        <tr>
                            <td>1</td>
                            <td>{item.nome}</td>
                            <td> <Link href={item.site}> <img src={item.logo} alt={item.nome} width={100}></img></Link></td>
                        </tr>

                    ))}
                </tbody>
            </Table>
        </Pagina>
    )
}