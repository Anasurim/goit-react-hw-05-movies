import getMovies from 'service/MovieAPI';
import { useState, useEffect } from 'react';
import { RotatingLines } from 'react-loader-spinner';
import { MovieList } from 'components/MovieList';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);

      try {
        const response = await getMovies();
        console.log(response);
        setMovies(response.results);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <main>
      <h1>Trending today</h1>
      {isLoading && (
        <RotatingLines
          strokeColor="grey"
          strokeWidth="5"
          animationDuration="0.75"
          width="96"
          visible={true}
        />
      )}
      <MovieList movies={movies} />
    </main>
  );
};

export default Home;
