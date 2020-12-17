import axios from 'axios'
import constants from '../constants';
import API from '../Api_paths';
import qs from 'qs';
import {getSectionFields} from './getSectionFields';
import { refreshIframe } from '../Iframe/refreshIframe';


export const reorderCollections = (reorderColls) => (dispatch) => {
    console.log("reorderCollections", reorderColls);
    console.log(reorderColls.length)
    let objCr;    
    // To Get Format To Save Values 
    for (let i = 0; i < reorderColls.length; i++) {
        let createVal = '"' + reorderColls[i].key + '": "' + reorderColls[i].value;
        

        if (i == 0) { 
            objCr = createVal + '",' 
        }else{
            if (i == reorderColls.length - 1){
                objCr += createVal + '"';
            }else{
                objCr += createVal + '",';
            }            
        }
        // if(i != reorderColls.length - 1 && i != 0){
        //     objCr += createVal + '",'
        // }
        // if (i == reorderColls.length - 1) {
        //     // Last Of 
        //     objCr += createVal + '"';
        // }
        
    }
    
    let addToBra = "{" + objCr + "}";
    let objCrParse = JSON.parse(addToBra);
    console.log("saveTest", objCrParse);
    axios({
        method: 'post',
        url: API.reorderCollections,
        data: qs.stringify(objCrParse),
        headers: {
            'content-type': 'application/x-www-form-urlencoded;charset=utf-8'
        }
    }).then((success) => {
        console.log(success);
        // Update Section Data 
        // dispatch(getSectionFields())
        // Fun To Refresh Iframe When Save.       
        dispatch(refreshIframe())
        // TODO: Show Field Save Is Done. 
    })
}