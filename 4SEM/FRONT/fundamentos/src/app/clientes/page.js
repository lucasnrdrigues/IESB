import Cabecalho from "../components/Cabecalho";
import Link from "next/link";


export default function Clientes() {

    return (
        <>
            <main>
                <Cabecalho titulo="Clientes" />

                <p>Página de clientes usando o cabeçalho</p>

                <Link href="/">Página Inicial</Link><br />
                <Link href="/fundamentos">Página Fundamentos</Link><br />

                

            </main>
        </>
    )
}
