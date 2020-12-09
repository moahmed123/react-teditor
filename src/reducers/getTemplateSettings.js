import constants from '../actions/constants'

const initialState = {
    initialized: false,       
}

export default (state = initialState, action) => {
    switch (action.type) {
        case constants.TEMPLATE_SETTING:
            return {
                ...state,                
                TemplateSEVal: action.TemplateSettings
            }                     
        default:
            return state
    }
}
