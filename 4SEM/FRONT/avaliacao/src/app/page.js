import "./globals.css"
import NavBarInicio from "./components/NavBarInicio";
import Corpo from "./components/Corpo";
import Cartao from "./components/Cards";
import Rodape from "./components/Rodape";

export default function Home() {
  return (
    <div className="page-container">
        <NavBarInicio />
        <Corpo />
        <Cartao />
        <Rodape />
    </div>
  );
}
