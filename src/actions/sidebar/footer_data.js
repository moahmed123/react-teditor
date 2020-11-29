import constants from '../constants';


export const FooterUserSections = (UserSections) => (dispatch) => {
    console.log("Footer ----- ",UserSections);      
    dispatch({ type: constants.FOOTER_USER_SECTIONS, UserSections });
}