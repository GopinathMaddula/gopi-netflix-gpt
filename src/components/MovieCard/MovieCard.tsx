import { MOVIE_IMG } from "../../utils/videoConstants";

interface Props {
  posterPath: string;
}

const MovieCard = ({ posterPath }: Props) => {
  console.log(posterPath);
  return (
    <div>
      <img src={MOVIE_IMG + posterPath} alt="movie-logo" />
    </div>
  );
};

export default MovieCard;
