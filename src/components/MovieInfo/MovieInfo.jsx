import React, { Component } from 'react';

import styles from './movieinfo.module.css';
import Axios from 'axios';


class MovieInfo extends Component{

    state = {
        loaded: false,
        movieData : null
    }

    componentDidMount(){
        Axios.get(`https://www.omdbapi.com/?i=${this.props.match.params.id}&apikey=dc0b287b`)
        .then(res => {
            console.log(res);
            this.setState({
                movieData:res.data,
                loaded:true
            })
        })
    }
    
    render(){
        let info = null;
        if(this.state.loaded){
            info =  <div className="row">
            <div className="col-lg-12">
                <div className={styles.movieContainer}>
        <h2>{this.state.movieData.Title}</h2>
                </div>
            </div>
            <div className="col-lg-6">
                <div className={styles.movieImage}>
                    <img src={this.state.movieData.Poster} />
                </div>
            </div>
            <div className="col-lg-6">
                <div className={styles.movieDescription}>
                    
        <p className="moviePlot">{this.state.movieData.Plot}</p>
                    <div className={styles.movieOtherInfo}>
                        <div className={styles.leftMovie}>
                            <p>Release date : 01 Oct 2010</p>
                        </div>
                        <div className={styles.rightMovie}>
                            <p>Directed By : {this.state.movieData.Director}</p>
                        </div>
                    </div>
                    <div className={styles.movieOtherInfo}>
                        <div className={styles.leftMovie}>
        <p>imdbRating : {this.state.movieData.imdbRating}/10</p>
                        </div>
                        <div className={styles.rightMovie}>
        <p>{this.state.movieData.Year}</p>
                        </div>
                    </div> 
                    
                    <div className="starcase">
                        <p>Star Cast : {this.state.movieData.Actors}</p>
                    </div>
                </div>
            </div>
        </div>
        }
        return(
            <div className="container">
                {info}
        </div>
        )
    }
}

export default MovieInfo;

