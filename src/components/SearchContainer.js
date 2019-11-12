import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import qs from 'query-string';

import Category from './Category';

import { SEARCH_MOVIES, SEARCH_SERIES } from '../constants/actionConstants';
import { fetchData } from '../redux/actions/dataActions';
import { searchMovies, searchSeries } from '../api/apiRequests';

// component - dispalys search results
const SearchContainer = ({
    moviesSearchResult, 
    seriesSearchResult, 
    router: {location}, 
    fetchData
}) => {

    // variables
    const query = qs.parse(location.search).query;

    // render empty page when search query is empty
    if (!query) {
        return (
            <div className="empty-search">
                Enter the search phrase to the input at the top ...
            </div>
        )    
    }
    
    // render results for movies nad series
    return (
            <>
                <Category
                    fetchData={fetchData}
                    data={moviesSearchResult}
                    dataCategory={SEARCH_MOVIES}
                    apiCall={searchMovies}
                    label={"Movies search results"}
                    param={query}
                />
                <Category
                    fetchData={fetchData}
                    data={seriesSearchResult}
                    dataCategory={SEARCH_SERIES}
                    apiCall={searchSeries}
                    label={"Series search results"}
                    param={query}
                    tv={true}
                />
            </>
    ) 
}

// redux connection
const mapStateToProps = state => ({
    moviesSearchResult: state.moviesSearchResult,
    seriesSearchResult: state.seriesSearchResult,
    router: state.router,
});

const mapDispatchToProps = dispatch => bindActionCreators({
    fetchData: fetchData,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(SearchContainer);