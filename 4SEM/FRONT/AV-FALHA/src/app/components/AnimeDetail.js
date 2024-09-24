import { Card, Button, Row, Col } from 'react-bootstrap';

export default function AnimeDetail({ anime, onBack }) {
  if (!anime) return <div>Carregando...</div>;

  return (
    <Row>
      <Col md={4}>
        <Card>
          <Card.Img variant="top" src={anime.images.jpg.image_url} alt={anime.title} />
          <Card.Body>
            <Button href={anime.images.jpg.image_url} target="_blank" variant="primary">
              Abrir imagem em nova aba
            </Button>
          </Card.Body>
        </Card>
      </Col>
      <Col md={8}>
        <Card>
          <Card.Body>
            <Card.Title>{anime.title}</Card.Title>
            <Card.Text>
              <strong>Episódios:</strong> {anime.episodes || 'Desconhecido'} <br />
              <strong>Status:</strong> {anime.status || 'Desconhecido'} <br />
              <strong>Duração:</strong> {anime.duration || 'Desconhecido'}
            </Card.Text>
            <Button variant="secondary" onClick={onBack}>Voltar</Button>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
}
