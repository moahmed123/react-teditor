import { refreshIframe } from './refreshIframe';
import $ from "jquery-1.10.2";

export const insertIframeSection = (sectionHTML, prevSectionId, nextSectionId) => (dispatch) => {
    // Refresh Iframe When Save.
    if(sectionHTML){
    	if(prevSectionId){
    		$('.iframe-site').contents().find('#section-' + prevSectionId).after(sectionHTML);
    	}
    	else if(nextSectionId){
    		$('.iframe-site').contents().find('#section-' + nextSectionId).before(sectionHTML);
    	}else{
    		dispatch(refreshIframe())
    	}
    }  
    else{
        dispatch(refreshIframe())
    }
}