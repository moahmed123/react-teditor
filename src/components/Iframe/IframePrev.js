import React, { Component } from 'react';
import { connect } from 'react-redux';
import API from '../../actions/Api_paths'

//http://qaz123.expandcart.com/index.php?route=common/home&isdraft=1&draftlangcode=en&draftsectionid=613
class IframePrev extends Component {
    _IframeData = () => {
        if(this.props.PageResions && this.props.getlanguages){
            console.log(this.props.PageResions.Route, this.props.getlanguages.data.ActiveLanguage.code , API.IframeUrl)
            let routeForIframe = this.props.PageResions.Route,
                carrentlyLang  = this.props.getlanguages.data.ActiveLanguage.code,
                urlIndex     = API.IframeUrl,
                sectionId = window.location.pathname.split('/')[2], // /section/404/header
                // OriginLocal  = window.location.origin; // As Life Production 
                OriginLocal  = "http://qaz123.expandcart.com"; // As demo Production 
                // ( sectionId ) ? "&draftsectionid" + sectionId : null
                                    console.log(sectionId)
            if(routeForIframe == ''){ routeForIframe = "common/home";}
            if(sectionId != undefined){
                console.log( OriginLocal + 
                    urlIndex + 
                    "route=" +
                    routeForIframe +
                    "&isdraft=" + 1 +
                    "&draftlangcode=" +
                    carrentlyLang + 
                    "&draftsectionid=" + 
                    sectionId )
                return (
                    <iframe 
                        src = {
                            OriginLocal + 
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
                            urlIndex + 
                            "route=" +
                            routeForIframe +
                            "&isdraft=1" +
                            "draftlangcode=" +
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
                 src='http://qaz123.expandcart.com/index.php?route=common/home&isdraft=1&draftlangcode=en&draftsectionid=596'></iframe> */}
                {this._IframeData()}               
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