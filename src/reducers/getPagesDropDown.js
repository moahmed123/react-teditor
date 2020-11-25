import constants from '../actions/constants'

const initialState = {
    initialized: false,       
}

export default (state = initialState, action) => {
    switch (action.type) {
        case constants.DROPDOWN_PAGES:
            return {
                ...state,                
                pagesData: action.pagesData
            }                     
        default:
            return state
    }
}
