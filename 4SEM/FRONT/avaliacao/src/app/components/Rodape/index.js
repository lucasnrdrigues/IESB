'use client'

export default function Rodape(){
    return (
        <div>
            <footer className="footer">
                <p>© 2024 Minha Empresa - Todos os direitos reservados.</p>
                <ul className="rodape__lista">
                    <li className="lista__link">
                        <a href="#">Idioma</a>
                    </li>
                    <li className="lista__link">
                        <a href="#">Dispositivos Compatíveis</a>
                    </li>
                    <li className="lista__link">
                        <a href="#">Contrato de Assinatura</a>
                    </li>
                    <li className="lista__link">
                        <a href="#">Política de privacidade</a>
                    </li>
                    <li className="lista__link">
                        <a href="#">Proteção de dados no Brasil</a>
                    </li>
                    <li className="lista__link">
                        <a href="#">Anuncios Personalizados</a>
                    </li>
                    <li className="lista__link">
                        <a href="#">Ajuda</a>
                    </li>
                </ul>
                <p className="rodape__texto">® 2024 nJsoft, nJsoft+ e nJsoft security. Todos os direitos reservados. Serviço de assinatura paga. Conteúdo sujeito a disponibilidade.</p>
                <p className="rodape__texto">nJsoft+ é um serviço pago, baseado em assinatura e sujeito a termos e condições. O serviço nJsoft+ é comercializado por Lucas Nóbrega Rodrigues, Ceilândia, X000, Brasília - DF, 00000000, Brasil e CNPJ xx.xxx.xxx/xxxx-xx</p>
                </footer>

                <style jsx>{`
                .page-container {
                    display: flex;
                    flex-direction: column;
                    min-height: 100vh;
                }
                .fixed-table {
                    height: 200px;
                    display: block;
                }
                .fixed-table tbody {
                    height: 150px;
                    display: block;
                    overflow-y: auto;
                }
                .footer {
                    margin-top: 50px;
                    text-align: center;
                    padding: 10px;
                    background-color: #f8f9fa;
                    border-top: 1px solid #ddd;
                    color: black;




                    .rodape {
                    bottom: 0;
                    left: 0;
                    width: 100%;
                    background-color: #000;
                    color: black;
                    text-align: center;
                    padding: 3em 2em;
                    z-index: 1000;
                }

                .rodape__lista {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    list-style-type: none;
                    padding: 0;
                    margin: 0;
                    margin-bottom: 1em;
                }

                .lista__link a {
                    text-decoration: none;
                    color: black;
                    margin: 0 1em;
                    transition: color 0.3s;
                }

                .lista__link a:hover {
                    color: var(--botao-azul, #1e90ff); /* Cor ao passar o mouse */
                }

                .lista__link a:active {
                    color: purple; /* Cor ao clicar */
                }

                .rodape__texto {
                    font-size: 14px;
                    margin: 0.5em 0;
                }

                }
                `}</style>
        </div>
    )
}