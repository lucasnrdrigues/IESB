'use client'

import Pagina from "@/app/components/Pagina";
import Link from "next/link";
import { Table } from "react-bootstrap";
import { IoIosAirplane } from "react-icons/io";
import { FaTrashAlt } from "react-icons/fa";
import { FaPen } from "react-icons/fa";
import { useEffect, useState } from "react";

export default function Page() {
    const [aeroportos, setAeroportos] = useState([]);

    useEffect(() => {
        setAeroportos(JSON.parse(localStorage.getItem('aeroportos')) || []);
    }, []);

    function excluir(id) {
        if (confirm('Deseja realmente excluir?')) {
            const dados = aeroportos.filter(item => item.id !== id);
            localStorage.setItem('aeroportos', JSON.stringify(dados));
            setAeroportos(dados);
        }
    }

    return (
        <Pagina titulo="Aeroportos">
            <div className="d-flex justify-content-start mb-3">
                <Link href="/aeroportos/form" className="btn btn-dark me-2"><IoIosAirplane /></Link>
            </div>

            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Nome</th>
                        <th>Sigla</th>
                        <th>UF</th>
                        <th>Cidade</th>
                        <th>País</th>
                    </tr>
                </thead>
                <tbody>
                    {aeroportos.map(item => (
                        <tr key={item.id}>
                            <td>
                                <Link href={`/aeroportos/form/${item.id}`}>
                                    <FaPen title='Editar' className="text-primary me-2" />
                                </Link>
                                <FaTrashAlt
                                    title='Excluir'
                                    className="text-danger"
                                    onClick={() => excluir(item.id)}
                                />
                            </td>
                            <td>{item.nome}</td>
                            <td>{item.sigla}</td>
                            <td>{item.uf}</td>
                            <td>{item.cidade}</td>
                            <td>{item.pais}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </Pagina>
    );
}