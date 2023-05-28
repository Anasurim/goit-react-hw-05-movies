import { Suspense } from 'react';
import { Link, Outlet } from 'react-router-dom';
const MovieDetails = () => {
  return (
    <>
      <h2>Movie Details</h2>
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
