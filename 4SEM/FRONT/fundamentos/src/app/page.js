import { Button } from "react-bootstrap";
import Cabecalho from "./components/Cabecalho"; //Adicionei
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <Button variant="primary"> Primary</Button>{' '}

      <Cabecalho titulo="Página Inicial" sub="Orion Teles" />
      <Cabecalho titulo="Página Inicial" sub="Orion Teles" />
      <Cabecalho titulo="Página Inicial" sub="Orion Teles" />
      <Cabecalho titulo="Página Inicial" sub="Orion Teles" />

      <Link href="/fundamentos">Página fundamentos</Link><br />
      <Link href="/clientes">Página Clientes</Link><br />

    </main>
  );
}
