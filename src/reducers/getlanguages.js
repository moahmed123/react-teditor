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
            // route Component Use It : 
            case constants.ROUTE_COMPONENT:
                return {
                    ...state,                
                    routeCom: action.routeComponent
                } 
            case constants.Back_ROUTE_COMPONENT:
                return {
                    ...state,                
                    backCom: action.backComponent
                }                 
        default:
            return state
    }
}
