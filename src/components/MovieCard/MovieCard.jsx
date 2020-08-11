import React from "react";

export default function MovieCard(props) {
  return (
    <div className="card">
      <img className="card-img-top" src="https://m.media-amazon.com/images/M/MV5BOGUyZDUxZjEtMmIzMC00MzlmLTg4MGItZWJmMzBhZjE0Mjc1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg" alt="Card image cap" />
      <div className="card-body">
        <h5 className="card-title">{props.movieName}</h5>
        <p className="card-text">{props.year}</p>
        <a href="#" className="btn btn-primary">
          Go somewhere
        </a>
      </div>
    </div>
  );
}
