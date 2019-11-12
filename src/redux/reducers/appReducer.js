import {
    SET_LOADING
} from '../../constants/actionConstants';

// initial state for application redux reducer
const initialState = {
    isLoading: false,
}

// appplication redux reducer
const app = (state = initialState, action) => {
    switch (action.type) {
        case SET_LOADING:
            return {
                ...state,
                isLoading: action.isLoading,
            }
        default:
            return state;
    }
}

export default app;