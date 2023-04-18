import video from "../../../../assets/v1.mp4";
const Video = () => {
  return (
    <div>
      <div>
        <video src={video} controls></video>
      </div>
    </div>
  );
};

export default Video;
