import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { 
    POPULAR_MOVIES, 
    POPULAR_SERIES,
    FAMILY_MOVIES,
    DOCUMENTARY_MOVIES,
} from '../constants/actionConstants';
import { FAMILY_MOVIES_ID, DOCUMENTARY_MOVIES_ID } from '../constants/apiConstants';
import { fetchData } from '../redux/actions/dataActions';
import { getPopularMovies, getPopularSeries, getMoviesWithGenre } from '../api/apiRequests';

import Category from './Category';

// component - displays categories of movies/series on homepage
const CategoriesContainer = ({ movies, series, fetchData, family, documentary }) => (
    <>
        {/* Popular movies block */}
        <Category 
            dataCategory={POPULAR_MOVIES} 
            apiCall={getPopularMovies} 
            data={movies} 
            fetchData={fetchData} 
            label="Popular Movies"
        />
        {/* Popular series block */}
        <Category 
            dataCategory={POPULAR_SERIES} 
            apiCall={getPopularSeries} 
            data={series} 
            fetchData={fetchData} 
            label="Popular Series"
            tv={true}
        />

        {/* Family movies block */}
        <Category 
            dataCategory={FAMILY_MOVIES} 
            apiCall={getMoviesWithGenre} 
            data={family} 
            fetchData={fetchData} 
            param={FAMILY_MOVIES_ID}
            label="Family movies"
        />

        {/* Documentary movies block */}
        <Category 
            dataCategory={DOCUMENTARY_MOVIES} 
            apiCall={getMoviesWithGenre} 
            data={documentary} 
            fetchData={fetchData} 
            param={DOCUMENTARY_MOVIES_ID}
            label="Documentary movies"
        />
    </>
);

// redux connection
const mapStateToProps = state => ({
    movies: state.movies,
    series: state.series,
    family: state.family,
    documentary: state.documentary,
});

const mapDispatchToProps = dispatch => bindActionCreators({
fetchData: fetchData,
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(CategoriesContainer);