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
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="26" viewBox="0 0 22 26">
  <g id="Group_7315" data-name="Group 7315" transform="translate(-29.095 -101)">
    <rect id="Rectangle_4844" data-name="Rectangle 4844" width="22" height="26" rx="3" transform="translate(29.095 101)" fill="#fff" opacity="0.95"/>
    <g id="Group_7176" data-name="Group 7176" transform="translate(36.078 107.001)">
      <g id="Group_7141" data-name="Group 7141">
        <path id="Path_11502" data-name="Path 11502" d="M170.387,113.226l5.861-5.784a.964.964,0,1,1,1.353,1.373l-4.188,4.133-.723.964.723.964,4.188,4.133a.964.964,0,1,1-1.353,1.373l-5.861-5.783a.963.963,0,0,1,0-1.373Z" transform="translate(-170.1 -107.165)" fill="#a2a6b7"/>
      </g>
    </g>
  </g>
</svg>

                    :
                    <img src={this.props.backImg ? this.props.backImg : deleteMark} />
                }                
            </div>
        )
    }
}

const mapStateToProps = state => ({})
export default connect(mapStateToProps)(BackBtn)