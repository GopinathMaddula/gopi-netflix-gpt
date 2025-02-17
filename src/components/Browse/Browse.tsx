import { useEffect } from "react";
import "./Browse.css";
import { MOVIE_LIST_URL, options } from "../../utils/videoConstants";
import MainContainer from "../MainContainer/MainContainer";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../../store/moviesSlice.ts";

const Browse = () => {
  const dispatch = useDispatch();
  const fetchMoviesList = async () => {
    const data = await fetch(MOVIE_LIST_URL, options);
    const movies = await data.json();
    if (movies) {
      dispatch(addNowPlayingMovies(movies?.results));
    }

    console.log(movies);
  };
  useEffect(() => {
    fetchMoviesList();
  }, []);
  return (
    <div className="main-container">
      <MainContainer />
    </div>
  );
};

export default Browse;
