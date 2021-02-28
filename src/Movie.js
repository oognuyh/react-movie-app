import React from "react";
import PropTypes from "prop-types";
import Rating from "./Rating";
import styled from "styled-components";

const Movie = ({ id, rating, genres, title, summary, poster }) => {
  return (
    <Card>
      <Left background={poster} />
      <Right>
        <Details>
          <Title>{title}</Title>
          <Rating rating={rating} flex="1" />
          <Genres>
            {genres.map((genre) => {
              return <Genre key={genre}>{genre}</Genre>;
            })}
          </Genres>
          <Summary>{summary.length > 380 ? summary.slice(0, 380) + " ..." : summary}</Summary>
          <DetailsButton>
            <h3>Show details</h3>
          </DetailsButton>
        </Details>
      </Right>
    </Card>
  );
};

const Card = styled.div`
  width: auto;
  height: 350px;
  margin: 2rem;
  display: flex;
  background-color: white;
  border-radius: 15px;
  box-shadow: 0 15px 50px 10px rgba(0, 0, 0, 0.4);
`;

const Left = styled.div`
  border-radius: 15px 0 0 15px;
  flex: 4;
  background: url(${(props) => props.background});
  background-repeat: no-repeat;
  background-size: 100% 100%;
`;

const Right = styled.div`
  flex: 6;
  border-radius: 0 15px 15px 0;
  padding: 20px;
  background-color: black;
  overflow: hidden;
`;

const Details = styled.div`
  height: 100%;
  color: white;
  display: flex;
  flex-flow: column nowrap;
  overflow: hidden;
`;

const Title = styled.div`
  flex: 1;
  font-size: 1.5rem;
  font-weight: 800;
`;

const Genres = styled.div`
  flex: 1;
  display: flex;
  flex-flow: row wrap;
  align-items: center;
`;

const Genre = styled.div`
  font-size: 0.7rem;
  background: yellow;
  color: black;
  font-weight: 700;
  margin: 3px;
  border-radius: 40px;
  padding: 0px 7px;
`;

const Summary = styled.div`
  flex: 6;
  overflow: scroll;
  --ms-overflow-style: none;
  ::-webkit-scrollbar {
    display: none;
  }
`;

const DetailsButton = styled.button`
  flex: 1;
  align-self: flex-end;
  width: auto;
  margin-top: 10px;
  background-color: yellow;
  border: none;

  :hover {
    opacity: 0.8;
  }

  h3 {
    font-size: 0.8rem;
    font-weight: 900;
    line-height: 0.8;
  }
`;

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  rating: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
};

export default Movie;
