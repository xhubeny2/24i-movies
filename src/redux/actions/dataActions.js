import { setLoading } from './appActions';

// Data redux action creators

const fetchDataPending = (dataCategory) => {
    return {
        type: `FETCH_${dataCategory}_PENDING`
    }
} 

const fetchDataSuccess = (data, dataCategory) => {
    return {
        type: `FETCH_${dataCategory}_SUCCESS`,
        data
    }
}

const fetchDataError = (error, dataCategory) => {
    return {
        type: `FETCH_${dataCategory}_ERROR`,
        error
    }
}

/* 

 General function for fetch data:
    dataCategory - constants with a redux action
    apiCall - function with an api call
    param - parameter for an api calling

 */

export const fetchData = (dataCategory, apiCall, param) => {
    return dispatch => {
        dispatch(fetchDataPending(dataCategory));
        dispatch(setLoading(true));
        apiCall(param)
        .then(response => {
            const data = response.data;

            dispatch(fetchDataSuccess(data, dataCategory));
            dispatch(setLoading(false));
            return response.data.results;
        })
        .catch(error => {
            dispatch(fetchDataError(error, dataCategory));
        })
    }
    
}
