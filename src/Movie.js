

const Movie = ({ movie }) => {
  return (
    <li className="movie" key={movie.id}>
      <img src={movie.poster} />
      <p>
        {movie.title} by {movie.director}
        was released on {movie.year}
      </p>
      <p>Rating: {movie.ranting}</p>
    </li>
  )
}

export default Movie;