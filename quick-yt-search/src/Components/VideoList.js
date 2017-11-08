import React from 'react';
import VideoListItem from './VideoListItem';

const VideoList = (props) => {
  const items = props.videos.map((video) => {
    return (
      <VideoListItem 
        onVideoSelect={props.onVideoSelect}
        key={video.id.videoId}
        video={video} />
    );
  });

  return <div className="VideoList">{items}</div>;
};

export default VideoList;
