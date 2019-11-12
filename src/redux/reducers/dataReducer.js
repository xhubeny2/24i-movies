// initial state for data redux reducer
const initialState = {
    pending: false,
    data: [],
    error: null,
};

// general redux reducer for data category
const reducer = (dataCategory) => (state = initialState, action) => {
    switch(action.type) {
        case `FETCH_${dataCategory}_PENDING`:
            return {
                ...state,
                pending: true,
            }
        case `FETCH_${dataCategory}_SUCCESS`:
            return {
                ...state,
                pending: false,
                data: action.data,
                error: null
            }
        case `FETCH_${dataCategory}_ERROR`:
            return {
                ...state,
                pending: false,
                error: action.error
            }
        default:
            return state;
    }
}

export default reducer;