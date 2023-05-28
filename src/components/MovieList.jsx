import { Link, useLocation } from 'react-router-dom';

export const MovieList = ({ movies }) => {
  const location = useLocation();

  return (
    <ul>
      {movies.map(movie => (
        <li key={movie.id}>
          <Link to={`${movie.id}`} state={{ from: location }}>
            <p>{movie.title}</p>
          </Link>
        </li>
      ))}
    </ul>
  );
};
