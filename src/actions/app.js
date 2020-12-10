/* eslint-disable no-unused-vars */
import { push } from 'react-router-redux'
import axios from 'axios'
import constants from './constants';
import API from './Api_paths';
import {headerUserSections} from './sidebar/header_data';
import {FooterUserSections} from './sidebar/footer_data';
import {getLanguages} from './getLanguages'

require("react/package.json"); // react is a peer dependency. 

var reactColor = require("react-color")
export const initApp = () => (dispatch, getState) => {
    dispatch({ type: constants.INIT_APP })
}

export const incrementCounter = () => (dispatch, getState) => {
    dispatch({ type: constants.INCREMENT_COUNTER })
}

export const toggleTransitions = () => (dispatch, getState) => {
    dispatch({ type: constants.TOGGLE_TRANSITIONS })
}

export const loadData = () => async (dispatch, getState) => {
    const { data } = await axios.get(`${process.env.REACT_APP_API_ENDPOINT}/posts/1`)
    dispatch({ type: constants.LOAD_DATA, data })
}

export const resetApp = () => async (dispatch, getState) => {
    dispatch({ type: constants.RESET_APP })
    await dispatch(push('/'))
    dispatch({ type: constants.TOGGLE_TRANSITIONS })
}
// React Fun For App 
export const firstData = () => (dispatch) => {
    console.log(API.getTemplateStructureV2);
    const urlAllData = API.getTemplateStructureV2;
    return axios.get(urlAllData)
        .then((Alldata) => {
            console.log(Alldata);
            dispatch({ type: constants.DATAFIRST, Alldata });
        })
        .catch((error) => {
            console.log(error.message);
        });
}

// Get Page App For Dropdown return when load page 
export const getDropdownPages = () => (dispatch) => {
    // Get Languages Fields
    dispatch(getLanguages());
    const urlAllData = API.getTemplateStructureV2;
    return axios.get(urlAllData)
        .then((Alldata) => {     
            console.log(Alldata.data) 
            let Layouts = Alldata.data.Layouts;
            // Get Pages For Dorpdown
            const pagesData = Alldata.data.Pages.slice(1); // All Page Data Only To Send it 
            console.log(pagesData);
            // First Page for render
            dispatch(reloadRegionsOfPages(pagesData[0]));
            console.log(pagesData[0].Regions)
            // Action For Sildbar Header To Get Data 
            for(let i =0; i< pagesData[0].Regions.length; i++){
                // Send Header Data For Slidbar 
                if(pagesData[0].Regions[i].CodeName == 'header'){
                    dispatch(headerUserSections(pagesData[0].Regions[i])) 
                }
                // Send Footer Data For Slidbar 
                if(pagesData[0].Regions[i].CodeName == 'footer'){
                    dispatch(FooterUserSections(pagesData[0].Regions[i])) 
                }
            }            
            //Sent TO getPagesDropDown
            dispatch({ type: constants.DROPDOWN_PAGES, pagesData });
            // Send Layouts Data 
            dispatch({ type: constants.LAYOUTS_PAGES, Layouts });
            // Header Data For Json 
            // dispatch({ type: constants.HEADER_USER_SECTIONS, pagesData });
        })
        .catch((error) => {
            console.log(error.message);
        });
}
export const reloadRegionsOfPages = (regions) => (dispatch) => {
    console.log("regions ----- ");  
    console.log(regions);
    dispatch({ type: constants.REGIONSOFPAGE, regions });
}

export const RefreshData = () => (dispatch) => {  
    const pagesData = null
    dispatch({ type: constants.DROPDOWN_PAGES, pagesData });
    dispatch(getDropdownPages())    
}