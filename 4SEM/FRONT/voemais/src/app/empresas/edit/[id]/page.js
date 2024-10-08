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

export default function Page({params}) {

    const route = useRouter()

    const empresas = JSON.parse(localStorage.getItem('empresas')) || []
    const dados = empresas.find(item => item.id == params.id)
    const empresa = dados || {nome: '', logo: '', site: ''}

    function salvar(dados){

        //PRIMEIRA FORMA PARA EDITAR OS DADOS
        Object.assign(empresa, dados)
        
        //SEGUNDA FORMA PARA EDITAR OS DADOS
        /* SPLICE: posicao que quero, qnt que quer excluir, o que quer inserir
        A partir da posicao 1, quero excluir 1 item -> variavel.splice(0, 1)
        A partir da posicao I, vou excluir 1 e vou inserir dados */
        // const i = empresas.findIndex(item => item.id == params.id)
        //empresas.splice(i, 1, dados) -> CUIDADO: É "empresas" com "s" mesmo
        //localStorage.setItem('empresas', JSON.stringify(empresas))

        //const empresas = JSON.parse(localStorage.getItem('empresas')) || []
        // dados.id = v4()
        // empresas.push(dados)
        
        localStorage.setItem('empresas', JSON.stringify(empresas))
        return route.push('/empresas')
    }

    return (
        <Pagina titulo="Empresa">

            <Formik
                initialValues={empresa}
                onSubmit={values=>salvar(values)}
            >
                {({
                    values,
                    handleChange,
                    handleSubmit,
                }) => (
                    <Form>
                        <Form.Group className="mb-3" controlId="nome">
                            <Form.Label>Nome</Form.Label>
                            <Form.Control 
                                type="text" 
                                name="nome" 
                                value={values.nome}
                                onChange={handleChange('nome')}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="logo">
                            <Form.Label>Logo</Form.Label>
                            <Form.Control 
                                type="text" 
                                name="logo"
                                value={values.logo}
                                onChange={handleChange('logo')}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="site">
                            <Form.Label>Site</Form.Label>
                            <Form.Control 
                                type="text" 
                                name="site"
                                value={values.site}
                                onChange={handleChange('site')}
                            />
                        </Form.Group>
                        <div className="text-center">
                            <Button onClick={handleSubmit} variant="success">
                                <FaCheck /> Salvar
                            </Button>
                            <Link
                                href="/empresas"
                                className="btn btn-danger ms-2"
                            >
                                <MdOutlineArrowBack /> Voltar
                            </Link>
                        </div>
                    </Form>
                )}
            </Formik>
        </Pagina>
    )
}