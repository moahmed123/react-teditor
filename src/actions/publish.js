import axios from 'axios';
import API from './Api_paths';
import { getSectionFields } from './sidebar/getSectionFields';
import { notification } from './notification/notification';
import localization from '../localization/localization'

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
        // dispatch(getSectionFields())
        // TODO: Show Field Publish Is Done. 
        // Notification Data 
        let notification_result = {
            status: 'success', // danger
            title: '',
            Message : localization.PublishMessage,
            delay : null            
        }
        dispatch(notification(notification_result));

         //TODO: revoke add and remove loading Process
         document.querySelector('.container_notification').classList.remove('next-layer');
         document.querySelector('.container_notification .alert-success').classList.add('show');
         
        setTimeout(()=>{
            //code         
            if (document.body.classList.contains('.container_notification .alert-success')) {
                document.querySelector('.container_notification .alert-success').classList.remove('show');
            }            
            document.querySelector('.container_notification').classList.add('next-layer');
        },2000)
         // Change User_Save_Fields false To back to admin 
         localStorage.setItem('User_Save_Fields', false);  
    })
}