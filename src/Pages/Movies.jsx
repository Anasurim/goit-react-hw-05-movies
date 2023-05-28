import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getMoviesBySearchQuerry } from '../service/MovieAPI';
import SearchBox from 'components/Searchbox';
import { RotatingLines } from 'react-loader-spinner';
import { MovieListBySearch } from 'components/MovieListBySearch';

const Movies = () => {
  const [querry, setQuerry] = useState('');
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const fetchData = async () => {
      if (!querry) {
        return;
      }
      setIsLoading(true);

      try {
        const response = await getMoviesBySearchQuerry(querry);
        console.log(response.results);
        setSearchParams({ query: querry });
        setMovies(response.results);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [querry, setSearchParams]);

  const handleSubmit = querry => {
    setQuerry(querry);
  };

  useEffect(() => {
    const params = searchParams.get('query');
    if (params) {
      setQuerry(params);
    }
  }, [searchParams]);

  return (
    <>
      <main>
        <SearchBox onSubmit={handleSubmit} />

        {isLoading && (
          <RotatingLines
            strokeColor="grey"
            strokeWidth="5"
            animationDuration="0.75"
            width="96"
            visible={true}
          />
        )}

        <MovieListBySearch movies={movies} />
      </main>
    </>
  );
};

export default Movies;
