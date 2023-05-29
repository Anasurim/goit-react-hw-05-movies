const MovieCastList = ({ credits }) => {
  const IMG_BASE_URL = 'https://image.tmdb.org/t/p/w200';

  return (
    <ul>
      {credits.map(({ character, name, profile_path: profilePath, id }) => {
        return (
          <li key={id}>
            <div>
              {credits && profilePath && (
                <img src={`${IMG_BASE_URL}/${profilePath}`} alt={name} />
              )}
            </div>
            <p>Name: {name}</p>
            <p>Character: {character}</p>
          </li>
        );
      })}
    </ul>
  );
};

export default MovieCastList;
