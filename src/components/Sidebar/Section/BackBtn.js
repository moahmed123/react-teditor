import React, { Component } from 'react';
import deleteMark from '../../../assets/svg/delete-2.svg';
import { connect } from 'react-redux';
import {ROUTECOM} from '../../../actions';

class BackBtn extends Component {
    /**
     * Status  :  { null } =>  Redirect To Home Page ;
     * backImg :  Replace for image  
     * BackCom : Use When back Component
     * NotImage : Set SVG Not Image 
     */
    _BackHistory = () => {                   
        let {Status, history, BackCom} = this.props; 
        if(history){                        
            // back For History:      
            window.history.back();
        }else{     
            console.log("BackCom", BackCom)
            if(BackCom){
                this.props.dispatch(ROUTECOM.routeComponent(BackCom));
            }else{
                //Redirect To Page :
                this.props.dispatch(ROUTECOM.routeComponent(Status));
            }            
        }
        let sideBar;        
        sideBar = document.querySelector('body');
        sideBar.classList.add('home-sidebar--active'); 
    }
    render() {
        return (
            <div className="delete" onClick={this._BackHistory}>
                {
                    this.props.NotImage?
                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 320 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M143 352.3L7 216.3c-9.4-9.4-9.4-24.6 0-33.9l22.6-22.6c9.4-9.4 24.6-9.4 33.9 0l96.4 96.4 96.4-96.4c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9l-136 136c-9.2 9.4-24.4 9.4-33.8 0z"></path></svg>
                    :
                    <img src={this.props.backImg ? this.props.backImg : deleteMark} />
                }                
            </div>
        )
    }
}

const mapStateToProps = state => ({})
export default connect(mapStateToProps)(BackBtn)