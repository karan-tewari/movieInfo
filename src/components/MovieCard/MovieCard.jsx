import React from "react";

export default function MovieCard(props) {
  return (
    <div className="card">
      <img className="card-img-top" src={props.movieImage} alt="Card image cap" />
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
