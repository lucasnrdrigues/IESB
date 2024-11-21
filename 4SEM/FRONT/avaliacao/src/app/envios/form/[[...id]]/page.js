'use client'

import Pagina from "@/app/components/Pagina";
import { Formik } from "formik";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { FaCheck } from "react-icons/fa";
import { MdOutlineArrowBack } from "react-icons/md";
import { v4 } from "uuid";
import EnviosValidator from "../../../validators/EnviosValidator";

export default function Page({ params }) {
    const route = useRouter();

    const envios = JSON.parse(localStorage.getItem('envios')) || [];
    const dados = envios.find(item => item.id == params.id);
    const envio = dados || {
        identificador: '',
        empresa: '',
        cliente: '',
        origem: '',
        destino: '',
        preco: '',
        data_envio: '',
        status: ''
    };

    const [empresas, setEmpresas] = useState([]);
    const [clientes, setClientes] = useState([]);
    const [centros, setCentros] = useState([]);
    const [entregas, setEntregas] = useState([]);

    useEffect(() => {
        setEmpresas(JSON.parse(localStorage.getItem('empresas')) || []);
        setClientes(JSON.parse(localStorage.getItem('clientes')) || []);
        setCentros(JSON.parse(localStorage.getItem('centros')) || []);
        setEntregas(JSON.parse(localStorage.getItem('entrega')) || []);
    }, []);

    function salvar(dados) {
        if (envio.id) {
            Object.assign(envio, dados);
        } else {
            dados.id = v4();
            envios.push(dados);
        }
        localStorage.setItem('envios', JSON.stringify(envios));
        return route.push('/envios');
    }

    return (
        <Pagina titulo="Envio">
            <Formik
                initialValues={envio}
                validationSchema={EnviosValidator} // Validação adicionada
                onSubmit={values => salvar(values)}
            >
                {({
                    values,
                    handleChange,
                    setFieldValue,
                    handleSubmit,
                    errors
                }) => (
                    <Form>
                        <Form.Group className="mb-3" controlId="identificador">
                            <Form.Label>ID pacote</Form.Label>
                            <Form.Select
                                name="identificador"
                                value={values.identificador}
                                onChange={handleChange('identificador')}
                                isInvalid={errors.identificador}
                            >
                                <option value="">Selecione</option>
                                {entregas.map(item => (
                                    <option key={item.id} value={item.id}>
                                        {item.id}
                                    </option>
                                ))}
                            </Form.Select>
                            <Form.Control.Feedback type="invalid">
                                {errors.identificador}
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="empresa">
                            <Form.Label>Empresa/Transportadora</Form.Label>
                            <Form.Select
                                name="empresa"
                                value={values.empresa}
                                onChange={handleChange('empresa')}
                                isInvalid={errors.empresa}
                            >
                                <option value="">Selecione</option>
                                {empresas.map(item => (
                                    <option key={item.nome} value={item.nome}>
                                        {item.nome}
                                    </option>
                                ))}
                            </Form.Select>
                            <Form.Control.Feedback type="invalid">
                                {errors.empresa}
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="cliente">
                            <Form.Label>Cliente</Form.Label>
                            <Form.Select
                                name="cliente"
                                value={values.cliente}
                                onChange={handleChange('cliente')}
                                isInvalid={errors.empresa}
                            >
                                <option value="">Selecione</option>
                                {clientes.map(item => (
                                    <option key={item.nome} value={item.nome}>
                                        {item.nome}
                                    </option>
                                ))}
                            </Form.Select>
                            <Form.Control.Feedback type="invalid">
                                {errors.empresa}
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="origem">
                            <Form.Label>Origem</Form.Label>
                            <Form.Select
                                name="origem"
                                value={values.origem}
                                onChange={handleChange('origem')}
                                isInvalid={errors.origem}
                            >
                                <option value="">Selecione</option>
                                {centros.map(item => (
                                    <option key={item.sigla} value={item.sigla}>
                                        {item.nome}
                                    </option>
                                ))}
                            </Form.Select>
                            <Form.Control.Feedback type="invalid">
                                {errors.origem}
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="destino">
                            <Form.Label>Destino</Form.Label>
                            <Form.Select
                                name="destino"
                                value={values.destino}
                                onChange={handleChange('destino')}
                                isInvalid={errors.destino}
                            >
                                <option value="">Selecione</option>
                                {centros.map(item => (
                                    <option key={item.sigla} value={item.sigla}>
                                        {item.nome}
                                    </option>
                                ))}
                            </Form.Select>
                            <Form.Control.Feedback type="invalid">
                                {errors.destino}
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="preco">
                            <Form.Label>Preço</Form.Label>
                            <Form.Control
                                type="text"
                                name="preco"
                                value={Intl.NumberFormat('pt-BR', {
                                    style: 'currency',
                                    currency: 'BRL',
                                }).format(values.preco || 0)} // Formata o valor para BRL
                                onChange={(e) => {
                                    const rawValue = e.target.value.replace(/[^\d]/g, ''); // Remove caracteres não numéricos
                                    const formattedValue = (Number(rawValue) / 100).toFixed(2); // Ajusta o valor como decimal
                                    setFieldValue('preco', formattedValue); // Atualiza o estado no formato correto
                                }}
                                isInvalid={errors.preco}
                            />
                            <Form.Control.Feedback type="invalid">
                                {errors.preco}
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="data_envio">
                            <Form.Label>Data Envio</Form.Label>
                            <Form.Control
                                type="date"
                                name="data_envio"
                                value={values.data_envio}
                                onChange={handleChange('data_envio')}
                                isInvalid={errors.data_envio}
                            />
                            <Form.Control.Feedback type="invalid">
                                {errors.data_envio}
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="status">
                            <Form.Label>Status</Form.Label>
                            <Form.Select
                                name="status"
                                value={values.status}
                                onChange={handleChange('status')}
                                isInvalid={errors.status}
                            >
                                <option value="">Selecione</option>
                                <option value="entregue">Entregue</option>
                                <option value="enviado">Enviado</option>
                            </Form.Select>
                            <Form.Control.Feedback type="invalid">
                                {errors.status}
                            </Form.Control.Feedback>
                        </Form.Group>

                        <div className="text-center">
                            <Button onClick={handleSubmit} variant="success">
                                <FaCheck /> Salvar
                            </Button>
                            <Link
                                href="/envios"
                                className="btn btn-danger ms-2"
                            >
                                <MdOutlineArrowBack /> Voltar
                            </Link>
                        </div>
                    </Form>
                )}
            </Formik>
        </Pagina>
    );
}
