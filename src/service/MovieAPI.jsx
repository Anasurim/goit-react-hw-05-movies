// API-Key
// 4c6e55add2f00844e9f979bd7b0fac7c

export const getMovies = async () => {
  const API_KEY = '4c6e55add2f00844e9f979bd7b0fac7c';
  const BASE_URL = `https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`;

  try {
    const response = await fetch(BASE_URL);
    const movies = await response.json();

    return movies;
  } catch (error) {
    console.log(error);
  }
};

export const getMoviesBySearchQuerry = async searchQuerry => {
  const API_KEY = '4c6e55add2f00844e9f979bd7b0fac7c';
  const BASE_URL = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${searchQuerry}`;

  try {
    const response = await fetch(BASE_URL);
    const searchResults = await response.json();

    return searchResults;
  } catch (error) {
    console.log(error);
  }
};

export const getMoviesById = async ({ id }) => {
  const API_KEY = '4c6e55add2f00844e9f979bd7b0fac7c';
  const BASE_URL = `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`;

  try {
    const response = await fetch(BASE_URL);
    const movieDetails = await response.json();

    return movieDetails;
  } catch (error) {
    console.log(error);
  }
};

export const getMoviesCast = async ({ id }) => {
  const API_KEY = '4c6e55add2f00844e9f979bd7b0fac7c';
  const BASE_URL = `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${API_KEY}`;

  try {
    const response = await fetch(BASE_URL);
    const movieCast = await response.json();

    return movieCast.cast;
  } catch (error) {
    console.log(error);
  }
};

export const getMoviesReviews = async ({ id }) => {
  const API_KEY = '4c6e55add2f00844e9f979bd7b0fac7c';
  const BASE_URL = `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${API_KEY}`;

  try {
    const response = await fetch(BASE_URL);
    const movieReview = await response.json();

    return movieReview;
  } catch (error) {
    console.log(error);
  }
};
