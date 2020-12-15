import axios from 'axios'
import API from './Api_paths';

export const setLanguage = (Lang) => (dispatch) => {              
    return axios.post(API.setLanguage,{ params: {LangCode: Lang}})
        .then((success) => {            
            console.log(success);            
            window.location.href = API.Paths
        })
        .catch((error) => {
            console.log(error.message);
        });    
}