'use client'

import Image from 'next/image';
import logo from '../../../../public/logo.png';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Button } from 'react-bootstrap';


export default function NavBar() {
    return (
      <>
        <Navbar bg="dark" data-bs-theme="dark">
            <Container>
                <Navbar.Brand href="/">
                    <Image
                        src={logo} 
                        alt="Logo" 
                        width={100} 
                        height={65}
                    />
                </Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="/centros" className='text-white px-4 mx-4'>Contatos</Nav.Link>
                    <Nav.Link href="/empresas" className='text-white px-4 mx-4'>Sobre</Nav.Link>
                    <Nav.Link href="/clientes" className='text-white px-4 mx-4'>Parcerias</Nav.Link>
                    <Nav.Link href="/entrega" className='text-white px-4 mx-4'>Centros</Nav.Link>
                    <Nav.Link href="/centros" className='text-white px-4 mx-4'>
                        <Button className="btn-danger px-4 mx-4" type="submit">Login</Button>
                    </Nav.Link>
                </Nav>
            </Container>
        </Navbar>
      </>
    );
}