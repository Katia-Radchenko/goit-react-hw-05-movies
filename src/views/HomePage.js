import { useState, useEffect } from 'react';

import PageTitle from '../components/pageTitle/PageTitle';
import Container from '../components/container/Container';
import apiService from '../services/movieAPI.js';
import MovieList from '../components/movieList/MovieList';

const HomePage = () => {
  const [movies, setMovies] = useState(null);

  useEffect(() => {
    apiService
      .getDayTrandingMovies()
      .then(resp => setMovies(resp.results))
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <Container>
      <PageTitle title={'Trending today'} />
      {movies === null ? <p>...Loading</p> : <MovieList movies={movies} />}
    </Container>
  );
};

export default HomePage;
