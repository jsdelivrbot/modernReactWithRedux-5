import React from 'react';
import VideoListItem from './video_list_item';

// the props here is the state send out from the App in the index.js
// <VideoList videos={this.state.videos} />
const VideoList = (props) => {

    // set the props from index.js videos to the VideoListItem
    const videoItems = props.videos.map((video) => {
        return (
            <VideoListItem
                onVideoSelect={props.onVideoSelect}
                key={video.etag}
                video={video} />
        );
    });

    return (
        <ul className="col-md-4 list-group">
            {videoItems}
        </ul>
    );
};

export default VideoList;