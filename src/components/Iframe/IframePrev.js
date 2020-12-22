import React, { Component } from 'react';
import { connect } from 'react-redux';
import API from '../../actions/Api_paths';

class IframePrev extends Component {
    _IframeData = () => {
        if(this.props.PageResions && this.props.getlanguages){
            console.log(this.props.PageResions.Route, this.props.getlanguages.data.ActiveLanguage.code , API.IframeUrl)
            const length_Id = API.Paths.split('/').length;            
            let routeForIframe = this.props.PageResions.Route,

                carrentlyLang  = this.props.getlanguages.data.ActiveLanguage.code,
                urlIndex     = API.IframeUrl,
                
               // sectionId = window.location.pathname.split('/')[length_Id], // /section/404/header
                // sectionId = window.location.hash.split('/')[2],

                OriginLocal  = ""; // As demo Production                 
                if (window.location.hostname == 'localhost') {
                    OriginLocal = "http://qaz123.expandcart.com";
                }
                // ( sectionId ) ? "&draftsectionid" + sectionId : null
                                    
            if(routeForIframe == ''){ routeForIframe = "common/home";}
            let { sectionId } = this.props;
            console.log(sectionId)
            if(sectionId != undefined){               
                return (
                    <iframe 
                        src = {
                            OriginLocal + 
                            API.IframeLink + 
                            urlIndex + 
                            "route=" +
                            routeForIframe +
                            "&isdraft=" + 1 +
                            "&draftlangcode=" +
                            carrentlyLang + 
                            "&draftsectionid=" + 
                            sectionId                    
                        } 
                        className='iframe-site' scrolling="yes"></iframe>
                )    
            }else{
                return (
                    <iframe 
                        src = {
                            OriginLocal + 
                            API.IframeLink + 
                            urlIndex + 
                            "route=" +
                            routeForIframe +
                            "&isdraft=1" +
                            "&draftlangcode=" +
                            carrentlyLang                       
                        } 
                        className='iframe-site'></iframe>
                )
            }           
        }
    }

    render() {
       
        return (             
            <div className="main-frame">                
                {this._IframeData()}                 
            </div>                                  
        )
    }
}
const mapStateToProps = state => ({
    initialized: state.app.initialized,
    dataFA: state.app.dataFirst,
    PageResions : state.slidebar.regions,
    getlanguages: state.getlanguages.GetLangs,
    sectionId: state.sectionData.sectionId,
})
// export default IframePrev;
export default connect(mapStateToProps)(IframePrev);