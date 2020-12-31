import axios from 'axios'
import constants from '../constants';
import API from '../Api_paths';
import {getLanguages} from '../getLanguages'

export const getSectionFields = (NotLoading, sectionFieldID) => (dispatch) => {   

    if(NotLoading != true){
        let sectionFields = null 
        dispatch({ type: constants.SECTION_FIELDS, sectionFields });
    }
    // To Refresh Section Field: 
    
    // dispatch(getLanguages());
    const length_Id = API.Paths.split('/').length; // Get Index Of Id 
    // let sectionId = window.location.pathname.split('/')[2]; // /section/404/header
    // let sectionId = window.location.pathname.split('/')[length_Id]; // /section/404/header    
    let sectionId;
    // To Improve For Performance 
    if(sectionFieldID){
         sectionId = sectionFieldID;
         dispatch({ type: constants.SECTION_ID, sectionFieldID });
    }else{
         sectionId = window.location.pathname.split('/')[length_Id]; // /section/404/header
    }
    console.log(sectionId)
    return axios.get(API.getSectionFieldsV2,{ params: {SectionId: sectionId}})
        .then((sectionFields) => {
            console.log(sectionFields);
            //Remove Class Load Layouts . 
            document.getElementsByTagName("BODY")[0].classList.remove('loading-Layout');
            dispatch({ type: constants.SECTION_FIELDS, sectionFields });
            // if(updataSecField){     
            //     console.log("updataSecField"+updataSecField)   
            //     dispatch({ type: constants.UPDATE_SECTION_FIELDS, updataSecField }); 
            // }
        })
        .catch((error) => {
            console.log(error.message);
        });
        
    // dispatch({ type: constants.HEADER_USER_SECTIONS, UserSections });
}