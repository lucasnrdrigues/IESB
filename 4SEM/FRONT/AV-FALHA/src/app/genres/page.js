'use client'

import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { Navbar, Nav, Container, Card, Button, Row, Col } from 'react-bootstrap';
import axios from 'axios';
import Link from 'next/link';

export default function AnimeDetailPage() {
  const router = useRouter();
  const { id } = router.query;
  const [anime, setAnime] = useState(null);

  useEffect(() => {
    if (id) {
      axios.get(`https://api.jikan.moe/v4/anime/${id}`)
        .then(response => setAnime(response.data.data))
        .catch(error => console.error('Erro ao buscar detalhes do anime:', error));
    }
  }, [id]);

  if (!anime) return <div>Carregando...</div>;

  return (
    <div>
      {/* Barra de navegação */}
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="/">Anime App</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Link href="/" passHref>
                <Nav.Link>Animes</Nav.Link>
              </Link>
              <Link href="/genres" passHref>
                <Nav.Link>Gêneros</Nav.Link>
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Detalhes do Anime */}
      <div className="container mt-5">
        <Row>
          {/* Coluna com a imagem do anime */}
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

          {/* Coluna com os detalhes do anime */}
          <Col md={8}>
            <Card>
              <Card.Body>
                <Card.Title>{anime.title}</Card.Title>
                <Card.Text>
                  <strong>Episódios:</strong> {anime.episodes || 'Desconhecido'} <br />
                  <strong>Status:</strong> {anime.status || 'Desconhecido'} <br />
                  <strong>Duração:</strong> {anime.duration || 'Desconhecido'} <br />
                  <strong>Ano:</strong> {anime.year || 'N/A'}
                </Card.Text>
                <Button variant="secondary" onClick={() => router.push('/')}>Voltar</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
}
