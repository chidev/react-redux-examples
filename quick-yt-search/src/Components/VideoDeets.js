import React from 'react';

const VideoDeets = ({video, noResults}) => {
  if (noResults) {
    return <div>No results!</div>;
  }
  else if (!video) {
    return <div>Loading...</div>;
  }

  const videoId = video.id.videoId;
  const url = `https://www.youtube.com/embed/${videoId}`;

  return (
    <div className="VideoDeets">
      <div className="VideoDeetsWrap EmbedContainer">
        <iframe src={url} title={videoId} frameBorder='0' allowFullScreen />
      </div>

      <div className="VideoDeetsInfo">
        <h3>{video.snippet.title}</h3>
        <div>{video.snippet.description}</div>
      </div>

    </div>
  );
}

export default VideoDeets;