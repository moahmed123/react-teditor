import constants from '../actions/constants'

const initialState = {
    initialized: false,       
}

export default (state = initialState, action) => {
    switch (action.type) {
        case constants.REGIONSOFPAGE:
            return {
                ...state,                
                regions: action.regions
            }                     
        default:
            return state
    }
}
