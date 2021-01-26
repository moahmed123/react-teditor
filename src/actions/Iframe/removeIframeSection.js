import { refreshIframe } from './refreshIframe';
import $ from "jquery-1.10.2";

export const removeIframeSection = (sectionId) => (dispatch) => {
    if($('.iframe-site').contents().find('#section-' + sectionId).length > 0){
        $('.iframe-site').contents().find('#section-' + sectionId).remove();
    }  
    else{
        dispatch(refreshIframe()) 
    }
}