import axios from 'axios'
import constants from '../constants';
import API from '../Api_paths';
import qs from 'qs';

export const UpdateSectionState = (SectionId, State) => (dispatch) => {
    // Create Json Data To Send It:
    let createVal = '{"SectionId" : "' + SectionId + '",' + '"State" : "' + State + '"}',
        objCrParse = JSON.parse(createVal);

    console.log("saveTest", objCrParse);
    //ADD_LAYOUT
    axios({
        method: 'post',
        url: API.UpdateSectionState,
        data: qs.stringify(objCrParse),
        headers: {
            'content-type': 'application/x-www-form-urlencoded;charset=utf-8'
        }
    }).then((success) => {        
       console.log(success.data.status);
    }).catch((error) => {
        console.log(error.message);
    });           
}