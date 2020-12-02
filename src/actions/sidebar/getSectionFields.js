import axios from 'axios'
import constants from '../constants';
import API from '../Api_paths';

export const getSectionFields = () => (dispatch) => {   
    console.log();
    let sectionId = window.location.pathname.split('/')[2]; // /section/404/header
    
    // axios.post(url, data, headers)
    return axios.get(API.getSectionFieldsV2,{ params: {SectionId: sectionId}})
        .then((sectionFields) => {
            console.log(sectionFields);
            dispatch({ type: constants.SECTION_FIELDS, sectionFields });
        })
        .catch((error) => {
            console.log(error.message);
        });
    // dispatch({ type: constants.HEADER_USER_SECTIONS, UserSections });
}