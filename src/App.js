import axios from "axios";
import React from "react";
import Movie from "./Movie";
import "./App.css";

class App extends React.Component {
  state = {
    isLoading: true,
    moveis: [],
  };

  getMovies = async () => {
    const {
      data: {
        data: { movies },
      },
    } = await axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");

    this.setState({ movies, isLoading: false });
  };

  renderMovies = ({ movies }) => {
    return movies.map((movie) => {
      return (
        <Movie
          key={movie.id}
          id={movie.id}
          year={movie.year}
          title={movie.title}
          summary={movie.summary}
          poster={movie.medium_cover_image}
        />
      );
    });
  };

  componentDidMount() {
    this.getMovies();
  }

  render() {
    const { isLoading, movies } = this.state;

    return <div className="container">{isLoading ? "isLoading" : this.renderMovies({ movies })} </div>;
  }
}

export default App;
