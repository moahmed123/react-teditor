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
            case constants.LINK_INPUT_VAlUE:
            return {
                ...state,                
                VInputLink: action.valInputLink
            }                             
        default:
            return state
    }
}
