import axios from "axios"
import { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import MovieDetails from "./pages/movie-details";
import PopularMovies from "./pages/popular-movies";

const App = () => {

  const [movieData, setMovieData] = useState()

  useEffect(() => {
    const getMovieData = async () => {
      const { data: { results } } = await axios({
        method: 'get',
        url: `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}`,
      })
      setMovieData(results);
    }
    getMovieData()
  }, [])

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <PopularMovies movieData={movieData} />
        </Route>
        {movieData?.map(index => (
          <Route key={index} exact path={`/movie/:id`}>
            <MovieDetails />
          </Route>
        ))}
      </Switch>
    </Router>
  )
}

export default App;
