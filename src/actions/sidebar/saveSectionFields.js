import constants from '../constants'
// Collected New Value For Fields 
export const newValFields = (newFields, OldSave) => (dispatch) => {
    // console.log("collectionAllChanged ----- ");
    // let employee = {};
    // // newFieldsVal.push(AllChanged);
    //  employee = Object.assign(employee, AllChanged);
    // console.log(newFields);
    //newFields {} , oldNew {}
    
    
    console.log(newFields)
    // console.log(OldSave);
    // // if()
    let collected = {OldSave, newFields }
    // console.log('collection', collected)

    dispatch({ type: constants.NEW_VAL_FIELDS, newFields });
    dispatch({ type: constants.TO_SAVE_FIELDS, collected });
}