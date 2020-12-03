import axios from 'axios'
import constants from '../constants';
import API from '../Api_paths';

export const searchProducts = (searchVal) => (dispatch) => {                  
    return axios.get(API.searchProducts,{ params: {ProductName: searchVal}})    
        .then((dataProducts) => {           
            
            let ProData = dataProducts.data.Products;
            console.log(ProData)
            dispatch({ type: constants.SEARCH_PRO, ProData});
        })
        .catch((error) => {
            console.log(error.message);
        });    
}