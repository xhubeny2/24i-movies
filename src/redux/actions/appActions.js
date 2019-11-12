import {
    SET_LOADING
} from '../../constants/actionConstants'

// Applicaton redux action creators
export const setLoading = isLoading => {
    return {type: SET_LOADING, isLoading}
};