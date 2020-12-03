import axios from 'axios'
import constants from '../constants';
import API from '../Api_paths';
import qs from 'qs';
import {getSectionFields} from './getSectionFields'

// Collected New Value For Fields 
export const newValFields = (newFields) => (dispatch) => {
    let collected = Object.values(newFields.reduce((acc, cur) => Object.assign(acc, { [cur.key]: cur }), {}));
    console.log(collected);

    dispatch({ type: constants.NEW_VAL_FIELDS, newFields });
    dispatch({ type: constants.TO_SAVE_FIELDS, collected });
}

export const savedFieldsVals = (savedFieldVals) => (dispatch) => {
    console.log("savedFieldVals", savedFieldVals)
    let objCr;
    if (savedFieldVals.length == 1) {
        objCr = '"' + savedFieldVals[0].key + '": "' + savedFieldVals[0].value + '"';
    }
    else {
        // To Get Format To Save Values 
        for (let i = 0; i < savedFieldVals.length; i++) {
            let createVal = '"' + savedFieldVals[i].key + '": "' + savedFieldVals[i].value;
            if (i == 0) { objCr = createVal + '",' }
            if (i == savedFieldVals.length - 1) {
                // Last Of 
                objCr += createVal + '"';
            }
        }
    }
    let addToBra = "{" + objCr + "}";
    let objCrParse = JSON.parse(addToBra);
    console.log("saveTest", objCrParse);
    axios({
        method: 'post',
        url: API.SaveFieldsVal,
        data: qs.stringify(objCrParse),
        headers: {
            'content-type': 'application/x-www-form-urlencoded;charset=utf-8'
        }
    }).then((success) => {
        console.log(success);
        // Update Section Data 
        dispatch(getSectionFields())
        // TODO: Show Field Save Is Done. 
    })
}