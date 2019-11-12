import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import { 
    POPULAR_MOVIES, 
    POPULAR_SERIES,
    DOCUMENTARY_MOVIES,
    FAMILY_MOVIES,
    DETAIL,
    SEARCH_MOVIES,
    SEARCH_SERIES,
} from '../../constants/actionConstants';

import reducer from './dataReducer';
import app from './appReducer';

// root redux reducer - merge all redux reducers together
const createRootReducer = history => combineReducers({
    movies: reducer(POPULAR_MOVIES),
    series: reducer(POPULAR_SERIES),
    family: reducer(FAMILY_MOVIES),
    documentary: reducer(DOCUMENTARY_MOVIES),
    detail: reducer(DETAIL),
    moviesSearchResult: reducer(SEARCH_MOVIES),
    seriesSearchResult: reducer(SEARCH_SERIES),
    app,
    router : connectRouter(history)
})

export default createRootReducer;