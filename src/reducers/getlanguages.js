import constants from '../actions/constants'

const initialState = {
    initialized: false,       
}

export default (state = initialState, action) => {
    switch (action.type) {
        case constants.GET_LANGS:
            return {
                ...state,                
                GetLangs: action.getLangs
            }                     
        default:
            return state
    }
}
