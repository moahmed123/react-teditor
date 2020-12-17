import axios from 'axios'
import API from '../Api_paths';
import qs from 'qs';
import {RefreshData} from './../app';
import { refreshIframe } from '../Iframe/refreshIframe';

// Add a New Collection. 
export const removeSection = (sectionId) => (dispatch) => {
    console.log("SectionId", sectionId)
    let objCr = '"SectionId"' + ':"' +  sectionId + '"'; 
    let addToBra = "{" + objCr + "}";
    let objCrParse = JSON.parse(addToBra);
         console.log(objCrParse)
    axios({
        method: 'post',
        url: API.removeSection,
        data: qs.stringify(objCrParse),
        headers: {
            
            'Content-Type': 'application/x-www-form-urlencoded',
            'Accept': 'application/json'
        }
    }).then((success) => {
        console.log(success);
        // Fun To Refresh Iframe When Save.       
        dispatch(refreshIframe())
        // if(success.data.status == "OK"){
        //     // Update Home Data 
        //     dispatch(RefreshData());
        // }
    }).catch((error) => {
        console.log(error.message);
        console.log(error); 
    });
}