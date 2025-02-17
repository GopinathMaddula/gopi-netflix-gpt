import { useSelector } from "react-redux";
import VideoBackground from "../VideoBackground/VideoBackground";
import VideoTitle from "../VideoTitle/VideoTitle";
import { RootState } from "../../store/store";

const MainContainer = () => {
  const movies = useSelector(
    (state: RootState) => state.movies.nowPlayingMOvies
  );
  if (!movies) return;
  const mainMovie = movies?.[5];
  console.log(mainMovie);
  if (!mainMovie) return;
  const { original_title, overview, id } = mainMovie;

  return (
    <div style={{ position: "relative" }}>
      <VideoTitle title={original_title} overView={overview} />
      <VideoBackground id={id} />
    </div>
  );
};

export default MainContainer;
