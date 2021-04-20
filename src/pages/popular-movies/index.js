import { Link } from "react-router-dom";
import styled from "styled-components";

import Header from "../../components/header";

const PopularMovies = ({ movieData }) => {

  return (
    <> 
      <Header headerTitle="Pop Movies" />
      <MovieListContainer>
        {movieData?.map(({ id, poster_path, title }) => (
          <MovieLink key={id} to={`/movie/${id}`}>
            <MoviePoster src={`https://image.tmdb.org/t/p/w185${poster_path}`} alt={`${title} poster`}/>
          </MovieLink>
        ))}
      </MovieListContainer>
    </>
  )
}

export default PopularMovies;

const MovieListContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 66px;
`

const MovieLink = styled(Link)`
  width: 50%;
`

const MoviePoster = styled.img`
  width: 100%;
  height: 100%;
`


