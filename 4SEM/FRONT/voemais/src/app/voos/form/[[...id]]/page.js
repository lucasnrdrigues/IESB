'use client'

import Pagina from "@/app/components/Pagina";
import VooValidator from "@/validators/VooValidator";
import { Formik } from "formik";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { FaCheck } from "react-icons/fa";
import { IoIosArrowRoundBack } from "react-icons/io";
import { v4 } from "uuid";

export default function Page({ params }) {
    const route = useRouter();

    const voos = JSON.parse(localStorage.getItem('voos')) || [];
    const dados = voos.find(item => item.id == params.id);
    const voo = dados || { internacional: '', identificador: '', checkin: '', embarque: '', origem: '', destino: '', empresa: '', preco: '' };

    const [aeroportos, setAeroportos] = useState([])

    useEffect(() => {
        setAeroportos(JSON.parse(localStorage.getItem('aeroporto')) || [])
    }, [])

    const [empresas, setEmpresas] = useState([])

    useEffect(() => {
        setEmpresas(JSON.parse(localStorage.getItem('empresas')) || [])
    }, [])

    function salvar(dados) {
        if (voo.id) {
            Object.assign(voo, dados);
        } else {
            dados.id = v4();
            voos.push(dados);
        }
        localStorage.setItem('voos', JSON.stringify(voos));
        return route.push('/voos');
    }

    return (
        <Pagina titulo="Voo">
            <Formik
                initialValues={voo}
                validationSchema={VooValidator}
                onSubmit={values => salvar(values)}
            >
                {({
                    values,
                    handleChange,
                    handleSubmit,
                    errors,
                }) => {
                    return (
                        <Form>
                        <Form.Group className="mb-3" controlId="internacional">
                            <Form.Label>Internacional</Form.Label>
                            <Form.Control
                                type="text"
                                name="internacional"
                                value={values.internacional}
                                onChange={handleChange('internacional')}
                                isInvalid={errors.internacional}  // Validação de erro
                            />
                            <Form.Control.Feedback type="invalid">
                                {errors.internacional}
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="identificador">
                            <Form.Label>Identificador</Form.Label>
                            <Form.Control
                                type="text"
                                name="identificador"
                                value={values.identificador}
                                onChange={handleChange('identificador')}
                                isInvalid={errors.identificador}  // Validação de erro
                            />
                            <Form.Control.Feedback type="invalid">
                                {errors.identificador}
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="checkin">
                            <Form.Label>Data Check-in</Form.Label>
                            <Form.Control
                                type="date"
                                name="checkin"
                                value={values.checkin}
                                onChange={handleChange('checkin')}
                                isInvalid={errors.checkin}  // Validação de erro
                            />
                            <Form.Control.Feedback type="invalid">
                                {errors.checkin}
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="embarque">
                            <Form.Label>Data Embarque</Form.Label>
                            <Form.Control
                                type="date"
                                name="embarque"
                                value={values.embarque}
                                onChange={handleChange('embarque')}
                                isInvalid={errors.embarque}  // Validação de erro
                            />
                            <Form.Control.Feedback type="invalid">
                                {errors.embarque}
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="origem">
                            <Form.Label>Origem</Form.Label>
                            <Form.Select
                                name="origem"
                                value={values.origem}
                                onChange={handleChange('origem')}
                                isInvalid={errors.origem}  // Validação de erro
                            >
                                <option value=''>Selecione</option>
                                {aeroportos.map(item => (
                                    <option key={item.nome} value={item.nome}>
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
                                isInvalid={errors.destino}  // Validação de erro
                            >
                                <option value=''>Selecione</option>
                                {aeroportos.map(item => (
                                    <option key={item.nome} value={item.nome}>
                                        {item.nome}
                                    </option>
                                ))}
                            </Form.Select>
                            <Form.Control.Feedback type="invalid">
                                {errors.destino}
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="empresa">
                            <Form.Label>Empresa</Form.Label>
                            <Form.Select
                                name="empresa"
                                value={values.empresa}
                                onChange={handleChange('empresa')}
                                isInvalid={errors.empresa}  // Validação de erro
                            >
                                <option value=''>Selecione</option>
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
                        <Form.Group className="mb-3" controlId="preco">
                            <Form.Label>Preço</Form.Label>
                            <Form.Control
                                type="text"
                                name="preco"
                                value={values.preco}
                                onChange={handleChange('preco')}
                                isInvalid={errors.preco}  // Validação de erro
                            />
                            <Form.Control.Feedback type="invalid">
                                {errors.preco}
                            </Form.Control.Feedback>
                        </Form.Group>
                        <div className="text-center">
                            <Button onClick={handleSubmit} variant="success">
                                <FaCheck /> Salvar
                            </Button>
                            <Link
                                href="/voos"
                                className="btn btn-danger ms-2"
                            >
                                <IoIosArrowRoundBack /> Voltar
                            </Link>
                        </div>
                    </Form>
                    )
                }}
            </Formik>
        </Pagina>
    );
}