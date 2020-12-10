import axios from 'axios'
import constants from '../constants';
import API from '../Api_paths';
import qs from 'qs';

export const insertSection = (sourceSectionId) => (dispatch) => {       
     // Create Json Data To Send It:
    let  createVal = '"sourceSectionId" : "' +
                     sourceSectionId + '",'  +
                     '"sourceType" : "available",' +
                     '"destType" : "draft",' +                     
                     '"destSortOrder" : "11"',
        addToBra = "{" + createVal + "}",
        objCrParse = JSON.parse(addToBra);
        
    console.log("saveTest", objCrParse);
    axios({
        method: 'post',
        url: API.insertSection,
        data: qs.stringify(objCrParse),
        headers: {
            'content-type': 'application/x-www-form-urlencoded;charset=utf-8'
        }
    }).then((sectionId) => {        
        console.log(sectionId.data.insertedSectionId); 
        // Redirection To Section Added
        window.location.href = API.Paths + 'section/' + sectionId.data.insertedSectionId        
    })            
}