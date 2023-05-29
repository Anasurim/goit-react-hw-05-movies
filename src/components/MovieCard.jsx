const MovieCard = ({ movie }) => {
  const IMG_BASE_URL = 'https://image.tmdb.org/t/p/w400';

  const {
    poster_path: posterPath,
    title,
    release_date: releaseDate,
    overview,
    vote_average: voteAverage,
  } = movie;

  const percent = Math.round((voteAverage / 10) * 100).toString() + '%';

  return (
    <div>
      <div>
        {movie && posterPath && (
          <img src={`${IMG_BASE_URL}/${posterPath}`} alt={movie.title} />
        )}
      </div>
      <h3>{`${title} (${releaseDate && releaseDate.slice(0, 4)})`}</h3>
      <p>Userscore: {percent}</p>
      <p>{overview}</p>
    </div>
  );
};

export default MovieCard;
