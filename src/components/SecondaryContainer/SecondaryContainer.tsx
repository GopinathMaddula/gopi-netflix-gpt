import { useSelector } from "react-redux";
import MovieList from "../MovieList/MovieList";
import "./SecondaryContainer.css";
import { RootState } from "../../store/store";

const SecondaryContainer = () => {
  const movies = useSelector((store: RootState) => store.movies);
  return (
    <div>
      <MovieList title={"Now Playing"} movies={movies?.nowPlayingMOvies} />
    </div>
  );
};

export default SecondaryContainer;
