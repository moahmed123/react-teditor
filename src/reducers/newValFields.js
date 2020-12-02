import constants from '../actions/constants'

const initialState = {
    initialized: null,       
}

export default (state = initialState, action) => {
    switch (action.type) {
        case constants.NEW_VAL_FIELDS:
            return {
                ...state,                
                newFields: action.newFields
            }   
        case constants.TO_SAVE_FIELDS:
        return {
            ...state,                   
            collectANewFields: action.collected
        }                     
        default:
            return state
    }
}
