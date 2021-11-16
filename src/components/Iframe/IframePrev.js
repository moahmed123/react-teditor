import React, { Component } from 'react';
import { connect } from 'react-redux';
import API from '../../actions/Api_paths';

class IframePrev extends Component {

    onLoadIframe = () =>{        
    //    console.log('ifream id loaded')
    }
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
                if (window.location.hostname == 'localhost' || window.location.hostname == 'qaz123.expandcart.com') {
                    OriginLocal = "http://qaz123.expandcart.com";
                }
                // ( sectionId ) ? "&draftsectionid" + sectionId : null
                                    
            if(routeForIframe == ''){ routeForIframe = "common/home";}
            let { sectionId } = this.props;
            console.log(sectionId)
            // if(sectionId != undefined){               
            //     return (
            //         <iframe 
            //             src = {
            //                 OriginLocal + 
            //                 API.IframeLink + 
            //                 urlIndex + 
            //                 "route=" +
            //                 routeForIframe +
            //                 "&isdraft=" + 1 +
            //                 "&draftlangcode=" +
            //                 carrentlyLang + 
            //                 "&draftsectionid=" + 
            //                 sectionId                    
            //             } 
            //             className='iframe-site' scrolling="yes"></iframe>
            //     )    
            // }else{
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
                        onLoad={this.onLoadIframe}
                        className='iframe-site'></iframe>
                )
            // }           
        }
    }

    render() {
        const {currentPlan} = this.props;
        return (             
            <div className={`main-frame ${currentPlan?  currentPlan == 6 || currentPlan == 8 ? "main-frame-banner-sm": "" : "" }`}>                
                {this._IframeData()}                 
            </div>                                  
        )
    }
}
const mapStateToProps = state => ({
    // initialized: state.app.initialized,
    // dataFA: state.app.dataFirst,
    PageResions : state.slidebar.regions,
    getlanguages: state.getlanguages.GetLangs,
    currentPlan: state.currentPlan.UserCurrentPlan,
    // sectionId: state.sectionData.sectionId,
})
// export default IframePrev;
export default connect(mapStateToProps)(IframePrev);