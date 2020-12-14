import constants from '../actions/constants'

const initialState = {
    initialized: null,       
}

export default (state = initialState, action) => {
    switch (action.type) {
        case constants.SEARCH_BRANDS:
            return {
                ...state,                
                dataBrands: action.dataBrands
            }                             
        default:
            return state
    }
}
