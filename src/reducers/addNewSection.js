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
            // case constants.TOGGEL_SECTION:
            //     return {
            //         ...state,                
            //         SectionsToggle: action.ToggleSection
            //     }                     
        default:
            return state
    }
}
