import axios from 'axios'
import constants from './constants';
import API from './Api_paths';

export const getLanguages = () => (dispatch) => {              
    return axios.get(API.getLanguages)
        .then((getLangs) => {
            console.log(getLangs);           
            dispatch({ type: constants.GET_LANGS, getLangs});
        })
        .catch((error) => {
            console.log(error.message);
        });    
}