/* eslint-disable no-unused-vars */
import { push } from 'react-router-redux'
import axios from 'axios'
import constants from './constants';
import API from './Api_paths';
import {headerUserSections} from './sidebar/header_data';
import {FooterUserSections} from './sidebar/footer_data';
import {webPages} from './sidebar/webPages';
import {getLanguages} from './getLanguages';
import { getTemplateSettings } from './sidebar/getTemplateSettings'

require("react/package.json"); // react is a peer dependency. 


// Get Page App For Dropdown return when load page 
export const getDropdownPages = () => (dispatch) => {
    // Get Languages Fields
    dispatch(getLanguages());
    const urlAllData = API.getTemplateStructureV2;
    return axios.get(urlAllData)
        .then((response) => {     
            console.log(response.data) 
            let Layouts = response.data.Layouts;
            // Get Pages For Dorpdown
            const pagesData = response.data.Pages; // All Page Data Only To Send it 
            console.log(pagesData);
            // First Page for render
            dispatch(reloadRegionsOfPages(pagesData[0]));
            console.log(pagesData[0].Regions)
            // Action For Sidbar Header To Get Data 
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

            //send WebPages            
            dispatch(webPages(response.data.WebPages)) 
            
            // Header Data For Json 
            // dispatch({ type: constants.HEADER_USER_SECTIONS, pagesData });

            // Get Style Theme To Cahe it for Brawser 
            dispatch(getTemplateSettings());
            // console.log(process.env.REACT_APP_API_ENDPOINT)
        })
        .catch((error) => {
            console.log(error.message);
        });
}
export const reloadRegionsOfPages = (regions) => (dispatch) => {
    console.log("regions ----- 2");  
    console.log(regions);
    dispatch({ type: constants.REGIONSOFPAGE, regions });
}

export const RefreshData = () => (dispatch) => {  
    const pagesData = null,
          regions = null,
          Layouts = null ;
    // dispatch({ type: constants.DROPDOWN_PAGES, pagesData });
    // dispatch({ type: constants.LAYOUTS_PAGES, Layouts });
    dispatch({ type: constants.REGIONSOFPAGE, regions });
    console.log('Not Data ')
    dispatch(getDropdownPages())    
}