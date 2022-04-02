import { useState } from 'react';
import { NavLink, Outlet, useParams, useSearchParams } from 'react-router-dom';
import axios from 'axios';
import ErrorBoundary from './ErrorBoundary';
/** @jsxImportSource @emotion/react */
import { jsx } from '@emotion/react';

const API_KEY = '68e1fd0d7aa4e116327801ed4f6bf747';

function MoviesPage() {
  const [searchResult, setSearchResult] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const params = useParams();

  const handleChange = e => {
    let query = e.target.value;
    setSearchParams({ query });
  };

  const handleSubmit = e => {
    e.preventDefault();
    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${searchParams.get(
          'query'
        )}&page=1&include_adult=false`
      )
      .then(response => {
        setSearchResult(response.data.results);
      })
      .catch(error => console.log(error));
    localStorage.setItem('query', JSON.stringify(searchParams.get('query')));
  };

  return (
    <ErrorBoundary>
      {params.movieId === undefined ? (
        <>
          <form css={{ marginBottom: '30px' }} onSubmit={handleSubmit}>
            <input
              placeholder='Enter movie name'
              name="search"
              onChange={handleChange}
              value={searchParams.get('query') || ''}
              type="text"
            ></input>
            <button type="submit">Search</button>
          </form>

          
            <ul css={{ listStyleType: 'none' }}>
              {searchResult.map(movie => (
                <li key={movie.id}>
                  <NavLink to={`${movie.id}`}>{movie.title}</NavLink>
                </li>
              ))}
            </ul>
          
        </>
      ) : (
        <Outlet />
      )}
    </ErrorBoundary>
  );
}

export default MoviesPage;
