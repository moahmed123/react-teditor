/* eslint-disable no-unused-vars */
import { push } from 'react-router-redux'
import axios from 'axios'
import constants from './constants'

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

export const firstData = () => (dispatch) => {  
        const urlAllData = "http://qaz123.expandcart.com/admin/teditor/teditor/getTemplateStructure";
        return axios.get(urlAllData)
        .then((Alldata) => {          
            console.log(Alldata);
            dispatch({ type: constants.DATAFIRST, Alldata });            
        })
        .catch( (error) => {
          console.log(error.message);
        });
}