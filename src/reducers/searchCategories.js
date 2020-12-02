import constants from '../actions/constants'

const initialState = {
    initialized: null,       
}

export default (state = initialState, action) => {
    switch (action.type) {
        case constants.SEARCH_CATE:
            return {
                ...state,                
                cateData: action.CateData
            }                             
        default:
            return state
    }
}
