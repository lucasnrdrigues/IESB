'use client'

import Pagina from "@/app/components/Pagina";
import AeroportosValidator from "@/validators/AeroportosValidator";
import { Formik } from "formik";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button, Form } from "react-bootstrap";
import { FaCheck } from "react-icons/fa";
import { IoIosArrowRoundBack } from "react-icons/io";
import { v4 } from "uuid";

export default function Page({ params }) {
    const route = useRouter();

    const aeroportos = JSON.parse(localStorage.getItem('aeroportos')) || [];
    const dados = aeroportos.find(item => item.id == params.id);
    const aeroporto = dados || { nome: '', sigla: '', uf: '', cidade: '', pais: '' };

    function salvar(dados) {
        if (aeroporto.id) {
            Object.assign(aeroporto, dados);
        } else {
            dados.id = v4();
            aeroportos.push(dados);
        }
        localStorage.setItem('aeroportos', JSON.stringify(aeroportos));
        return route.push('/aeroportos');
    }

    return (
        <Pagina titulo="Aeroporto">
            <Formik
                initialValues={aeroporto}
                validationSchema={AeroportosValidator}
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
                            <Form.Group className="mb-3" controlId="nome">
                                <Form.Label>Nome</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="nome"
                                    value={values.nome}
                                    onChange={handleChange('nome')}
                                    isInvalid={errors.nome}
                                /> <Form.Control.Feedback type="invalid">
                                    {errors.nome}
                              </Form.Control.Feedback>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="sigla">
                                <Form.Label>Sigla</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="sigla"
                                    value={values.sigla}
                                    onChange={handleChange('sigla')}
                                    isInvalid={errors.sigla}
                                /><Form.Control.Feedback type="invalid">
                                {errors.sigla}
                              </Form.Control.Feedback>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="uf">
                                <Form.Label>UF</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="uf"
                                    value={values.uf}
                                    onChange={handleChange('uf')}
                                    isInvalid={errors.uf}
                                /><Form.Control.Feedback type="invalid">
                                {errors.uf}
                              </Form.Control.Feedback>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="cidade">
                                <Form.Label>Cidade</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="cidade"
                                    value={values.cidade}
                                    onChange={handleChange('cidade')}
                                    isInvalid={errors.cidade}
                                /> <Form.Control.Feedback type="invalid">
                                {errors.cidade}
                              </Form.Control.Feedback>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="pais">
                                <Form.Label>País</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="pais"
                                    value={values.pais}
                                    onChange={handleChange('pais')}
                                    isInvalid={errors.pais}
                                /> <Form.Control.Feedback type="invalid">
                                {errors.pais}
                              </Form.Control.Feedback>
                            </Form.Group>

                            <div className="text-center">
                                <Button onClick={handleSubmit} variant="success">
                                    <FaCheck /> Salvar
                                </Button>

                                <Link href="/aeroportos" className="btn btn-danger ms-2">
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