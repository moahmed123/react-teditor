import constants from '../constants';

export const notification = (notification) => (dispatch) => {
    console.log("notification",notification)
    // Refresh Iframe When Save.
    dispatch({ type: constants.NOTIFICATION, notification });
}