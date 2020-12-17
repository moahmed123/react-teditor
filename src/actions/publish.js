import axios from 'axios';
import API from './Api_paths';
import { getSectionFields } from './sidebar/getSectionFields';
import { notification } from './notification/notification';

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
        // Notification Data 
        let notification_result = {
            status: 'success', // danger
            title: '',
            Message : " publish Data Is Successfully",
            delay : null            
        }
        dispatch(notification(notification_result));
    })
}