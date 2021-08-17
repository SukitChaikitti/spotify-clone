export const initialState = {
    user: null,
    playlist: [],
    playing: false,
    item: null,
    token: null,
};

const reducer = (state , action) => {
    console.log(action);

    switch (action.type){
        case 'SET_USER':
            return {
                ...state,
                user: action.user
            }
        case 'SET_TOKEN':
            return {
                ...state,
                token: action.token
            }
        case 'SET_PLAYLIST':
            return {
                ...state,
                playlist: action.playlist
            }
        case 'SET_DISCOVERY_WEEKLY':
            return {
                ...state,
                discovery_weekly: action.discovery_weekly
            }
        default:
            return state;
    }
};

export default reducer;