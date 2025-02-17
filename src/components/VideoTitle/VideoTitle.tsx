import "./VideoTitle.css";

interface Props {
  title: string;
  overView: string;
}
const VideoTitle = ({ title, overView }: Props) => {
  return (
    <div className="video-title-container">
      <div className="title-container">
        <h1
          style={{ fontSize: "24px", fontWeight: "bold", marginBottom: "16px" }}
        >
          {title}
        </h1>
        <h2 style={{ fontSize: "20px", marginBottom: "16px" }}>{overView}</h2>
        <div className="buttons-container">
          <button className="button play-button">Play</button>
          <button className="button play-button">more info</button>
        </div>
      </div>
    </div>
  );
};

export default VideoTitle;
