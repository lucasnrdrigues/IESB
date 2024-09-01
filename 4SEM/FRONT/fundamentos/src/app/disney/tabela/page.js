'use client'

import Pagina from "@/app/components/Pagina";
import apiDisney from "@/services/apiDisney";
import { useEffect, useState } from "react";
import { Container, Table } from "react-bootstrap";

export default function Page() {

    const [personagem, setPersonagens] = useState([])

    useEffect(() => {
        apiDisney.get('character').then(resultado => {
            setPersonagens(resultado.data.data)
        })
    }, [])

    return (
        <Pagina titulo="Tabela Disney">
            
            <Table striped bordered hover>
                <thead>
                    <tr>
                    <th>Id</th>
                        <th>Nome</th>
                        <th>Foto</th>
                    </tr>
                </thead>
                <tbody>
                    {personagem.map(item => (
                        <tr>
                            <td>{item._id}</td>
                            <td>{item.name}</td>
                            <img src={item.imageUrl} width="80" height="80"/>
                        </tr>
                    ))}
                </tbody>
            </Table>
            
        </Pagina>
    )
}
