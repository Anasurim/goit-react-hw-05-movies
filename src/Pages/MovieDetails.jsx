import { Suspense, useEffect, useRef, useState } from 'react';
import { Link, Outlet, useParams, useLocation } from 'react-router-dom';
import { getMoviesById } from '../service/MovieAPI';
import { RotatingLines } from 'react-loader-spinner';
import MovieCard from 'components/MovieCard';
import { BackLink } from '../components/Backlink';

const MovieDetails = () => {
  const [movie, setMovie] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const location = useLocation();
  const backLinkHref = useRef(
    location.state?.from ?? (location.pathname === '/movies' ? '/movies' : '/')
  );

  const movieId = useParams();

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);

      try {
        const movie = await getMoviesById(movieId);
        setMovie(movie);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [movieId]);

  return (
    <>
      <BackLink to={backLinkHref.current}>Back</BackLink>
      <MovieCard movie={movie} />

      {isLoading && (
        <RotatingLines
          strokeColor="grey"
          strokeWidth="5"
          animationDuration="0.75"
          width="96"
          visible={true}
        />
      )}
      <ul>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Review</Link>
        </li>
      </ul>
      <Suspense fallback={<div>Loading subpage...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default MovieDetails;
