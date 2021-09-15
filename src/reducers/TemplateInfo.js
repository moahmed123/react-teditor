import constants from '../actions/constants'

const initialState = {
    initialized: false,       
}

export default (state = initialState, action) => {
    switch (action.type) {
        case constants.TEMPLATE_INFO:
            return {
                ...state,                
                TemInfo: action.TemplateInfo
            }                     
        default:
            return state
    }
}
