import React from "react";
import "./App.css";
import Home from "./components/Home/Home";
import Movies from "./components/Movies/Movies";
import FourOFour from './components/FourOFour/FourOFour';
import MovieInfo from './components/MovieInfo/MovieInfo';
import {Switch, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path='/movies/:id' render={props => <MovieInfo {...props}/>}/>
        <Route path="/movies" component={Movies}></Route>
        <Route path="/" exact component={Home}></Route>
        <Route component={FourOFour}></Route>
      </Switch>
    </div>
  );
}

export default App;
