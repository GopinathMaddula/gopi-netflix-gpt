import MovieCard from "../MovieCard/MovieCard.tsx";

interface Props {
  title: string;
  movies: any;
}

const MovieList = ({ title, movies }: Props) => {
  console.log(movies);
  return (
    <div>
      <h1>{title}</h1>
      <div>
        {movies.length &&
          movies?.map((eachMovie: any) => (
            <MovieCard posterPath={eachMovie?.poster_path} />
          ))}
      </div>
    </div>
  );
};

export default MovieList;
