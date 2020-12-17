import axios from 'axios'
import API from '../Api_paths';
import qs from 'qs';
import {getSectionFields} from './getSectionFields';
import { refreshIframe } from '../Iframe/refreshIframe';

// Add a New Collection. 
export const removeCollection = (CollectionId) => (dispatch) => {
    console.log("CollectionId", CollectionId)
    let objCr = '"CollectionId"' + ':"' +  CollectionId + '"'; 
    let addToBra = "{" + objCr + "}";
    let objCrParse = JSON.parse(addToBra);
         console.log(objCrParse)
    axios({
        method: 'post',
        url: API.removeCollection,
        data: qs.stringify(objCrParse),
        headers: {
            
            'Content-Type': 'application/x-www-form-urlencoded',
            'Accept': 'application/json'
        }
    }).then((success) => {
        console.log(success);
        // Update Section Data 
        
        let NotLoading = true;
        dispatch(getSectionFields(NotLoading))
        dispatch(refreshIframe())
        // TODO: Show Field Save Is Done. 
    }).catch((error) => {
        console.log(error.message);
        console.log(error); 
    });
}