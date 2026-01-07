import "./App.css";
import movies from "./data/movies";

function MovieCard({movie}) {
  return (
    <div className="movieCard" key={movie.title}>
      <img className="imageCard" src={movie.image} alt={movie.title} />
      <div className="movieDetail">
        <p className="textCard">{`Title: ${movie.title}`}</p>
        <p className="textCard">{`Year: ${movie.year}`}</p>
        <p className="textCard">{`Runtime: ${movie.runtime}`}</p>
        <p className="textCardGenre">Genres:{movie.genres.map((genre) => (
              <span key={genre} className="genreStyle">
                {genre}
              </span>
            ))}
        </p>
        <p className="textCard">{`IMDB Ratings: ${movie.imdbRating}`}</p>
        <p className="textCard">{`IMDB Votes: ${movie.imdbVotes}`}</p>
      </div>
    </div>
  );
}

export default MovieCard;
