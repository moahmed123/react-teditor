import axios from 'axios'
import constants from '../constants';
import API from '../Api_paths';
import qs from 'qs';


// export const ToggleSectionAdd = (ToggleSection) => (dispatch)=>{    
//     dispatch({type: constants.TOGGEL_SECTION, ToggleSection})
// }
export const addNewSection = (PageId) => (dispatch) => {       
     
    let length_Id = API.Paths.split('/').length, // Get Index Of Id 
       // Page_Id = window.location.pathname.split('/')[length_Id], // /section/404/header    
        createVal = '"PageId" : "' + PageId + '"',
        addToBra = "{" + createVal + "}",
        objCrParse = JSON.parse(addToBra);
        
    console.log("saveTest", objCrParse);
    axios({
        method: 'post',
        url: API.getPageAvailableSections,
        data: qs.stringify(objCrParse),
        headers: {
            'content-type': 'application/x-www-form-urlencoded;charset=utf-8'
        }
    }).then((AvailableSections) => {        
        dispatch({ type: constants.Add_New_Section, AvailableSections });        
    })            
}