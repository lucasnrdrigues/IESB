'use client'

import Pagina from "@/app/components/Pagina"
import Link from "next/link"
import { useEffect, useState } from "react";
import { Table } from "react-bootstrap"
import { FaPlusCircle } from "react-icons/fa";
import { FaRegEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

// Imports do dashboard
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import Rodape from "../components/Rodape";

ChartJS.register(ArcElement, Tooltip, Legend);
//

export default function Page() {

    const [centros, setCentros] = useState([])
    //
    const [ufData, setUfData] = useState({
        labels: [],
        datasets: []
    });
    //

    useEffect(() => {
        setCentros(JSON.parse(localStorage.getItem('centros')) || [])
        //
        const savedCentros = JSON.parse(localStorage.getItem("centros")) || [];
        setCentros(savedCentros);
        calcularUFsMaisUsadas(savedCentros);
        //
    }, [])

    //
    function calcularUFsMaisUsadas(centros) {
        const ufCount = centros.reduce((acc, centro) => {
            acc[centro.uf] = (acc[centro.uf] || 0) + 1;
            return acc;
        }, {});

        const labels = Object.keys(ufCount);
        const data = Object.values(ufCount);

        setUfData({
            labels,
            datasets: [
                {
                    label: "Distribuição por UF",
                    data,
                    backgroundColor: [
                        "#FF6384",
                        "#36A2EB",
                        "#FFCE56",
                        "#4BC0C0",
                        "#9966FF",
                        "#FF9F40",
                        "#66CC99"
                    ],
                    hoverBackgroundColor: [
                        "#FF6384",
                        "#36A2EB",
                        "#FFCE56",
                        "#4BC0C0",
                        "#9966FF",
                        "#FF9F40",
                        "#66CC99"
                    ]
                }
            ]
        });
    }
    //

    function excluir(id) {
        if (confirm('Deseja realmente excluir o registro?')) {
            const dados = centros.filter(item => item.id != id)
            localStorage.setItem('centros', JSON.stringify(dados))
            setCentros(dados)
        }
    }

    return (
        <div className="page-container">
            <Pagina titulo="Centros de Distribuição" className="page-container">

                <Link
                    href="/centros/form"
                    className="btn btn-danger mb-3"
                >
                    <FaPlusCircle /> Adicionar
                </Link>

                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Nome</th>
                            <th>Empresa Responsável</th>
                            <th>Sigla</th>
                            <th>País</th>
                            <th>UF</th>
                            <th>Cidade</th>
                        </tr>
                    </thead>
                    <tbody>
                        {centros.map((item, i) => (
                            <tr key={item.id}>
                                <td>
                                    <Link href={`/centros/form/${item.id}`}>
                                        <FaRegEdit title="Editar" className="text-primary" />
                                    </Link>
                                    <MdDelete
                                        title="Excluir"
                                        className="text-danger"
                                        onClick={() => excluir(item.id)}
                                    />
                                </td>
                                <td>{item.nome}</td>
                                <td>{item.empresa}</td>
                                <td>{item.sigla}</td>
                                <td>{item.pais}</td>
                                <td>{item.uf}</td>
                                <td>{item.cidade}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>

                <h1>Dashboard - Centros por UFs</h1>
                <div style={{ maxWidth: "600px", margin: "auto" }} className="mb-5">
                    <Pie data={ufData} />
                </div>
            </Pagina>

            <Rodape />
    </div>
    )
}