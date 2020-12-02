import axios from 'axios'
import constants from '../constants';
import API from '../Api_paths';

export const getLookupKey = (LookupKey) => (dispatch) => {          
    // axios.post(url, data, headers)
    return axios.get(API.getLookupKey,{ params: {LookupKey: LookupKey}})
        .then((LookupKeyVal) => {
            // console.log(LookupKey);
            // let LookupKeyVal = LookupKey.data.Lookup;
            // console.log(LookupKeyVal);
            // dispatch({ type: constants.LOOK_UP_KEY, LookupKeyVal});
            // let LookupKeyVal = [];
            // LookupKeyVal.push(LookupKey.data.Lookup);
            dispatch({ type: constants.LOOK_UP_KEY, LookupKeyVal});

        })
        .catch((error) => {
            console.log(error.message);
        });    
}