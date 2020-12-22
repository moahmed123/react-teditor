import axios from 'axios';
import API from './Api_paths';
import { getSectionFields } from './sidebar/getSectionFields';
import {RefreshData} from './app'

//Publish 
export const resetDraftVersion = () => (dispatch) => {       
    axios({
        method: 'post',
        url: API.resetDraftVersion,        
        headers: {
            'content-type': 'application/x-www-form-urlencoded;charset=utf-8'
        }
    }).then((success) => {
        console.log(success);        
        // Update Section Data 
        dispatch(RefreshData());
        // dispatch(getSectionFields())
        window.location.href = API.Paths
        // TODO: Show Field Publish Is Done. 
    })
}