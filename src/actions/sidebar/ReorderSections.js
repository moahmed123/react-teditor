import axios from 'axios'
import constants from '../constants';
import API from '../Api_paths';
import qs from 'qs';
import {RefreshData} from '../app'


export const reorderSection = (reorderSEC) => (dispatch) => {
    console.log("reorderSection", reorderSEC);
    console.log(reorderSEC.length)
    let objCr;    
    // To Get Format To Save Values 
    for (let i = 0; i < reorderSEC.length; i++) {
        let createVal = '"' + reorderSEC[i].key + '": "' + reorderSEC[i].value;
        

        if (i == 0) { 
            objCr = createVal + '",' 
        }else{
            if (i == reorderSEC.length - 1){
                objCr += createVal + '"';
            }else{
                objCr += createVal + '",';
            }            
        }               
    }
    
    let addToBra = "{" + objCr + "}";
    let objCrParse = JSON.parse(addToBra);
    console.log("saveTest", objCrParse);
    axios({
        method: 'post',
        url: API.reorderSection,
        data: qs.stringify(objCrParse),
        headers: {
            'content-type': 'application/x-www-form-urlencoded;charset=utf-8'
        }
    }).then((success) => {
        console.log(success.data.status);
        // if(success.data.status == "OK"){
        //     // Update Home Data 
        //     dispatch(RefreshData());
        // }
        
        // TODO: Show Field Save Is Done. 
    })
}