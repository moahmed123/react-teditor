import axios from 'axios'
import constants from '../constants';
import API from '../Api_paths';
import qs from 'qs';
import {getSectionFields} from './getSectionFields';
import {routeComponent} from '../RouteComponent/routeComponent';
import { insertIframeSection } from '../Iframe/insertIframeSection';
import {RefreshData} from '../app'

export const insertSection = (sourceSectionId) => (dispatch) => {       
     // Create Json Data To Send It:
    let  createVal = '"sourceSectionId" : "' +
                     sourceSectionId + '",'  +
                     '"sourceType" : "available",' +
                     '"destType" : "draft"',
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
    }).then((response) => {        
        console.log(response.data.insertedSectionId); 
        // Redirection To Section Added
       // window.location.href = API.Paths + 'section/' + sectionId.data.insertedSectionId   //#/section/4244/     
       dispatch(getSectionFields(null, response.data.insertedSectionId));
    //    dispatch(insertIframeSection(response.data.sectionHTML, response.data.prevSectionId, response.data.nextSectionId));
       dispatch(RefreshData()) // Refresh Data 
       dispatch(routeComponent('SectionPG', null));
    })            
}