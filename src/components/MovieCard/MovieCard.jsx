import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';


export default function MovieCard(props) {

  return (
    <Card>
    <CardContent>
      <Typography color="textSecondary" gutterBottom>
        {props.movieName}
      </Typography>
      <Typography variant="h5" component="h2">
      
      </Typography>
      <Typography color="textSecondary">
        {props.year}
      </Typography>
    </CardContent>
    <CardActions>
      <Button size="small">Learn More</Button>
    </CardActions>
  </Card>
  );
}