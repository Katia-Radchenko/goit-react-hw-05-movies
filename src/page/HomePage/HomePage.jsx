import { useState, useEffect } from 'react';
import { getAllPosts } from '../../api/api-movies';
import ListMovies from '../../components/ListMovies/ListMovies';
import { Loader } from '../../components/Loader/Loader';

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  useEffect(() => {

    // getAllPosts()
    const fetchPosts = async () => {
      try {
        setLoading(true);
        const { data } = await getAllPosts();
        setMovies(data?.results?.length ? data.results : []);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false)
      }
    };

    fetchPosts();
  }, []);

  return (
    <div>
      <h1>Home page</h1>
      {error && <p>{error}</p>}
      {loading && <Loader/>}
      <ListMovies movies={movies}  />
    </div>
  );
};

export default HomePage;
