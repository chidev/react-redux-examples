import React from 'react';

const VideoListItem = ({video, onVideoSelect}) => {
  return (
    <div className="VideoListItem" onClick={() => onVideoSelect(video)}>
      <img src={video.snippet.thumbnails.default.url} alt="thumb" />
      <span>{video.snippet.title}</span>
    </div>
  );
};

export default VideoListItem;