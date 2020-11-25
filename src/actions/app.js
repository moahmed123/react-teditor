/* eslint-disable no-unused-vars */
import { push } from 'react-router-redux'
import axios from 'axios'
import constants from './constants';
import API from './Api_paths'

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

// Get Page App For Dropdown
export const getDropdownPages = () => (dispatch) => {
    const urlAllData = API.getTemplateStructureV2;
    return axios.get(urlAllData)
        .then((Alldata) => {            
            // Get Pages For Dorpdown
            const pagesData = Alldata.data.Pages.slice(1); // All Page Data Only To Send it 
            console.log(pagesData);
            // First Page for render
            dispatch(reloadRegionsOfPages(pagesData[0]));
            
            dispatch({ type: constants.DROPDOWN_PAGES, pagesData });
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