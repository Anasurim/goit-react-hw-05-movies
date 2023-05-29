import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMoviesReviews } from '../service/MovieAPI';
import { RotatingLines } from 'react-loader-spinner';
import MovieReviewList from './MovieReviewList';

const MovieReviews = () => {
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const movieId = useParams();

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);

      try {
        const reviews = await getMoviesReviews(movieId);
        console.log(reviews);
        setReviews(reviews);
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

      {reviews.length === 0 ? (
        <div>No reviews available</div>
      ) : (
        <MovieReviewList reviews={reviews} />
      )}
    </>
  );
};

export default MovieReviews;
