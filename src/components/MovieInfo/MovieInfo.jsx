import React from 'react';

import styles from './movieinfo.module.css';

const MovieInfo = (props) => {
    const { match } = props
    return(
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className={styles.movieContainer}>
                        <h2>The Social Network</h2>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className={styles.movieImage}>
                        <img src="https://m.media-amazon.com/images/M/MV5BOGUyZDUxZjEtMmIzMC00MzlmLTg4MGItZWJmMzBhZjE0Mjc1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg" />
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className={styles.movieDescription}>
                        {/* <h1>Movie Info, {match.params.id}</h1> */}
                        <p className="moviePlot">As Harvard student Mark Zuckerberg creates the social networking site that would become known as Facebook, he is sued by the twins who claimed he stole their idea, and by the co-founder who was later squeezed out of the business.</p>
                        <div className={styles.movieOtherInfo}>
                            <div className={styles.leftMovie}>
                                <p>Release date : 01 Oct 2010</p>
                            </div>
                            <div className={styles.rightMovie}>
                                <p>Directed By : David Fincher</p>
                            </div>
                        </div>
                        <div className={styles.movieOtherInfo}>
                            <div className={styles.leftMovie}>
                                <p>imdbRating : 7.7/10</p>
                            </div>
                            <div className={styles.rightMovie}>
                                <p>2010</p>
                            </div>
                        </div> 
                        
                        <div className="starcase">
                            <p>Star Cast : Jesse Eisenberg, Rooney Mara, Bryan Barter, Dustin Fitzsimons</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MovieInfo;

