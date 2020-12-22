import constants from '../actions/constants'

const initialState = {
    initialized: false,       
}

export default (state = initialState, action) => {
    switch (action.type) {
        case constants.SECTION_FIELDS:
            return {
                ...state,                
                sectionFields: action.sectionFields
            }    
        case constants.UPDATE_SECTION_FIELDS:
            return {
                ...state,                
                updateSecFields: action.updataSecField
            }      
        case constants.SECTION_ID:
            return {
                ...state, 
                sectionId: action.sectionFieldID
            }               
        default:
            return state
    }
}
