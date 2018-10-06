import React from 'react';
import VideoListItem from './video_list_item';

const VideoList = (props) => {

	console.log(props);

	const videoItems = props.videos.map((video) => {
		return (
			<VideoListItem
				key={video.etag}
				video = {video}
				onVideoSelect = {props.onVideoSelect}
			/>
		)
	});

	return (
		<ul className="col-md-12 list-group">
			{videoItems}
		</ul>
	);
}

export default VideoList;