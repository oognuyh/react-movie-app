import axios from "axios";
import React, { Fragment } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import styled from "styled-components";
import Loader from "./Loader";
import Movie from "./Movie";

class App extends React.Component {
  state = {
    isLoading: true,
    moveis: [],
    hasMore: true,
    pageNo: 1,
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
    if (this.state.moveis.length >= this.movieCount) {
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

  componentDidMount() {
    this.init();
  }

  render() {
    const { isLoading, movies, hasMore } = this.state;

    return (
      <Fragment>
        {isLoading ? (
          <Loader />
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

export default App;
