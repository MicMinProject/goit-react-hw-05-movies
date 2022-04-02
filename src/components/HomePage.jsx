import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
/** @jsxImportSource @emotion/react */
import { jsx } from '@emotion/react';

const API_KEY = '68e1fd0d7aa4e116327801ed4f6bf747';
let trendingMovies = [];

const fetchTrending = async () => {
  await axios
    .get(`https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`)
    .then(response => {
      trendingMovies = response.data.results;
    })
    .catch(error => error.status_message);
};

const queue = () => {
  fetchTrending();
};
queue();

function HomePage() {
  const [trendingMoviesHome, setTrending] = useState([]);
  useEffect(() => {
    setTrending(trendingMovies);
    return;
  }, []);

  return (
    <>
      <h1 css={{ marginBottom: '30px' }}>Trending today</h1>
      <ul css={{ listStyleType: 'none' }}>
        {trendingMoviesHome
          ? trendingMoviesHome.map(movie => (
              <li key={movie.id}>
                <Link to={`movies/${movie.id}`}>{movie.title}</Link>
              </li>
            ))
          : null}
      </ul>
    </>
  );
}

export default HomePage;
