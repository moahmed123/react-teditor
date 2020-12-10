import axios from 'axios'
import constants from '../constants';
import API from '../Api_paths';
import qs from 'qs';
import {RefreshData, reloadRegionsOfPages} from '../app'

export const addLayout = (Name, Layout) => (dispatch) => {

    // Create Json Data To Send It:
    let createVal = '{"Name" : "' + Name + '",' + '"Route" : "' + Layout + '"}',
        objCrParse = JSON.parse(createVal);

    console.log("saveTest", objCrParse);
    //ADD_LAYOUT
    axios({
        method: 'post',
        url: API.addLayout,
        data: qs.stringify(objCrParse),
        headers: {
            'content-type': 'application/x-www-form-urlencoded;charset=utf-8'
        }
    }).then((success) => {        
       console.log(success);
       let closeAddPage = false; 
       dispatch(CloseAddLayout(closeAddPage));
       dispatch(RefreshData());
    //    dispatch(reloadRegionsOfPages(success.data.Page))

    }).catch((error) => {
        console.log(error.message);
    });           
}
export const CloseAddLayout = (closeAddPage) => (dispatch) => {
    dispatch({ type: constants.CLOSE_ADD_PAGE, closeAddPage });      
}