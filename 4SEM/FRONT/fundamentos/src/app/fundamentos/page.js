import { Alert, Container } from "react-bootstrap"; //Dê Ctrl + barra para puxar o item certo!
import Cabecalho from "../components/Cabecalho";
import Link from "next/link";


export default function Fundamentos() {

    return (
        <>
            <Cabecalho titulo="Fundamentos" />

                <Container>

                    <Alert>
                        Atenção! Preste muita Atenção
                    </Alert>

                    <Link href="/">Página Inicial</Link><br />

                    <h1>Fundamentos</h1>
                    <p>Sucesso</p>

                </Container>

            <Cabecalho />
        </>
    )
}
