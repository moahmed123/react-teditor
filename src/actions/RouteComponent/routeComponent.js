import constants from '../constants';

export const routeComponent = (routeComponent, backComponent) => (dispatch)=>{   
    console.log(routeComponent, "backComponent" + backComponent) 
    dispatch({type: constants.ROUTE_COMPONENT, routeComponent})
    //Back_ROUTE_COMPONENT
    dispatch({type: constants.Back_ROUTE_COMPONENT, backComponent})
}