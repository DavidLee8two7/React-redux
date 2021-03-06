import React from 'react';
import VideoListItem from './video_list_item';

// when it's functional component it's props when it's class based component then it's this.props (closure)
// always add key. something about React's list rendering logic. it makes it more efficient by giving each unique key to each element
const VideoList = props => {
  const videoItems = props.videos.map( video => {
    return (
      <VideoListItem
        onVideoSelect={props.onVideoSelect}
        key={video.etag}
        video={video}/>
    );
  });

  return (
    <ul className="col-md-4 list-group">
      {videoItems}
    </ul>
  );
};

export default VideoList;
