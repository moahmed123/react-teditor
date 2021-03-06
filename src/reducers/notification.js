import constants from '../actions/constants'

const initialState = {
    initialized: null,       
}

export default (state = initialState, action) => {
    switch (action.type) {
        case constants.NOTIFICATION:
            return {
                ...state,                
                result: action.notification
            }   
                          
        default:
            return state
    }
}
