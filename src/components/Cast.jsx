import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
/** @jsxImportSource @emotion/react */
import { jsx } from '@emotion/react';

const API_KEY = '68e1fd0d7aa4e116327801ed4f6bf747';

function Cast() {
  const [cast, setCast] = useState([]);
  let params = useParams();

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${params.movieId}/credits?api_key=${API_KEY}&language=en-US`
      )
      .then(response => setCast(response.data.cast))
      .catch(error => console.log(error));
  }, []);

  return (
    cast.length === 0 ? (
      <p>We do not have any results for this movie</p>
      ) : (<ul
      css={{
        listStyleType: 'none',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
      }}
    >
      {cast !== undefined
        ? cast.map(actor => (
            <li
              css={{
                width: '400px',
                marginBottom: '20px',
                boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px',
                fontSize: '15px',
                backgroundColor: '#f8f8f8',
              }}
              key={actor.id}
            >
              <img
                css={{
                  marginBottom: '10px',
                  width: '100%',
                  height: '600px',
                  objectFit: 'cover',
                }}
                src={
                  actor.profile_path !== null
                    ? `https://image.tmdb.org/t/p/w500/${actor.profile_path}`
                    : `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRl20U-Cn3Bd2KqDtcRya79hyXIH_hRO7T1_w&usqp=CAU`
                }
                alt={actor.name}
              ></img>
              <p
                css={{
                  marginBottom: '10px',
                  paddingLeft: '5px',
                  paddingRight: '5px',
                }}
              >
                {actor.name}
              </p>
              <p
                css={{
                  marginBottom: '10px',
                  paddingLeft: '5px',
                  paddingRight: '5px',
                }}
              >
                Character: {actor.character}
              </p>
            </li>
          ))
        : null}
    </ul>)
  );
}

export default Cast ;
