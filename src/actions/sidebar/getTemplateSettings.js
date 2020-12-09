import axios from 'axios'
import constants from '../constants';
import API from '../Api_paths';

export const getTemplateSettings = () => (dispatch) => {         
    return axios.get(API.getTemplateSettings)
        .then((TemplateSettings) => {
            console.log(TemplateSettings);
            dispatch({ type: constants.TEMPLATE_SETTING, TemplateSettings });            
        })
        .catch((error) => {
            console.log(error.message);
        });        
}