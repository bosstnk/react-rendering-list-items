import "./App.css";
import movies from "./data/movies";
import MovieCard from "./MovieCard";

function App() {
  return (
    <div className="App">
      <section className="movie-list-section">
        <h1>Movie List Section</h1>
        {/* Render Movie Lists Here */}
        {movies.map((movie) => {
          return (
          <MovieCard movie={movie}/>
        )})}
      </section>
    </div>
  );
}

export default App;
