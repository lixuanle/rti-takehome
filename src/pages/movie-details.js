import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

import Header from "../components/header";
import InformationDetails from "../components/information-container";
import TrailersList from "../components/trailers-list";

const MovieDetails = () => {

  const { id } = useParams();

  const [additionalDetails, setAdditionalDetails] = useState()
  const [movieTrailers, setMovieTrailers] = useState();

  useEffect(() => {
    const getAdditionalDetails = async () => {
      const { data } = await axios({
        method: 'get',
        url: `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
      })
      setAdditionalDetails(data);
    }
    const getMovieTrailers = async () => {
      const { data: { results } } = await axios({
        method: 'get',
        url: `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
      })
      setMovieTrailers(results);
    }
    getAdditionalDetails();
    getMovieTrailers();
  }, [id])

  if (additionalDetails && movieTrailers) {
    const { overview, poster_path, release_date, runtime, title, vote_average } = additionalDetails;
    return (
      <>
        <Header headerTitle="Movie Details" />
        <DetailContainer>
          <TitleHeading>
            {title}
          </TitleHeading>
          <div style={{ padding: "25px" }}>
            <InformationDetails
              poster_path={poster_path}
              release_date={release_date}
              runtime={runtime} 
              title={title}
              vote_average={vote_average}
            />
            <OverviewText>{overview}</OverviewText>
            <TrailersList movieTrailers={movieTrailers}/>
          </div>
        </DetailContainer>
      </>
    )
  } return null
}

export default MovieDetails;

const DetailContainer = styled.div`
  margin-top: 67px;
`

const TitleHeading = styled.h2`
  background-color: #746A64;
  color: white;
  font-size: 1.3rem;
  font-weight: 500;
  margin: 0;
  padding: 20px 15px;
`

const OverviewText = styled.p`
  line-height: 24px;
  color: #757575;
  font-size: 0.8rem;
  font-weight: 500;
`