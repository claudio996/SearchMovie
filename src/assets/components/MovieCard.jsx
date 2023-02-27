
export const MovieCard = ({ movie }) => {
  const imageUrl = "https://image.tmdb.org/t/p/w300" + movie.poster_path;

  return (
    <li className="movieCard">

      <img width={230} 
      height={345}
      className="movieImage" src={imageUrl} alt={movie.title} />
      <div>{movie.title}</div>
    </li>
  );
};
