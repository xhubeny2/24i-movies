import React, { PureComponent, createRef } from 'react';
import 'shaka-player/dist/controls.css';
import shaka from 'shaka-player/dist/shaka-player.ui.js';

//component - video player (Shaka Player) - source: https://github.com/google/shaka-player/
class VideoPlayer extends PureComponent{

	constructor(props){

		super(props);

		//Creating reference to store video component on DOM
		this.videoComponent = createRef();

		//Creating reference to store video container on DOM
		this.videoContainer = createRef();

		//Initializing reference to error handlers
		this.onErrorEvent = this.onErrorEvent.bind(this);
		this.onError = this.onError.bind(this);
	}

	onErrorEvent(event) {
	  // Extract the shaka.util.Error object from the event.
	  this.onError(event.detail);
	}

	onError(error) {
	  // Log the error.
	  console.error('Error code', error.code, 'object', error);
	}

	componentDidMount(){

		//Link to MPEG-DASH video
        var manifestUri = 'https://storage.googleapis.com/shaka-demo-assets/bbb-dark-truths-hls/hls.m3u8';

		//Getting reference to video and video container on DOM
		const video = this.videoComponent.current;
		const videoContainer = this.videoContainer.current;

		//Initialize shaka player
		var player = new shaka.Player(video);
		  
		//Setting up shaka player UI
      	const ui = new shaka.ui.Overlay(player, videoContainer, video);
      	ui.getControls();

		// Listen for error events.
  		player.addEventListener('error', this.onErrorEvent);

  		// Try to load a manifest.
	  	// This is an asynchronous process.
	  	player.load(manifestUri).then(() => {
		    // This runs if the asynchronous load is successful.
		    console.log('The video has now been loaded!');
	  	}).catch(this.onError);  // onError is executed if the asynchronous load fails.

	}

	render(){
		return(
			<div className="video-container" ref={this.videoContainer}>
				<video 
					className="shaka-video"
					ref={this.videoComponent}
				/>
			</div>
		);
	}
}

export default VideoPlayer;