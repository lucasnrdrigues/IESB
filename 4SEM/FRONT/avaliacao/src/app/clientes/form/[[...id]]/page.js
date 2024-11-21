'use client'

import Pagina from "@/app/components/Pagina";
import ClientesValidator from "../../../validators/ClientesValidator";
import { Formik } from "formik";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { FaCheck } from "react-icons/fa";
import { MdOutlineArrowBack } from "react-icons/md";
import { mask, unmask } from "remask";
import { v4 } from "uuid";

export default function Page({ params }) {

    const route = useRouter()

    const clientes = JSON.parse(localStorage.getItem('clientes')) || []
    const dados = clientes.find(item => item.id == params.id)
    const cliente = dados || { nome: '', email: '', telefone: '', endereco: '', data_nascimento: '', tipo_documento: '', documento: '' }

    function salvar(dados) {

        if (cliente.id) {
            Object.assign(cliente, dados)
        } else {
            dados.id = v4()
            clientes.push(dados)
        }

        localStorage.setItem('clientes', JSON.stringify(clientes))
        return route.push('/clientes')
    }

    return (
        <Pagina titulo="Clientes">

            <Formik
                initialValues={cliente}
                validationSchema={ClientesValidator}
                onSubmit={values => salvar(values)}
            >
                {({
                    values,
                    handleChange,
                    handleSubmit,
                    errors,
                    setFieldValue,
                }) => {

                    useEffect(()=>{
                        switch(values.tipo_documento){
                            case 'CPF': 
                                values.documento = mask(values.documento, '999.999.999-99'); 
                                break;
                            case 'CNPJ': 
                                values.documento = mask(values.documento, '99.999.999/9999-99'); 
                                break;
                            case 'RG': 
                                values.documento = mask(values.documento, '9.999.999'); 
                                break;
                            case 'Passaporte': 
                                values.documento = mask(values.documento, 'AAA9999'); 
                                break;
                        }
                    }, [values.documento])

                    useEffect(()=>{
                        values.documento = ''
                    }, [values.tipo_documento])

                    return (
                        <Form>
                            <Form.Group className="mb-3" controlId="nome">
                                <Form.Label>Nome</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="nome"
                                    value={values.nome}
                                    onChange={handleChange('nome')}
                                    isInvalid={errors.nome}
                                /> 
                                <Form.Control.Feedback type="invalid">
                                    {errors.nome}
                                </Form.Control.Feedback>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="tipo_documento">
                                <Form.Label>Tipo de Documento</Form.Label>
                                <Form.Select
                                    name="tipo_documento"
                                    value={values.tipo_documento}
                                    onChange={handleChange('tipo_documento')}
                                    isInvalid={errors.tipodocumento}
                                >
                                    <option value=''>Selecione</option>
                                    <option value='CPF'>CPF</option>
                                    <option value='CNPJ'>CNPJ</option>
                                    <option value='RG'>RG</option>
                                    <option value='Passaporte'>Passaporte</option>
                                    <option value='Outro'>Outro</option>
                                </Form.Select>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="documento">
                                <Form.Label>Documento</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="documento"
                                    value={values.documento}
                                    onChange={handleChange('documento')}
                                    isInvalid={errors.documento}
                                />
                                <Form.Control.Feedback type="invalid">
                                    {errors.documento}
                                </Form.Control.Feedback>
                            </Form.Group>
                            
                            <Form.Group className="mb-3" controlId="email">
                                <Form.Label>E-mail</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="email"
                                    value={values.email}
                                    onChange={handleChange('email')}
                                    isInvalid={errors.email}
                                />
                                <Form.Control.Feedback type="invalid">
                                    {errors.email}
                                </Form.Control.Feedback>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="telefone">
                                <Form.Label>Telefone</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="telefone"
                                    value={values.telefone}
                                    onChange={(value) => {
                                        setFieldValue('telefone', mask(value.target.value, '(99) 99999-9999'))
                                    }}
                                    isInvalid={errors.telefone}
                                />
                                <Form.Control.Feedback type="invalid">
                                    {errors.telefone}
                                </Form.Control.Feedback>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="endereco">
                                <Form.Label>Endereco</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="endereco"
                                    value={values.endereco}
                                    onChange={handleChange('endereco')}
                                    isInvalid={errors.endereco}
                                />
                                <Form.Control.Feedback type="invalid">
                                    {errors.endereco}
                                </Form.Control.Feedback>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="data_nascimento">
                                <Form.Label>Dt. Nascimento</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="data_nascimento"
                                    value={values.data_nascimento}
                                    onChange={(value) => {
                                        setFieldValue('data_nascimento', mask(value.target.value, '99/99/9999'))
                                    }}
                                    isInvalid={errors.datanascimento}
                                />
                                <Form.Control.Feedback type="invalid">
                                    {errors.datanascimento}
                                </Form.Control.Feedback>
                            </Form.Group>
                            <div className="text-center">
                                <Button onClick={handleSubmit} variant="success">
                                    <FaCheck /> Salvar
                                </Button>
                                <Link
                                    href="/clientes"
                                    className="btn btn-danger ms-2"
                                >
                                    <MdOutlineArrowBack /> Voltar
                                </Link>
                            </div>
                        </Form>
                    )
                }}
            </Formik>
        </Pagina>
    )
}
