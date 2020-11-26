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
            
        case constants.HEADER_USER_SECTIONS:
        return {
            ...state,                
            UserSections: action.UserSections
        } 
        case constants.FOOTER_USER_SECTIONS:
        return {
            ...state,                
            FooterUserSections: action.UserSections
        } 
        default:
            return state
    }
}
