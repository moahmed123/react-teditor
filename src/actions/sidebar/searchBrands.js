import axios from 'axios'
import constants from '../constants';
import API from '../Api_paths';

export const searchBrands = (searchVal) => (dispatch) => {              
    // axios.post(url, data, headers)
    return axios.get(API.searchBrands,{ params: {BrandName: searchVal}})    
        .then((Brands_data) => {           
            
            let dataBrands = Brands_data.data.Brands;
            console.log(dataBrands)
            dispatch({ type: constants.SEARCH_BRANDS, dataBrands});
        })
        .catch((error) => {
            console.log(error.message);
        });    
}