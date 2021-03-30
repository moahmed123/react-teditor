import constants from '../constants';


export const webPages = (webPages) => (dispatch) => {
    console.log("pages ----- ", webPages);      
    dispatch({ type: constants.WEB_PAGES, webPages });
}