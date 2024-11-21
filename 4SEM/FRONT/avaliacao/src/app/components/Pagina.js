import { Container } from "react-bootstrap";
import NavBar from "./NavBar";

export default function Pagina(props) {
    return (
        <>
            <NavBar />

            <div className="bg-danger text-white text-center p-3">
                <h1>{props.titulo}</h1>
            </div>

            <Container className="my-3">
                {props.children}
            </Container>
        </>
    )
}


