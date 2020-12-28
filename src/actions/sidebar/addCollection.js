import axios from 'axios'
import API from '../Api_paths';
import qs from 'qs';
import {getSectionFields} from './getSectionFields';
import { refreshIframe } from '../Iframe/refreshIframe';

// Add a New Collection. 
export const addCollection = (sectionId) => (dispatch) => {
    console.log("sectionId", sectionId)
    let objCr = '"SectionId"' + ':"' +  sectionId + '"'; 
    let addToBra = "{" + objCr + "}";
    let objCrParse = JSON.parse(addToBra);
         console.log(objCrParse)
    axios({
        method: 'post',
        url: API.addCollection,
        data: qs.stringify(objCrParse),
        headers: {
            // "Content-Type" : "application/json"
            'Content-Type': 'application/x-www-form-urlencoded',
            'Accept': 'application/json'
        }
    }).then((success) => {
        console.log(success);
        // Update Section Data
        let NotLoading = false; 
        dispatch(getSectionFields(NotLoading, sectionId));
        dispatch(refreshIframe())
        // TODO: Show Field Save Is Done. 
    }).catch((error) => {
        console.log(error.message);
        console.log(error); 
    });
}