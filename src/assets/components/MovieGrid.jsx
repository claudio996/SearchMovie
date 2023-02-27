import { movies } from "../../movies";
import { MovieCard } from "./MovieCard";

export const MovieGrid = () => {
  return (
    <ul className="moviesGrid">
      {movies.map((movie) => (
        <MovieCard  key={movie.id} movie={movie} />
      ))}
    </ul>
  );
};
