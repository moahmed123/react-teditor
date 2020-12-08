import axios from 'axios'
import constants from '../constants';
import API from '../Api_paths';

export const searchLink = (searchVal) => (dispatch) => {                  
    return axios.get(API.searchLink,{ params: {search: searchVal}})    
        .then((dataLink) => {           
            
            let LinkData = dataLink.data.Links;
            console.log(LinkData)
            dispatch({ type: constants.SEARCH_LINK, LinkData});
        })
        .catch((error) => {
            console.log(error.message);
        });    
}
export const LinkInputVal = (valInputLink) => (dispatch) => {
    dispatch({ type: constants.LINK_INPUT_VAlUE, valInputLink});
} 