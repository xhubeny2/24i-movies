import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';
import qs from 'query-string';

import { getMovieDetail, getSerieDetail } from '../api/apiRequests';
import { fetchData } from '../redux/actions/dataActions';

import { IMAGE_URL } from '../constants/apiConstants'
import { DETAIL } from '../constants/actionConstants';

import Loader from './Loader';
import About from './About';
import VideoModal from './VideoModal';

//component - displays detail of movie / tv serie
const Detail = ({ location, fetchData, detail, history }) => {

    // variables
    const itemId = qs.parse(location.search).id;
    const isTv = qs.parse(location.search).tv === "true";
    const apiCall = isTv ? getSerieDetail : getMovieDetail;
    const {
        poster_path, 
        title, 
        original_title, 
        overview, 
        tagline,
        name,
        original_name,
    } = detail.data;
    const imageUrl = IMAGE_URL + poster_path;
    const itemTitle = isTv ? name : title;

    // state for displaying modal
    const [showModal, setShowModal] = useState(false);

    // hook for fetching data
    useEffect( () => {
        const fetchAsyncData = async () => {
            await fetchData(DETAIL, apiCall, itemId);
        };
        fetchAsyncData();
    }, [apiCall, itemId, fetchData]);

    return (
        <>
        <div className="single-page-agile-main" style={detail.pending || detail.error ? { display: 'none'} : {}}>
            <h4 onClick={() => history.goBack()} className="latest-text no-border"><i className="fa fa-chevron-left"></i> Back</h4>
            <div className="container">
                    <div className="show-top-grids-w3lagile">
                        <div className="row">
                            <div className="col-sm-8 single-left">
                                
                                {/* Title */}
                                <div className="song-info">
                                    <h2>{itemTitle}</h2>	
                                    <h4>{isTv ? original_name : original_title}</h4>
                                </div>

                                {/* Poster and watch button */}
                                <div className="video-grid-single-page-agileits">
                                    <div className="row watch_movie_row">
                                        <div className="col-md-6">
                                            {poster_path && <img src={imageUrl} alt="" className="img-responsive" />}
                                        </div>
                                        <div className="col-md-6 watch_movie_container">
                                            <div className="w3l_sign_in_register watch_movie">
                                                <button onClick={() => setShowModal(true)}>
                                                    Watch Movie
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Overview and tagline */}
                                <div className="share">
                                    <h5>{tagline && `"${tagline}"`}</h5>
                                    <p>{overview}</p>
                                </div>
                                <div className="clearfix"> </div>	
                            </div>

                            {/* Additional information */}
                            <About tv={isTv} detail={detail} />
                        </div>
                        <div className="clearfix"> </div>
                    </div>
            </div>
        </div>

        {/* Modal for playing the video */}
        <VideoModal show={showModal} onHide={() => setShowModal(false)} title={itemTitle} />

        {/* Loader while fetching data */}
        {detail.pending && <Loader />}

        {/* Error message when fetch failed */}
        {detail.error &&
            <div className='error'>
                {detail.error.message}
            </div>
        }
        </>
    )
}

// redux connection
const mapStateToProps = state => ({
    location: state.router.location,
    detail: state.detail,
});
const mapDispatchToProps = dispatch => 
        bindActionCreators({
            fetchData: fetchData,
        }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Detail));