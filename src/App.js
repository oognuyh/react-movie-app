import axios from "axios";
import React, { Fragment, useState, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import SearchIcon from "@material-ui/icons/Search";
import styled from "styled-components";
import Loader from "./Loader";
import Movie from "./Movie";

class App extends React.Component {
  state = {
    isLoading: true,
    isFiltering: false,
    filteredMovies: [],
    movies: [],
    hasMore: true,
    pageNo: 1,
    userInput: "",
  };

  movieCount = 0;
  limit = 20;

  init = async () => {
    const {
      data: {
        data: { movies, movie_count },
      },
    } = await axios.get(`https://yts-proxy.now.sh/list_movies.json?sort_by=rating&page=${this.state.pageNo}`);

    this.movieCount = movie_count;
    this.setState({ movies, isLoading: false, pageNo: this.state.pageNo + 1 });
  };

  getMovies = async () => {
    if (this.state.movies.length >= this.movieCount) {
      this.setState({ hasMore: false });
      return;
    }

    const {
      data: {
        data: { movies },
      },
    } = await axios.get(`https://yts-proxy.now.sh/list_movies.json?sort_by=rating&page=${this.state.pageNo}`);

    this.setState({ movies: this.state.movies.concat(movies), pageNo: this.state.pageNo + 1 });
  };

  renderMovies = ({ movies }) => {
    return movies.map((movie) => {
      return (
        <Movie
          key={movie.id}
          id={movie.id}
          rating={movie.rating}
          genres={movie.genres}
          title={movie.title}
          summary={movie.summary}
          poster={movie.medium_cover_image}
        />
      );
    });
  };

  handleChange = (e) => {
    this.setState({ userInput: e.target.value });

    if (this.state.userInput.length < 2) {
      this.setState({ isFiltering: false, isLoading: false });
    }
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({ isLoading: true });
    this.searchMovies();
  };

  searchMovies = async () => {
    const { userInput } = this.state;

    if (userInput.length > 0) {
      this.setState({ isFiltering: true });

      const {
        data: {
          data: { movies },
        },
      } = await axios.get(`https://yts-proxy.now.sh/list_movies.json?query_term=${userInput}`);

      this.setState({ isLoading: false, isFiltering: true, filteredMovies: movies });
    } else {
      this.setState({ isFiltering: false, isLoading: false });
    }
  };

  componentDidMount() {
    this.init();
  }

  render() {
    const { isLoading, movies, hasMore, isFiltering, filteredMovies } = this.state;

    return (
      <Fragment>
        <Header>
          <SearchIcon />
          <form onSubmit={this.handleSubmit}>
            <input
              type="text"
              placeholder="Enter movie title, actor name or director name."
              value={this.state.userInput}
              onChange={this.handleChange}
            />
          </form>
        </Header>
        {isLoading ? (
          <Loader />
        ) : isFiltering ? (
          <Grid>{this.renderMovies({ movies: filteredMovies })}</Grid>
        ) : (
          <InfiniteScroll dataLength={movies.length} next={this.getMovies} hasMore={hasMore} loader={<Loader height={"100px"} />}>
            <Grid>{this.renderMovies({ movies })}</Grid>
          </InfiniteScroll>
        )}
      </Fragment>
    );
  }
}

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: auto;
  grid-gap: 10px;
  justify-content: center;
  margin: 10px;

  @media only screen and (max-width: 1648px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media only screen and (max-width: 848px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const Header = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  background-color: black;
  padding: 20px 0;
  color: white;

  input {
    height: 100%;
    width: 60vw;
    padding: 10px;
    border: none;
    background-color: none;
    border-radius: 6px;
    outline: none;
  }

  .MuiSvgIcon-root {
    margin-right: 15px;
  }
`;

export default App;
