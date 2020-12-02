import constants from '../actions/constants'

const initialState = {
    initialized: null,       
}

export default (state = initialState, action) => {
    switch (action.type) {
        case constants.LOOK_UP_KEY:
            return {
                ...state,                
                LookupKey: action.LookupKeyVal
            }                             
        default:
            return state
    }
}
