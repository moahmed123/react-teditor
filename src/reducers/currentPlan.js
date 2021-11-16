import constants from '../actions/constants'

const initialState = {
    initialized: false,       
}

export default (state = initialState, action) => {
    switch (action.type) {
        case constants.USER_CURRENTPLAN:
            return {
                ...state,                
                UserCurrentPlan: action.UserCurrentPlan
            }                     
        default:
            return state
    }
}
