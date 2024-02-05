import axios from 'axios';

const KEY = 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NTdkOWMxMDk0Yjc4NDM2NzQyMmMyMWM4ZWYxY2ZkNyIsInN1YiI6IjYyMmI0NDU2YTU3OWY5MDA2ZjFkODdlZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.N4TfXVz9yGcHwKklWeQ0SwZYEdTmBnPAQrHKEZjuBRE';


const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  headers: {
    accept: 'application/json',
    Authorization: KEY,
  },
});

export const getAllPosts = () => {
  return  instance.get('trending/movie/day', {
    params: {
      language: 'en-US',
    },
  });
  // return data.results;
};

export const getSearchWord = (search) => {
  return  instance.get('search/movie', {
    params: {
      query: `${search}`,
      include_adult: false,
      language: 'en-US',
      page: 1,
    },

  });
};

export const getSearchById= (id) => {
  return  instance.get(`/movie/${id}`, {
    params: {
      language: 'en-US',
    },

  });
};


export const getCast= (id) => {
  return  instance.get(`/movie/${id}/credits`, {
    params: {
      language: 'en-US',
    },

  });
};
export const getReviews= (id) => {
  return  instance.get(`/movie/${id}/reviews`, {
    params: {
      language: 'en-US',
    },

  });
};





// const options = {
//   method: 'GET',
//   headers: {
//     accept: 'application/json',
//     Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NTdkOWMxMDk0Yjc4NDM2NzQyMmMyMWM4ZWYxY2ZkNyIsInN1YiI6IjYyMmI0NDU2YTU3OWY5MDA2ZjFkODdlZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.N4TfXVz9yGcHwKklWeQ0SwZYEdTmBnPAQrHKEZjuBRE',
//   },
// };
//
// fetch('https://api.themoviedb.org/3/account/null', options)
//   .then(response => response.json())
//   .then(response => console.log(response))
//   .catch(err => console.error(err));
