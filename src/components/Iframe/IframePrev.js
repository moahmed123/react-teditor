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
                sectionId = window.location.hash.split('/')[2],
                // OriginLocal  = window.location.origin; // As Life Production 
                OriginLocal  = ""; // As demo Production                 
                if (window.location.hostname == 'localhost') {
                    OriginLocal = "http://qaz123.expandcart.com";
                }
                // ( sectionId ) ? "&draftsectionid" + sectionId : null
                                    console.log(sectionId)
            if(routeForIframe == ''){ routeForIframe = "common/home";}
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
                {/* <iframe width = '100%' height = '600px'
                 src='http://qaz123.expandcart.com/index.php?route=common/home&isdraft=1&draftlangcode=en&draftsectionid=1311'></iframe> */}
                {this._IframeData()}   
                {/* <Iframe url="http://qaz123.expandcart.com/index.php?route=common/home&isdraft=1&draftlangcode=en&draftsectionid=1311"
                    width="450px"
                    height="450px"
                    // id="myId"
                    className="iframe-site"
                    display="initial"
                    allowFullScreen
                    frameBorder
                    position="relative"/>  */}
            </div>                                  
        )
    }
}
const mapStateToProps = state => ({
    initialized: state.app.initialized,
    dataFA: state.app.dataFirst,
    PageResions : state.slidebar.regions,
    getlanguages: state.getlanguages.GetLangs
})
// export default IframePrev;
export default connect(mapStateToProps)(IframePrev);