import React, { Component } from 'react';
import deleteMark from '../../../assets/svg/delete-2.svg';
import { connect } from 'react-redux';
import {ROUTECOM} from '../../../actions';

class BackBtn extends Component {
    /**
     * Status  :  { null } =>  Redirect To Home Page ;
     * backImg :  Replace for image  
     * BackCom : Use When back Component
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
    }
    render() {
        return (
            <div className="delete" onClick={this._BackHistory}>
                <img src={this.props.backImg ? this.props.backImg : deleteMark} />
            </div>
        )
    }
}

const mapStateToProps = state => ({})
export default connect(mapStateToProps)(BackBtn)