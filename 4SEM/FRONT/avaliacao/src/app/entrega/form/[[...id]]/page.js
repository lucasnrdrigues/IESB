'use client'

import Pagina from "@/app/components/Pagina";
import EntregasValidator from "../../../validators/EntregasValidator";
import { Formik } from "formik";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { mask } from "remask";
import { useEffect } from "react";
import { Button, Form } from "react-bootstrap";
import { FaCheck } from "react-icons/fa";
import { IoIosArrowRoundBack } from "react-icons/io";
import { v4 } from "uuid";

export default function Page({ params }) {
    const route = useRouter();
    const entregas = JSON.parse(localStorage.getItem('entrega')) || [];
    const dados = entregas.find(item => item.id == params.id);
    const clientes = JSON.parse(localStorage.getItem('clientes')) || [];
    const entrega = dados || { numero: '', produto: '', cliente: '', preco: 0, peso: 0, tamanho:'' };

    function salvar(dados) {
        if (entrega.id) {
            Object.assign(entrega, dados);
        } else {
            dados.id = v4();
            entregas.push(dados);
        }
        localStorage.setItem('entrega', JSON.stringify(entregas));
        return route.push('/entrega');
    }

    return (
        <Pagina titulo="Entregas">
            <Formik
                initialValues={entrega}
                validationSchema={EntregasValidator}
                onSubmit={values => salvar(values)}
            >
                {({
                    values,
                    handleChange,
                    setFieldValue,
                    handleSubmit,
                    errors,
                }) => {
                    return (
                        <Form>
                            <Form.Group className="mb-3" controlId="produto">
                                <Form.Label>Produto</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="produto"
                                    value={values.produto}
                                    onChange={handleChange('produto')}
                                    isInvalid={errors.produto}
                                />
                                <Form.Control.Feedback type="invalid">
                                    {errors.produto}
                                </Form.Control.Feedback>
                                
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="descricao">
                                <Form.Label>Descricao</Form.Label>
                                <Form.Control
                                    type="descricao"
                                    name="descricao"
                                    value={values.descricao}
                                    onChange={handleChange('descricao')}
                                    isInvalid={errors.descricao}
                                />
                                <Form.Control.Feedback type="invalid">
                                    {errors.descricao}
                                </Form.Control.Feedback>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="cliente">
                                <Form.Label>Cliente</Form.Label>
                                <Form.Select
                                    name="cliente"
                                    value={values.cliente}
                                    onChange={handleChange('cliente')}
                                    isInvalid={errors.cliente}
                                >
                                    <option value=''>Selecione</option>
                                    {clientes.map(item => (
                                        <option key={item.id} value={item.nome}>
                                            {item.nome}
                                        </option>
                                    ))}
                                </Form.Select>
                                <Form.Control.Feedback type="invalid">
                                    {errors.cliente}
                                </Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="preco">
                                <Form.Label>Preço</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="preco"
                                    value={mask(values.preco, ['99999.99'])} // Máscara para preço
                                    onChange={(e) =>
                                        setFieldValue(
                                            'preco',
                                            mask(e.target.value, ['99999.99'])
                                        )
                                    }
                                    isInvalid={errors.preco}
                                />
                                <Form.Control.Feedback type="invalid">
                                    {errors.preco}
                                </Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="peso">
                                <Form.Label>Peso em kg</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="peso"
                                    value={mask(values.peso, ['999.99'])} // Máscara para peso
                                    onChange={(e) =>
                                        setFieldValue(
                                            'peso',
                                            mask(e.target.value, ['999.99'])
                                        )
                                    }
                                    isInvalid={errors.peso}
                                />
                                <Form.Control.Feedback type="invalid">
                                    {errors.peso}
                                </Form.Control.Feedback>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="tamanho">
                                <Form.Label>Tamanho</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="tamanho"
                                    value={mask(values.tamanho, ['99 x 99'])} // Aplicando a máscara
                                    onChange={(e) =>
                                        setFieldValue(
                                            'tamanho',
                                            mask(e.target.value, ['99 x 99']) // Garantindo que siga o formato
                                        )
                                    }
                                    isInvalid={errors.tamanho}
                                />
                                <Form.Control.Feedback type="invalid">
                                    {errors.tamanho}
                                </Form.Control.Feedback>
                            </Form.Group>

                            <div className="text-center">
                                <Button onClick={handleSubmit} variant="success">
                                    <FaCheck /> Salvar
                                </Button>
                                <Link
                                    href="/entrega"
                                    className="btn btn-danger ms-2"
                                >
                                    <IoIosArrowRoundBack /> Voltar
                                </Link>
                            </div>
                        </Form>
                    );
                }}
            </Formik>
        </Pagina>
    );
}
