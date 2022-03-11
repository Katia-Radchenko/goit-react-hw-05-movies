import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import apiService from '../services/movieAPI';

import Container from '../components/container/Container';
import Searchbar from '../components/searchbar/Searchbar';
import MovieList from '../components/movieList/MovieList';

const MoviesPage = () => {
  const [query, setQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const searchParamsQuery = searchParams.get('query');

  //при изменении запроса в форме поиска фильмов
  useEffect(() => {
    if (!query) {
      return;
    }

    setSearchParams({ query });
  }, [query, setSearchParams]);

  //при изменении запроса в поисковой строке
  useEffect(() => {
    if (!searchParamsQuery) {
      return;
    }

    setIsLoading(true);
    apiService.searchQuery = searchParamsQuery;
    apiService
      .getMoviesByQuery()
      .then(resp => {
        setMovies(resp.results);
        setIsLoading(false);
      })
      .catch(error => {
        console.log(error);
        setIsLoading(false);
      });
  }, [searchParamsQuery]);

  //при сабмите формы поиска
  const HandleSubmit = query => {
    setQuery(query);
  };

  return (
    <Container>
      <Searchbar onSubmit={HandleSubmit} />
      {isLoading ? <p>...Loading</p> : <MovieList movies={movies} />}
    </Container>
  );
};

export default MoviesPage;
