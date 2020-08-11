import React from "react";

import {useHistory} from 'react-router-dom';
import data from "../../data.json";
import MovieCard from '../MovieCard/MovieCard';

const Movies = (props) => {
    
  const cardHandler = (id) => {
    console.log(id);
  };
  const history = useHistory()
  const myCards = data.map((x) => {
    return (
      <a onClick={()=> history.push(`/movies/${x.id}`)}>
        <MovieCard movieName={x.Title} year={x.Year} key={x.id}/>
      </a>
    );
  });

  return (
    <div className="container">
      <div className="row">{myCards}</div>      
    </div>
  );
};

export default Movies;
