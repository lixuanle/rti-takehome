import styled from "styled-components";

const InformationDetails = ({ poster_path, title, release_date, runtime, vote_average }) => {
  return (
    <InformationContainer>
      <img src={`https://image.tmdb.org/t/p/w154${poster_path}`} alt={`${title} poster`} width={120}/>
      <div style={{ marginLeft: "15px", width: "100%" }}>
        <div style={{ marginBottom: "40px" }}>
          <DetailsText style={{ fontSize: "1.4rem" }}>{release_date.split('-')[0]}</DetailsText>
          <DetailsText style={{ fontStyle: "italic", fontSize: "0.9rem" }}>{`${runtime} mins`}</DetailsText>
        </div>
        <p style={{ fontWeight: "bold" }}>{`${vote_average}/10`}</p>
        <FavoriteButton>
          Add to Favorite
        </FavoriteButton>
      </div>
    </InformationContainer>
  )
}

export default InformationDetails;

const InformationContainer = styled.div`
  display: flex;
`

const DetailsText = styled.p`
  margin: 0
`

const FavoriteButton = styled.button`
  width: 100%;
  padding: 17px;
  background-color: #746A64;
  color: white;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.1);
  border: 0;
  font-weight: 500;
  margin-top: 13px;
`