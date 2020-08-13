import React, { Component } from "react";

import { withRouter } from "react-router-dom";
// import data from "../../data.json";
import MovieCard from "../MovieCard/MovieCard";
import Axios from "axios";

import Fade from "react-reveal";

class Movies extends Component {
   state = {
      movieData: null,
      dataLoaded: false,
   };

   componentDidMount() {
      Axios.get("https://www.omdbapi.com/?s=batman&apikey=dc0b287b").then(
         (response) => {
            console.log(response);
            this.setState({
               dataLoaded: true,
               movieData: response.data.Search,
            });
         }
      );
   }

   render() {
      let myCards = null;
      const { history } = this.props;
      if (this.state.dataLoaded) {
         myCards = this.state.movieData.map((x) => {
            return (
               <div className="col-lg-3">
                  <a onClick={() => history.push(`/movies/${x.imdbID}`)}>
                     <Fade>
                        <MovieCard
                           movieName={x.Title}
                           year={x.Year}
                           key={x.imdbID}
                           movieImage={x.Poster}
                        />
                     </Fade>
                  </a>
               </div>
            );
         });
      }
      return (
         <div className="container">
            <div className="row">{myCards}</div>
         </div>
      );
   }
}

export default withRouter(Movies);
