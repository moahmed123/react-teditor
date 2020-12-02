import axios from 'axios'
import constants from '../constants';
import API from '../Api_paths';

export const searchCategories = (searchVal) => (dispatch) => {              
    // axios.post(url, data, headers)
    return axios.get(API.searchCategories,{ params: {CategoryName: searchVal}})    
        .then((dataCategories) => {           
            
            let CateData = dataCategories.data.Categories;
            console.log(CateData)
            dispatch({ type: constants.SEARCH_CATE, CateData});
        })
        .catch((error) => {
            console.log(error.message);
        });    
}