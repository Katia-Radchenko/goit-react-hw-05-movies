import axios from 'axios';

const AUTH_KEY =
  'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5M2ZkMjA5NzBkNzRkOWEzZjk0NjZkOGQ2YzllNjI5NyIsInN1YiI6IjYxOTNhYjExNDJmMTlmMDA0MzFlZTkzYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.z6zVAqAKYmCRhBa4xmofDsVBFw9-x8O5I_GnOqiw-F8';
axios.defaults.headers.common['Authorization'] = `Bearer ${AUTH_KEY}`;

//экспорт функций запросов
class SearchAPI {
  #baseUrl = 'https://api.themoviedb.org/3';
  #page = 1;

  constructor() {
    this.searchQuery = '';
  }

  get page() {
    return this.#page;
  }

  set page(numOfPage) {
    this.#page = numOfPage;
  }

  ressetPage = () => {
    this.#page = 1;
  };

  //запрос на самые популярные фильмы за день
  getDayTrandingMovies = async () => {
    try {
      const response = await axios.get(`${this.#baseUrl}/trending/movie/day`);
      const movies = await response.data;
      return movies;
    } catch (error) {
      throw error.response.data.status_message;
    }
  };

  //запрос на фильм по ID
  getMovieById = async movieId => {
    try {
      const response = await axios.get(`${this.#baseUrl}/movie/${movieId}`);
      const movie = await response.data;
      return movie;
    } catch (error) {
      throw error.response.data.status_message;
    }
  };

  //поиск кинофильма по ключевому слову на странице фильмов
  getMoviesByQuery = async () => {
    try {
      const response = await axios.get(
        `${this.#baseUrl}/search/movie?query=${this.searchQuery}&page=${
          this.#page
        }`
      );
      const movie = await response.data;
      return movie;
    } catch (error) {
      throw error.response.data.status_message;
    }
  };

  //запрос информации о актёрском составе для страницы кинофильма
  getMovieCredits = async movieId => {
    try {
      const response = await axios.get(
        `${this.#baseUrl}/movie/${movieId}/credits`
      );
      const movie = await response.data;
      return movie;
    } catch (error) {
      throw error.response.data.status_message;
    }
  };

  //запрос обзоров для страницы кинофильма
  getMovieReviews = async movieId => {
    try {
      const response = await axios.get(
        `${this.#baseUrl}/movie/${movieId}/reviews?page=${this.#page}`
      );
      const movie = await response.data;
      return movie;
    } catch (error) {
      throw error.response.data.status_message;
    }
  };
}

const apiService = new SearchAPI();
export default apiService;
