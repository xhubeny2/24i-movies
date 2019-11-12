import React, { memo } from 'react';
import { Link } from 'react-router-dom';

import { IMAGE_URL } from '../constants/apiConstants'
import noPoster from '../web/images/no_poster.jpg';

// component - single item of the category collection
const Item = ({ item, tv }) => {
    
    // variables
    const actualYear = new Date().getFullYear().toString();
    const imageUrl = IMAGE_URL + item.poster_path;
    const linkProps = {
        pathname: '/detail',
        search: `?id=${item.id}&tv=${tv}`,
    };

    // util methods
    const getTitle = () => {
        const title = tv ? item.name : item.title

        return title;
    }

    const getItemYear = () => {
        const date = tv ? item.first_air_date : item.release_date

        return !!date ? date.split('-')[0] : ""
    }

    //render
    return (              
        <div className="col-lg-2 col-md-4 col-sm-6 w3l-movie-gride-agile">

            {/* poster image */}
			<Link to={linkProps} className="hvr-shutter-out-horizontal">
                <img src={item.poster_path ? imageUrl : noPoster} title={getTitle()} alt=" " className="w3l-movie-pic" />
			</Link>

            {/* title name and year */}
			<div className="mid-1">
                <div className="w3l-movie-text">
                    <h6><Link to={linkProps}>{getTitle()}</Link></h6>		
                    <p>{getItemYear()}</p>					
                </div>					
			</div>

            {/* 'NEW' label for movies and series released in actual year */}
			{getItemYear() === actualYear &&
                <div className="ribben two">
					<p>NEW</p>
                </div>
            }	
        </div>
    )
}

// using memo - if inputs are the same React doesn't re-render the component
export default memo(Item);