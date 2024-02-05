import { useState,useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { MdOutlineSearch } from "react-icons/md";
import { getSearchWord } from '../../api/api-movies';
import ListMovies from '../ListMovies/ListMovies';
import s from './SearchForm.module.css'
import { Loader } from '../Loader/Loader';

const SearchForm = () => {
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
      }
      finally {
        setLoading(false);
      }
    };

    fetchList();
  }, [resultsParams]);

  return (
    <main>
      {error && <p>{error}</p>}
      {loading && <Loader/>}
    <form className={s.form} onSubmit={handleSubmit}>
        <label></label>
        <input className={s.formInput} required type="text" name="search" placeholder="Enter search phrase" value={search}
               onChange={handleOnChange} />
      <button className={s.formBtn}  type="submit"><MdOutlineSearch /></button>
    </form>
      {movies.length > 0 ? <ListMovies movies={movies} /> : ''}
    </main>
  );
};

export default SearchForm;
