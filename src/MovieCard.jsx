import "./App.css";

function MovieCard({
  title,
  year,
  runtime,
  image,
  genres,
  imdbRating,
  imdbVotes,
}) {
  return (
    <div className="movieCard">
      <img className="imageCard" src={image} alt={title} />
      <div className="movieDetail">
        <p className="textCard">{`Title: ${title}`}</p>
        <p className="textCard">{`Year: ${year}`}</p>
        <p className="textCard">{`Runtime: ${runtime}`}</p>
        <p className="textCardGenre">Genres:
          <span className="genres">
            {genres.map((genre) => (
              <span key={genre} className="genreStyle">
                {genre}
              </span>
            ))}
          </span>
        </p>
        <p className="textCard">{`IMDB Ratings: ${imdbRating}`}</p>
        <p className="textCard">{`IMDB Votes: ${imdbVotes}`}</p>
      </div>
    </div>
  );
}

export default MovieCard;
