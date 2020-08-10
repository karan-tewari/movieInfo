import React from "react";

import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

import {Route, useRouteMatch} from 'react-router-dom';

import data from "../../data.json";


const Movies = (props) => {
    let { path, url } = useRouteMatch();
    const {match : {params}} = props;
  const cardHandler = (id) => {
    console.log(id);
  };

  const myCards = data.map((x) => {
    return (
      <Card onClick={() => cardHandler(x.id)} key={x.id}>
        <CardContent>
          <Typography color="textSecondary" gutterBottom>
            {x.Title}
          </Typography>
          <Typography variant="h5" component="h2"></Typography>
          <Typography color="textSecondary">{x.Year}</Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    );
  });

  return (
    <div className="container">
      <div className="row">{myCards}</div>      
      
    </div>
  );
};

export default Movies;
