import styled from "styled-components";

const TrailersList = ({ movieTrailers }) => {
  
  return (
    <TrailerContainer>
      <TrailerHeading>
        Trailers
      </TrailerHeading>
      {movieTrailers.length > 0 && movieTrailers?.map(({ name, key, type}) => (
        type === "Trailer" ? <iframe key={key} style={{ width: "100%", marginBottom: "10px" }} title={name} src={`https://www.youtube.com/embed/${key}`} /> : null
      ))}
    </TrailerContainer>
  )
}

export default TrailersList;

const TrailerHeading = styled.h3`
  color: #757575;
  border-bottom: 1px solid #DEDEDE;
  padding-bottom: 8px;
  text-transform: uppercase;
  font-size: 1.0rem;
  font-weight: 500;
`

const TrailerContainer = styled.div`

`