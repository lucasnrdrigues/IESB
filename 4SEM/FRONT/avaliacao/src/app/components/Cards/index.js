'use client'

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function Cartao() {
  return (
    <div className='Cartoes'>
        <Card className='bg-white' style={{ width: '25rem' }}> 
        <Card.Body>
            <Card.Title className='text-danger'>Dashboards Interativos para Gestão Inteligente</Card.Title>
            <Card.Text>
            Visualize sua operação de transporte de forma clara e objetiva com painéis personalizados. Encontre rapidamente dados precisos e confiáveis para tomar decisões estratégicas ágeis, aumentando a eficiência e o controle da sua transportadora.
            </Card.Text>
            <Button variant="danger">Veja mais</Button>
        </Card.Body>
        </Card>
        <Card className='bg-white' style={{ width: '25rem' }}>
        <Card.Body>
            <Card.Title className='text-danger'>Comunicação Ágil e Segura com Embarcadores</Card.Title>
            <Card.Text>
            Facilite a comunicação com clientes e embarcadores usando EDI e Webservices, garantindo segurança e rapidez nas trocas de informações. Nosso time de especialistas está pronto para desenvolver integrações sob medida, entregando soluções personalizadas em tempo recorde.
            </Card.Text>
            <Button variant="danger">Veja mais</Button>
        </Card.Body>
        </Card>
        <Card className='bg-white' style={{ width: '25rem' }}>
        <Card.Body>
            <Card.Title className='text-danger'>Todas as Soluções de Gestão em um Único Software</Card.Title>
            <Card.Text>
            Maximize a eficiência da sua empresa nas áreas fiscal, financeira, comercial, gestão de frotas, fretes e muito mais. Com uma ampla gama de funcionalidades, o nosso software oferece tudo o que você precisa para otimizar sua operação em um único lugar.
            </Card.Text>
            <Button variant="danger">Veja mais</Button>
        </Card.Body>
        </Card>
        <Card className='bg-white' style={{ width: '25rem' }}>
        <Card.Body>
            <Card.Title className='text-danger'>A Maior Plataforma Open Logistics do Mundo</Card.Title>
            <Card.Text>
            Conecte sua transportadora à nstech, a maior Plataforma Open Logistics do mundo. Tenha acesso às soluções tecnológicas mais modernas e líderes de mercado, elevando sua empresa a um novo patamar de excelência operacional e gestão.
            </Card.Text>
            <Button variant="danger">Veja mais</Button>
        </Card.Body>
        </Card>
        <style jsx>{`
        .Cartoes {
            display: flex;
            justify-content: space-around;
            padding: 70px 0 0;
        }
      `}</style>
    </div>
  );
}