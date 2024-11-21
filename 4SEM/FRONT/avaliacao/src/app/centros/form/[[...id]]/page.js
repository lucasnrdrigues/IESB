'use client'

import Pagina from "@/app/components/Pagina";
import apiLocalidade from "@/app/services/apiLocalidade";
import CentrosValidator from "@/app/validators/CentrosValidator";
import { Formik } from "formik";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { FaCheck } from "react-icons/fa";
import { MdOutlineArrowBack } from "react-icons/md";
import { v4 } from "uuid";

export default function Page({ params }) {

    const route = useRouter()

    const centros = JSON.parse(localStorage.getItem('centros')) || []
    const dados = centros.find(item => item.id == params.id)
    const centro = dados || { nome: '', sigla: '', pais: 'Brasil', uf: '', cidade: '' }

    const [paises, setPaises] = useState([])
    const [ufs, setUfs] = useState([])
    const [cidades, setCidades] = useState([])
    const [camposBrasil, setCamposBrasil] = useState(false)
    const [empresas, setEmpresas] = useState([]) //Criando um useState para poder puxar as empresas criadas

    useEffect(() => {
        setEmpresas(JSON.parse(localStorage.getItem('empresas')) || []) //Puxando as empresas criadas do localStorage

        apiLocalidade.get(`paises`).then(resultado => {
            setPaises(resultado.data)
        })

        apiLocalidade.get(`estados?orderBy=nome`).then(resultado => {
            setUfs(resultado.data)
        })

    }, [])

    function salvar(dados) {

        if (centro.id) {
            Object.assign(centro, dados)
        } else {
            dados.id = v4()
            centros.push(dados)
        }

        localStorage.setItem('centros', JSON.stringify(centros))
        return route.push('/centros')
    }

    return (
        <Pagina titulo="Centros de Distribuição">

                <Formik
                    initialValues={centro}
                    validationSchema={CentrosValidator} // Adicionando validação
                    onSubmit={values => salvar(values)}
                >
                    {({
                        values,
                        handleChange,
                        handleSubmit,
                        errors
                    }) => {

                        useEffect(() => {
                            setCamposBrasil(values.pais == 'Brasil')
                        }, [values.pais])

                        useEffect(() => {
                            apiLocalidade.get(`estados/${values.uf}/municipios`).then(resultado => {
                                setCidades(resultado.data)
                            })
                        }, [values.uf])

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

                            <Form.Group className="mb-3" controlId="sigla">
                                <Form.Label>Sigla</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="sigla"
                                    value={values.sigla}
                                    onChange={handleChange('sigla')}
                                    isInvalid={errors.empresa}
                                />
                            <Form.Control.Feedback type="invalid">
                            {errors.sigla}
                            </Form.Control.Feedback>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="pais">
                                <Form.Label>País</Form.Label>
                                <Form.Select
                                    name="pais"
                                    value={values.pais}
                                    onChange={handleChange('pais')}
                                    isInvalid={errors.pais}
                                >
                                    <option value=''>Selecione</option>
                                    {paises.map(item => (
                                        <option key={item.nome} value={item.nome}>
                                            {item.nome}
                                        </option>
                                    ))}
                                </Form.Select>
                                <Form.Control.Feedback type="invalid">
                                {errors.pais}
                                </Form.Control.Feedback>
                            </Form.Group>
                            {camposBrasil &&
                                <>
                                    <Form.Group className="mb-3" controlId="uf">
                                        <Form.Label>UF</Form.Label>
                                        <Form.Select
                                            name="uf"
                                            value={values.uf}
                                            onChange={handleChange('uf')}
                                            isInvalid={errors.uf}
                                        >
                                            <option value=''>Selecione</option>
                                            {ufs.map(item => (
                                                <option key={item.sigla} value={item.sigla}>
                                                    {item.sigla} - {item.nome}
                                                </option>
                                            ))}
                                        </Form.Select>
                                        <Form.Control.Feedback type="invalid">
                                        {errors.uf}
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="cidade">
                                        <Form.Label>Cidade</Form.Label>
                                        <Form.Select
                                            name="cidade"
                                            value={values.cidade}
                                            onChange={handleChange('cidade')}
                                            isInvalid={errors.cidade}
                                        >
                                            <option value=''>Selecione</option>
                                            {cidades.map(item => (
                                                <option key={item.nome} value={item.nome}>
                                                    {item.nome}
                                                </option>
                                            ))}
                                        </Form.Select>
                                        <Form.Control.Feedback type="invalid">
                                        {errors.cidade}
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                </>
                            }
                                <div className="text-center">
                                    <Button onClick={handleSubmit} variant="success">
                                        <FaCheck /> Salvar
                                    </Button>
                                    <Link
                                        href="/centros"
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
