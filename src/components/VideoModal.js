import React from 'react';
import { Modal } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import VideoPlayer from '../components/VideoPlayer';

// component - modal for video
const VideoModal = props => {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        style={{opacity:1}}
      >
        {/* header with the name of movie/serie */}
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            {props.title}
          </Modal.Title>
        </Modal.Header>

        {/* body with video player */}
        <Modal.Body>
            <VideoPlayer />
        </Modal.Body>

        {/* footer with close button */}
        <Modal.Footer>
          <div className="w3l_sign_in_register watch_movie">
            <button onClick={props.onHide}>
              Close
            </button>
          </div>
        </Modal.Footer>
      </Modal>
    );
}

export default VideoModal
