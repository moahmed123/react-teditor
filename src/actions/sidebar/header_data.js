import constants from '../constants';


export const headerUserSections = (UserSections) => (dispatch) => {
    console.log("UserSections ----- ");  
    console.log(UserSections);
    dispatch({ type: constants.HEADER_USER_SECTIONS, UserSections });
}