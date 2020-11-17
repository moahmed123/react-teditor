import constants from '../actions/constants'

const initialState = {
    initialized: false,
    transitions: true,
    counter: 0,
    data: null,
    dataFirst: null
}

export default (state = initialState, action) => {
    switch (action.type) {
        case constants.INIT_APP:
            return {
                ...state,
                initialized: true,
            }             
        case constants.LOAD_DATA:
            return {
                ...state,
                data: action.data,
            }
        case constants.DATAFIRST:
        return {
            ...state,
            dataFirst: action.Alldata,
        }
        default:
            return state
    }
}
