
export const collectionAllChanged = (AllChanged) => () => {
    console.log("collectionAllChanged ----- ");
    let employee = {};
    // newFieldsVal.push(AllChanged);
     employee = Object.assign(employee, AllChanged);


    
    console.log(employee);
    // dispatch({ type: constants.HEADER_USER_SECTIONS, UserSections });
}