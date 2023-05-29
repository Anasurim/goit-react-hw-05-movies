import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMoviesCast } from '../service/MovieAPI';
import { RotatingLines } from 'react-loader-spinner';
import MovieCastList from './MovieCastList';

const MovieCast = () => {
  const [credits, setCredits] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const movieId = useParams();

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);

      try {
        const cast = await getMoviesCast(movieId);
        console.log(cast);
        setCredits(cast);
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
      {isLoading && (
        <RotatingLines
          strokeColor="grey"
          strokeWidth="5"
          animationDuration="0.75"
          width="96"
          visible={true}
        />
      )}

      <MovieCastList credits={credits} />
    </>
  );
};

export default MovieCast;
