import React, { Component } from 'react';
import { SaveSCFLD, NOTIFICATION} from '../../../actions';
import { Button} from "react-bootstrap";
import { connect } from 'react-redux';
import check from '../../../assets/svg/check-mark.svg';

class SaveBtn extends Component {  
    _saveFieldsCahnges = (e) => {        
        // Check User Change Data Or Not:         
        if(this.props.newFieldsChanges){
            //Get Data and send it to Save. 
            let savedFieldsVals = this.props.newFieldsChanges;     
            this.props.dispatch(SaveSCFLD.savedFieldsVals(savedFieldsVals));            
        }else{
            console.log('Please Change For Fields Value ')   
            let notification_result = {
                status: 'warning', // danger
                title: null,
                Message : "Please Change Any Fields Value",
                delay : 2000            
            }
            this.props.dispatch(NOTIFICATION.notification(notification_result));
        }          
    }
    render() {
        return (
                <div className="check" onClick={this._saveFieldsCahnges}>
                    {/* <img src={check} /> */}
                    <svg xmlns="http://www.w3.org/2000/svg" width="10.136" height="7.684" viewBox="0 0 10.136 7.684">
                        <path fill="#155ebc" d="M146.887 168.139a.767.767 0 0 1 0 1.085l-6.149 6.149a.768.768 0 0 1-1.085 0l-2.451-2.451a.767.767 0 1 1 1.085-1.085l1.908 1.908 5.606-5.607a.768.768 0 0 1 1.086.001z" transform="translate(-136.976 -167.914)"/>
                    </svg>
                    <span>save</span>
                </div>
        )
    }
}
const mapStateToProps = state => ({
    newFieldsChanges: state.newValFields.collectANewFields
})
export default connect(mapStateToProps)(SaveBtn)