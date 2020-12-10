import constants from '../actions/constants'

const initialState = {
    initialized: false,       
}

export default (state = initialState, action) => {
    switch (action.type) {
        case constants.Add_New_Section:
            return {
                ...state,                
                Sections: action.AvailableSections
            }                     
        default:
            return state
    }
}
