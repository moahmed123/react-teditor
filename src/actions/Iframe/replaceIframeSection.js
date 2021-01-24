import { refreshIframe } from './refreshIframe';
import $ from "jquery-1.10.2";

export const replaceIframeSection = (sectionId, sectionHTML) => (dispatch) => {
    // Refresh Iframe When Save.
    if(sectionHTML){
        $('.iframe-site').contents().find('#section-' + sectionId).replaceWith(sectionHTML);
    }  
    else{
        dispatch(refreshIframe()) 
    }
}