import { ListGroup, Divider } from 'react-bootstrap';

export default function GenreList({ genres }) {
  return (
    <ListGroup>
      {genres.map((genre) => (
        <div key={genre.mal_id}>
          <ListGroup.Item>
            {genre.name} ({genre.count})
          </ListGroup.Item>
          <Divider />
        </div>
      ))}
    </ListGroup>
  );
}
