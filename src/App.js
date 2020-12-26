import React from "react";
import "./style.css";
import SearchBar from "./components/SearchBar";
import MovieList from "./components/MovieList";
import axios from "axios";

const port = process.env.PORT || 3003;
require("dotenv").config();

class App extends React.Component {
  state = {
    movies: [],
    searchQuery: "",
  };

  async componentDidMount() {
    const response = await axios.get(
      `https://api.themoviedb.org/3/list/7069679?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
    );
    console.log(response.data.items);
    this.setState({ movies: response.data.items });
  }

  deleteMovie = async (movie) => {
    axios.post(
      `https://api.themoviedb.org/3/list/7069679/remove_item?media_id=${movie.id}&api_key=${process.env.REACT_APP_API_KEY}&session_id=${process.env.REACT_APP_SESSION_ID}`
    );
    const newMovieList = this.state.movies.filter((m) => m.id !== movie.id);
    this.setState((state) => ({
      movies: newMovieList,
    }));
  };

  searchMovie = (event) => {
    this.setState({ searchQuery: event.target.value });
  };

  render() {
    let filteredMovie = this.state.movies.filter((movie) => {
      return (
        movie.original_title
          .toLocaleLowerCase()
          .indexOf(this.state.searchQuery.toLocaleLowerCase()) !== -1
      );
    });

    return (
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <SearchBar searchMovieProp={this.searchMovie} />
          </div>
        </div>
        <MovieList movies={filteredMovie} deleteMovieProp={this.deleteMovie} />
      </div>
    );
  }
}
export default App;
