import axios from 'axios'
import API from '../Api_paths';
import qs from 'qs';
import {RefreshData} from './../app'

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
        // if(success.data.status == "OK"){
        //     // Update Home Data 
        //     dispatch(RefreshData());
        // }
        // Update Section Data 
        // dispatch(getSectionFields())
        // dispatch(getDropdownPages())
        // TODO: Show Field Save Is Done. 
    }).catch((error) => {
        console.log(error.message);
        console.log(error); 
    });
}