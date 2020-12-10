import axios from 'axios'
import constants from '../constants';
import API from '../Api_paths';
import qs from 'qs';

export const addNewSection = () => (dispatch) => {       
     
    let length_Id = API.Paths.split('/').length, // Get Index Of Id 
        Page_Id = window.location.pathname.split('/')[length_Id], // /section/404/header    
        createVal = '"PageId" : "' + Page_Id + '"',
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