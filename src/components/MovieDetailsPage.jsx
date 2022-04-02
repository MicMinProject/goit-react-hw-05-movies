import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, NavLink, Outlet, useNavigate } from 'react-router-dom';
/** @jsxImportSource @emotion/react */
import { jsx } from '@emotion/react';

const API_KEY = '68e1fd0d7aa4e116327801ed4f6bf747';

export default function MovieDetailsPage() {
  const [genresStringArr, setGenresStringArr] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState([]);
  let movie = '';
  let genresArr = [];
  let trendingMovies = [];
  let searchingMovies = [];
  let params = useParams();
  let arr = [];
  const navigate = useNavigate();

  const handlerReturn = () => {
    navigate(-1);
  };

  const fetchTrending = async () => {
    await axios
      .get(`https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`)
      .then(response => {
        trendingMovies = response.data.results;
      })
      .catch(error => error.status_message);
  };

  const fetchSearch = async () => {
    await axios
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${localStorage.getItem(
          'query'
        )}&page=1&include_adult=false`
      )
      .then(response => {
        searchingMovies = response.data.results;
      })
      .catch(error => console.log(error));
  };

  const fetchGenres = async () => {
    await axios
      .get(`https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}`)
      .then(response => {
        genresArr = response.data.genres;
      })
      .catch(error => console.log(error));
  };

  const findMovie = async movieId => {
    await fetchGenres();
    await fetchSearch();
    await fetchTrending();
    movie =
      trendingMovies.find(movie => movie.id === movieId) === undefined
        ? searchingMovies.find(movie => movie.id === movieId)
        : trendingMovies.find(movie => movie.id === movieId);
    arr = movie.genre_ids;
    setGenresStringArr(
      arr.map(genre => genresArr.find(item => genre === item.id).name)
    );
    setSelectedMovie(movie);
  };

  useEffect(() => {
    findMovie(parseInt(params.movieId, 10));
    return;
  }, []);

  return (
    <>
      <div
        css={{
          width: '100%',
          display: 'flex',
          padding: '0 20px',
          borderBottom: 'solid 2px',
        }}
      >
        <div
          css={{
            width: '200px',
            marginBottom: '30px',
          }}
        >
          <button
            onClick={handlerReturn}
            type="button"
            css={{ marginBottom: '10px' }}
          >
            &#8592; Go back
          </button>
          <img
            css={{
              objectFit: 'contain',
            }}
            src={
              selectedMovie.poster_path !== undefined
                ? `https://image.tmdb.org/t/p/w500/${selectedMovie.poster_path}`
                : ''
            }
            alt={`${selectedMovie.title} poster`}
            width="200px"
            height="300px"
          />
        </div>
        <div
          css={{
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
          }}
        >
          <h2
            css={{
              marginLeft: '20px',
              marginBottom: '20px',
              paddingTop: '40px',
            }}
          >
            {`${selectedMovie.title} (${new Date(
              selectedMovie.release_date
            ).getFullYear()})`}
          </h2>
          <p
            css={{
              marginLeft: '20px',
              marginBottom: '20px',
            }}
          >
            User score: {selectedMovie.vote_average * 10} %
          </p>
          <h3
            css={{
              marginLeft: '20px',
              marginBottom: '20px',
            }}
          >
            Overwiew
          </h3>
          <p
            css={{
              marginLeft: '20px',
              marginBottom: '20px',
            }}
          >
            {selectedMovie.overview}
          </p>
          <h4
            css={{
              marginLeft: '20px',
              marginBottom: '20px',
            }}
          >
            Genres
          </h4>
          <p
            css={{
              marginLeft: '20px',
              marginBottom: '20px',
            }}
          >
            {genresStringArr.join(' ')}
          </p>
        </div>
      </div>
      <div
        css={{
          width: '100%',
          paddingTop: '30px',
          paddingBottom: '30px',
          marginBottom: '30px',
          paddingLeft: '20px',
          borderBottom: 'solid 2px',
        }}
      >
        <p
          css={{
            marginBottom: '30px',
          }}
        >
          Additional informations
        </p>
        <ul>
          <li>
            <NavLink
              style={({ isActive }) => {
                return { color: isActive ? 'red' : '' };
              }}
              to={`cast`}
            >
              cast
            </NavLink>
          </li>
          <li>
            <NavLink
              style={({ isActive }) => {
                return { color: isActive ? 'red' : '' };
              }}
              to={`review`}
            >
              reviews
            </NavLink>
          </li>
        </ul>
      </div>
      <div
        css={{
          backgroundColor: '#e0e0e0',
        }}
      >
        <Outlet />
      </div>
    </>
  );
}
