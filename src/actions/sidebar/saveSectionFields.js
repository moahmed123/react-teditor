import axios from 'axios'
import constants from '../constants';
import API from '../Api_paths';
import qs from 'qs';
import { getSectionFields } from './getSectionFields';
import { replaceIframeSection } from '../Iframe/replaceIframeSection';
import { refreshIframe } from '../Iframe/refreshIframe';
import { notification } from '../notification/notification';
import localization from '../../localization/localization';
// import $ from "jquery-1.10.2";

// Collected New Value For Fields 
export const newValFields = (newFields) => (dispatch) => {
    console.log(newFields)
    let collected = Object.values(newFields.reduce((acc, cur) => Object.assign(acc, { [cur.key]: cur }), {}));    
    console.log(collected, '-------> colection');
    console.log(collected);

    dispatch({ type: constants.NEW_VAL_FIELDS, newFields });
    dispatch({ type: constants.TO_SAVE_FIELDS, collected });
}
// export const changeImgForSelector = (data) => () => {
//     console.log(data, 'data')
//     let dataCollected;
//     if(data){
//         dataCollected = Object.values(data.reduce((acc, cur) => Object.assign(acc, { [cur.key]: cur }), {})); 
//         // Loop For Modify Images. 
//         setTimeout(()=>{
//             console.log(dataCollected.length);
//             for(let i = 0; i < dataCollected.length; i++ ){  
//                 console.log(i)                  
//                 if(dataCollected[i].img){
                    
//                     let idValid = document.querySelector("[imagevalid='"+data[i].key+"_image']");            
//                     if(idValid){
//                         let ImageId = idValid.id.replace('image', 'thumb_img'),
//                             StoreCode = localStorage.getItem('storeCode'),
//                             getElement = document.getElementById(ImageId);

//                         // idValid.style.color = "red";            
//                         window.location.hostname == 'localhost' ?
//                             getElement.src = "http://qaz123.expandcart.com" + API.ecdata + StoreCode + API.saveImageData + data[i].value                    
//                         :
//                             getElement.src = API.ecdata + StoreCode + API.saveImageData + data[i].value;
                            
//                         //$('.setting--sidebar__controls.save .check').trigger('click');
//                     }                
//                 }         
//             }
//         }) 
//     }    
//     console.log(dataCollected, 'dataCollected')
    
// }

export const savedFieldsVals = (savedFieldVals) => (dispatch) => {
    console.log("savedFieldVals", savedFieldVals)
    let objCr;
    if (savedFieldVals.length == 1) {
        console.log(savedFieldVals[0].value)
        // return false;
        if(isNaN(savedFieldVals[0].value)){
            if (savedFieldVals[0].value.indexOf('"') >= 0) {
                objCr = '"' + savedFieldVals[0].key + '": "' + savedFieldVals[0].value.replace(/"/g, "'") + '"';
            }else{
                objCr = '"' + savedFieldVals[0].key + '": "' + savedFieldVals[0].value + '"';
            }
        }else{
            objCr = '"' + savedFieldVals[0].key + '": "' + savedFieldVals[0].value + '"';
        }                        
    }
    else {
        // To Get Format To Save Values 
        console.log(">>>>>", savedFieldVals)
        for (let i = 0; i < savedFieldVals.length; i++) {
            let createVal;
            if(isNaN(savedFieldVals[i].value)){
                if (savedFieldVals[i].value.indexOf('"') >= 0) {
                     createVal = '"' + savedFieldVals[i].key + '": "' + savedFieldVals[i].value.replace(/"/g, "'");        
                }else{
                     createVal = '"' + savedFieldVals[i].key + '": "' + savedFieldVals[i].value;        
                }
            }else{
                createVal = '"' + savedFieldVals[i].key + '": "' + savedFieldVals[i].value;
            }
            
            // if (i == 0) { objCr = createVal + '",' }
            // if (i == savedFieldVals.length - 1) {
            //     // Last Of 
            //     objCr += createVal + '"';
            // }
           
            if (i == 0) { 
                objCr = createVal + '",' 
            }else{
                if (i == savedFieldVals.length - 1){
                    objCr += createVal + '"';
                }else{
                    objCr += createVal + '",';
                }            
            } 
        }
    }

    let addToBra = "{" + objCr + "}";
    console.log(addToBra)
    // return false;
    let objCrParse = JSON.parse(addToBra);
    console.log("saveTest", objCrParse);
    
    axios({
        method: 'post',
        url: API.SaveFieldsVal,
        data: qs.stringify(objCrParse),
        headers: {
            'content-type': 'application/x-www-form-urlencoded;charset=utf-8'
        }
    }).then((response) => {
        console.log(response);
        // Update Section Data 
        // dispatch(getSectionFields())
        // Chack Route Of Section. 
        let lastOfRoute = window.location.href.substring(window.location.href.lastIndexOf('/') + 1)
        // Reload Route Of Section Only.
        if(lastOfRoute != 'setting'){
            // dispatch(getSectionFields()) // Update Section Fields 
        }
        console.log(response.data)
          
        // dispatch(replaceIframeSection(response.data.sectionId, response.data.sectionHTML, response.data.sectionScripts))
        // Fun To Refresh Iframe When Save.
        dispatch(refreshIframe());
        // TODO: Show Field Save Is Done. 
        // Notification Data 
        let notification_result = {
            status: 'success', // danger
            title: localization.SaveMessageTitle,
            Message : localization.SaveMessage,
            delay : 3000            
        }
        dispatch(notification(notification_result));
        // Change User_Save_Fields True To show popup when you back  
        localStorage.setItem('User_Save_Fields', true);  

        // Make Value For newValFields Null 
        // dispatch(newValFields(savedFieldVals))

    })
}