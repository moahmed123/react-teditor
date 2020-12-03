import constants from '../actions/constants'

const initialState = {
    initialized: null,       
}

export default (state = initialState, action) => {
    switch (action.type) {
        case constants.SEARCH_PRO:
            return {
                ...state,                
                ProData: action.ProData
            }                             
        default:
            return state
    }
}
