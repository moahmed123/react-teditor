import axios from 'axios';
import API from './Api_paths';
import { getSectionFields } from './sidebar/getSectionFields';

//Publish 
export const publishFieldsVals = () => (dispatch) => {       
    axios({
        method: 'post',
        url: API.publish,
        // data: qs.stringify(objCrParse),
        headers: {
            'content-type': 'application/x-www-form-urlencoded;charset=utf-8'
        }
    }).then((success) => {
        console.log(success);        
        // Update Section Data 
        dispatch(getSectionFields())
        // TODO: Show Field Publish Is Done. 
    })
}