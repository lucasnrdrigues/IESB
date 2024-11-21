'use client'

import { Button, Form } from "react-bootstrap";
import './corpo.css'
import Image from "next/image";
import logo from '../../../../public/logo.png';

export default function Corpo(){
    return (
        <div className="corpo">
            <div className="apresentacao">
            <Image
                        src={logo} 
                        alt="Logo" 
                        width={100} 
                        height={65}
                />
                    <br />
                    <br />
                <h1>Software para gestão de transportes de pacotes</h1>
                    <br />
                <p>Nosso sistema foi desenvolvido para otimizar a administração de transportadoras, oferecendo ferramentas que facilitam o controle de frotas, monitoramento de entregas e gestão de motoristas. Com uma interface intuitiva e funcionalidades robustas, proporcionam</p>
                    <br />
                <h4 className="text-danger">Mais de 1.000 empresas já escolheram o nJsoft</h4>
            </div>
            <Form className="formulario">
                <h4>Quer saber como podemos te ajudar?</h4>
                <Form.Group className="mb-3" controlId="">
                    <Form.Label>Nome</Form.Label>
                    <Form.Control className="bg-transparent text-white custom-placeholder" type="text" placeholder="Digite o seu nome" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="">
                    <Form.Label>Número de telefone</Form.Label>
                    <Form.Control className="bg-transparent text-white custom-placeholder" type="text" placeholder="( ) xxxxx-xxxx" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="">
                    <Form.Label>Endereço de e-mail</Form.Label>
                    <Form.Control className="bg-transparent text-white custom-placeholder" type="email" placeholder="Digite o seu e-mail" />
                    <Form.Text className="text-white">
                    We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="">
                    <Form.Label>Nome da empresa</Form.Label>
                    <Form.Control className="bg-transparent text-white custom-placeholder" type="text" placeholder="Qual o nome da sua empresa?" />
                </Form.Group>

                <Button variant="danger" type="submit">Submit</Button>
            </Form>
        </div>
    )
}