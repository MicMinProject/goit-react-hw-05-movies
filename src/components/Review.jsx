import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
/** @jsxImportSource @emotion/react */
import { jsx } from '@emotion/react';

const API_KEY = '68e1fd0d7aa4e116327801ed4f6bf747';

function Review() {
  const [reviews, setReviews] = useState([]);
  let params = useParams();

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${params.movieId}/reviews?api_key=${API_KEY}&language=en-US&page=1`
      )
      .then(response => {setReviews(response.data.results)})
      .catch(error => console.log(error));
  }, []);

  return(
    reviews.length === 0 ? (
    <p>We do not have any results for this movie</p>
    ) : (
    <ul>
      {reviews.map(review => (
        <li
          key={review.id}
          css={{
            marginBottom: '30px',
          }}
        >
          <p
            css={{
              fontWeight: 'bold',
              fontSize: '20px',
              marginBottom: '20px',
            }}
          >
            Author: {review.author}
          </p>
          <p>{review.content}</p>
        </li>
      ))}
    </ul>
    )
  )
}

export default Review ;
