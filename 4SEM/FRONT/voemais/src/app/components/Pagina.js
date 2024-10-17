import { Container, Nav, NavDropdown, Navbar } from "react-bootstrap";

export default function Pagina(props) {

    return (
        <>
            <Navbar bg="dark" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand href="/">VoeMais Airlines</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="/aeroportos">Aeroportos</Nav.Link>
                        <Nav.Link href="/empresas">Empresas</Nav.Link>
                        <Nav.Link href="/passageiros">Passageiros</Nav.Link>
                        <Nav.Link href="/passagem">Passagem</Nav.Link>
                        <Nav.Link href="/voos">Voos</Nav.Link>
                        <NavDropdown title="Create" id="basic-nav-dropdown"> 
                            <NavDropdown.Item href="/aeroportos/create">
                                Aeroportos                               
                            </NavDropdown.Item>
                            <NavDropdown.Item href="/empresas/create">
                                Empresas                              
                            </NavDropdown.Item>
                            <NavDropdown.Item href="/passageiros/create">
                                Passageiros                                
                           </NavDropdown.Item>
                            <NavDropdown.Item href="/passagem/create">
                                Passagem                       
                            </NavDropdown.Item>
                            <NavDropdown.Item href="/voos/create">
                                Voos                       
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Container>
            </Navbar>

            <div className="bg-secondary text-white text-center p-3">
                <h1>{props.titulo}</h1>
            </div>
            <Container className="my-3">
                {props.children}
            </Container>
        </>
    )
}