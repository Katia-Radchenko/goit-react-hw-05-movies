import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

import Cast from './Cast/Cast';
import Reviews from './Reviews/Reviews';
import SharedLayout from './SharedLayout/SharedLayout';

const HomePage = lazy(() => import('../page/HomePage/HomePage'));
const MoviesPage = lazy(() => import('../page/MoviesPage/MoviesPage'));
const MovieDetails = lazy(() => import('../page/MovieDetails/MovieDetails'));
const NotFoundPage = lazy(() => import('../page/NotFoundPage/NotFoundPage'));


const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<HomePage />} />
        <Route path="movies" element={<MoviesPage />} />
        <Route path="movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
