import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom';
import ErrorBoundary from 'components/ErrorBoundary';
import { Triangle } from 'react-loader-spinner';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { App } from 'components/App';
import reportWebVitals from './reportWebVitals';
import '../node_modules/modern-normalize/modern-normalize.css';
import './index.css';
/** @jsxImportSource @emotion/react */
import { jsx } from '@emotion/react';

const ErrorPage = lazy(() => import('components/ErrorPage'));
const HomePage = lazy(() => import('components/HomePage'));
const MoviesPage = lazy(() => import('components/MoviesPage'));
const MovieDetailsPage = lazy(() => import('components/MovieDetailsPage'));
const Cast = lazy(() => import('components/Cast'));
const Review = lazy(() => import('components/Review'));

ReactDOM.render(
  <ErrorBoundary>
    <BrowserRouter>
      <Suspense
        fallback={
          <div
            css={{
              width: '100%',
              height: '100vh',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Triangle
              height="100"
              width="100"
              color="grey"
              ariaLabel="loading"
            />
          </div>
        }
      >
        <Routes>
          <Route path="" element={<App />}>
            <Route path="/" element={<HomePage />} />
            <Route path="movies" element={<MoviesPage />}>
              <Route path=":movieId" element={<MovieDetailsPage />}>
                <Route path="cast" element={<Cast />} />
                <Route path="review" element={<Review />} />
              </Route>
            </Route>
            <Route path="*" element={<ErrorPage />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  </ErrorBoundary>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
