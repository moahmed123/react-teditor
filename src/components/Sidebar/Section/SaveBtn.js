import React, { Component } from 'react';
import { SaveSCFLD, NOTIFICATION} from '../../../actions';
import { Button, Spinner} from "react-bootstrap";
import { connect } from 'react-redux';
import check from '../../../assets/svg/check-mark.svg';
import localization from '../../../localization/localization'

class SaveBtn extends Component {  
    constructor(props) {
        super(props);
        this.state = {
            SaveLoading: false,         
        }        
    }
    componentDidMount(){
        // localStorage.setItem('Save_to_Loading', false); 
    }
    _saveFieldsCahnges = (e) => {                              
        // Check User Change Data Or Not:         
        if(this.props.newFieldsChanges){    
            this.setState({SaveLoading: true})                        
            //Get Data and send it to Save. 
            let savedFieldsVals = this.props.newFieldsChanges;     
            this.props.dispatch(SaveSCFLD.savedFieldsVals(savedFieldsVals));
            setTimeout(()=> {
                this.setState({SaveLoading: false})
            },2000)            
        }else{
            // MSG: Please Change For Fields Value 
            let notification_result = {
                status: 'warning', // danger
                title: null,
                Message : localization.notChanged,
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
                    <span>{localization.save}</span>
                    {
                        // console.log(this.state.SaveLoading)
                        this.state.SaveLoading?
                            <Spinner animation="grow" size="sm" className='loading_save'/> 
                        : 
                            null                         
                    }                    
                </div>
        )
    }
}
const mapStateToProps = state => ({
    newFieldsChanges: state.newValFields.collectANewFields,
    notification: state.notification.result, // get notification When Save and publshed data
})
export default connect(mapStateToProps)(SaveBtn)