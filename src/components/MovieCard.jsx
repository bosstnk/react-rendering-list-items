import movies from "../data/movies";

function MovieCard() {
  return (
    <div
      style={{
        boxSizing: "border-box",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        minHeight: "100vh", 
        width: "100%",
        gap: "20px",
        backgroundColor: "#E0EAFF",
        paddingBottom: "40px", 
        margin: 0,
      }}
    >
      <h1 style={{ fontSize: "40px", fontWeight: "bold", color: "black", margin: "20px 0" }}>
        Movie List Section
      </h1>

      {movies.map((movie) => (
        <div
          key={movie.id}
          style={{
            boxSizing: "border-box",
            display: "flex",
            width: "400px",
            minHeight: "210px", 
            backgroundColor: "#FFFFFF",
            borderRadius: "10px",
            boxShadow: "0px 4px 40px 0px #917C7C40",
            padding: "20px",
            gap: "20px",
          }}
        >
          <img
            src={movie.image}
            alt={movie.title}
            style={{
              width: "102px",
              height: "100px",
              borderRadius: "10px",
              objectFit: "cover",
              flexShrink: 0, 
            }}
          />
          
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              color: "#181818",
              gap: "12px",
              flex: 1, 
            }}
          >
            <span style={{ fontSize: "20px", fontWeight: "bold" }}>
              Title: {movie.title}
            </span>
            <span>Year: {movie.year}</span>
            <span>Runtime: {movie.runtime}</span>
            
            <div style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}>
              <span style={{ flexShrink: 0 }}>Genres:</span>
              <div style={{ display: "flex", gap: "5px", flexWrap: "wrap" }}>
                {movie.genres.map((genre) => (
                  <span
                    key={genre} 
                    style={{
                      backgroundColor: "#EAAC99",
                      padding: "4px 12px",
                      borderRadius: "15px",
                      fontSize: "14px",
                      fontWeight: "500",
                    }}
                  >
                    {genre}
                  </span>
                ))}
              </div>
            </div>
            
            <span>IMDB Ratings: {movie.imdbRating}</span>
            <span>IMDB Votes: {movie.imdbVotes}</span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default MovieCard;