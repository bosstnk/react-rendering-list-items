import "./App.css";
import movies from "./data/movies";
import MovieCard from "./MovieCard";

function App() {
  return (
    <div className="App">
      <section className="movie-list-section">
        {/* Render Movie Lists Here */}
        {movies.map((movie) => {
          return (
          <MovieCard 
          title= {movie.title}
          year= {movie.year}
          runtime= {movie.runtime}
          genres= {movie.genres}
          image= {movie.image}
          imdbRating= {movie.imdbRating}
          imdbVotes= {movie.imdbVotes}
          />
        )})}
      </section>
    </div>
  );
}

export default App;
