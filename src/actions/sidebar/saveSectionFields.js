import axios from 'axios'
import constants from '../constants';
import API from '../Api_paths';
// Collected New Value For Fields 
export const newValFields = (newFields) => (dispatch) => {    
    let collected = Object.values(newFields.reduce((acc,cur)=>Object.assign(acc,{[cur.key]:cur}),{}));
    console.log(collected);

    dispatch({ type: constants.NEW_VAL_FIELDS, newFields });
    dispatch({ type: constants.TO_SAVE_FIELDS, collected });
}

export const savedFieldsVals = (savedFieldVals) => (dispatch) => {  
    // console.log('action '+ savedFieldVals);  
    let value = {14526:"ali"}
    // var bodyFormData = new FormData();
    // bodyFormData.append({14526:"ali"}); 
    return axios.post(API.SaveFieldsVal, value)
        .then((success) => {          
            console.log(success);
            // dispatch({ type: constants.LOOK_UP_KEY, LookupKeyVal});
        })
        .catch((error) => {
            console.log(error.message);
        });
}