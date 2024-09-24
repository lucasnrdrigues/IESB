import { Table, Button } from 'react-bootstrap';
import Link from 'next/link';
import 'bootstrap/dist/css/bootstrap.min.css'; // Certifique-se de que o Bootstrap está sendo importado

export default function AnimeTable({ animes }) {
  return (
    <Table striped bordered hover className="table-custom">
      <thead className="thead-dark">
        <tr>
          <th className="text-center">Detalhes</th>
          <th className="text-center">Título</th>
          <th className="text-center">Duração</th>
          <th className="text-center">Ano</th>
        </tr>
      </thead>
      <tbody>
        {animes.map((anime) => (
          <tr key={anime.mal_id}>
            <td className="text-center">
              <Link href={`/anime/${anime.mal_id}/page`}>
                <Button variant="light">
                  <img src="" alt="Detalhes" width="20" />
                </Button>
              </Link>
            </td>
            <td className="text-center">{anime.title}</td>
            <td className="text-center">{anime.duration || 'Desconhecido'}</td>
            <td className="text-center">{anime.year || 'N/A'}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}
