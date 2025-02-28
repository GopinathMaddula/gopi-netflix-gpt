import { useEffect, useState } from "react";
import { options } from "../../utils/videoConstants";
import "./VideoBackground.css";

interface Props {
  id: string | number;
}

const VideoBackground = ({ id }: Props) => {
  const [trailerKey, setTrailerKey] = useState("");
  const getVideoBg = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${id}/videos`,
      options
    );
    const movieData = await data.json();
    const movieTrailer = movieData?.results?.filter(
      (movie: any) => movie?.type === "Trailer"
    );
    setTrailerKey(movieTrailer[0]?.key);
  };
  useEffect(() => {
    getVideoBg();
  }, []);
  return (
    <div className="bg-container">
      <iframe
        className="bg-video"
        src={
          "https://www.youtube.com/embed/" +
          trailerKey +
          "?si=F-DB4WBahylIPCNz" +
          "?rel=0&autoplay=1&mute=1"
        }
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
