import axios from 'axios'
import API from './Api_paths';
import qs from 'qs';

export const setLanguage = (Lang) => (dispatch) => {
    // Create Json To Send For Body
    let SetLangApp = '{' + '"config_admin_language": "' + Lang + '"}';
    let objCreatedParse = JSON.parse(SetLangApp);
    // console.log(objCreatedParse)    
    return axios({
        method: 'post',
        url: API.setLanguage,
        data: qs.stringify(objCreatedParse),
        headers: {
            
            'content-type': 'application/x-www-form-urlencoded;charset=utf-8'
        }
    }).then((success) => {
        console.log(success);
        window.location.href = API.Paths;
        }).catch((error) => {
        console.log(error.message);
    });
}   