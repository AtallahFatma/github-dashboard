const INITIAL_STATE = {
    error: null,
    loading: false
};

const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'SET_USERS':
            return {
                ...state, 
                users: action.payload,
                error: null
            };
        case 'SET_USER':
            return {
                ...state,
                user: action.payload,
                error: null
            };
        case 'SET_USER_REPOS':
            return {
                ...state,
                repos: action.payload,
                error: null,
                loading: false
            };
        case 'SET_USER_REPO':
            return {
                ...state,
                userRepo: action.payload,
                error: null
            };
        case 'FETCH_DATA_ERROR':
            return {
                error: action.payload,
                loading: false
            };
        case 'FETCHING_REPOS':
            return {
                ...state,
                loading: true
            };
        default:
            return state;
    }
}
export default reducer;