import constants from '../actions/constants'

const initialState = {
    initialized: null,       
}

export default (state = initialState, action) => {
    switch (action.type) {
        case constants.SEARCH_LINK:
            return {
                ...state,                
                LinkData: action.LinkData
            }                             
        default:
            return state
    }
}
