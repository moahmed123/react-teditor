import { refreshIframe } from './refreshIframe';
import $ from "jquery-1.10.2";

export const replaceIframeSection = (sectionId, sectionHTML, sectionScripts) => (dispatch) => {
    // Refresh Iframe When Save.
    if(sectionHTML){
        $('.iframe-site').contents().find('#section-' + sectionId).replaceWith(sectionHTML);
        if(sectionScripts){
            if(sectionScripts == "false"){
                console.log("sectionScripts",sectionScripts)
                dispatch(refreshIframe())                
                sectionScripts = null ;
                console.log("sectionScripts = ",sectionScripts)
            }
            
			var myIframe = document.getElementsByClassName("iframe-site")[0];
			var script = myIframe.contentWindow.document.createElement("script");
			script.type = "text/javascript";
			script.innerHTML = sectionScripts;
            myIframe.contentWindow.document.body.appendChild(script);         
        }
    }  
    else{
        dispatch(refreshIframe()) 
    }
}