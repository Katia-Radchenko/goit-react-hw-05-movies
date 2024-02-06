import SearchForm from '../../components/SearchForm/SearchForm';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getSearchWord } from '../../api/api-movies';
import ListMovies from '../../components/ListMovies/ListMovies';
import { Loader } from '../../components/Loader/Loader';

const MoviesPage = () => {
  const [search, setSearch] = useState('');
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const [searchParams, setSearchParams] = useSearchParams();

  const resultsParams = searchParams.get('search');

  const handleSubmit = e => {
    e.preventDefault();

    setSearchParams({ search });
  };


  const handleOnChange = ({ target: { value } }) => {
    setSearch(value);
  };


  useEffect(() => {
    if (!resultsParams) return;
    const fetchList = async () => {
      try {
        setLoading(true);
        const { data } = await getSearchWord(resultsParams);
        setMovies(data.results);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchList();
  }, [resultsParams]);

  return (
    <main>
      {error && <p>{error}</p>}
      {loading && <Loader />}
      <SearchForm search={search} onSubmit={handleSubmit} onChange={handleOnChange} />
      {movies.length > 0 ? <ListMovies movies={movies} /> : ''}
    </main>
  );
};

export default MoviesPage;
