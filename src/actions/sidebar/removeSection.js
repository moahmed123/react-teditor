import axios from 'axios'
import API from '../Api_paths';
import qs from 'qs';
import { RefreshData, reloadRegionsOfPages } from '../app';
import { removeIframeSection } from '../Iframe/removeIframeSection';

// Add a New Collection. 
export const removeSection = (sectionId) => (dispatch) => {
    // keyValue --> To remove Section For UI
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
        dispatch(removeIframeSection(sectionId));                    
        // if(success.data.status == "OK"){
        //     console.log('Refresh Data ..........')
        //     // Update Home Data 
        dispatch(RefreshData());
        //     // dispatch(reloadRegionsOfPages(PagesRegions))
        // }
    }).catch((error) => {
        console.log(error.message);
        console.log(error); 
    });
}