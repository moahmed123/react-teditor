import React, { Component } from 'react';
import { SaveSCFLD } from '../../../actions';
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
        }          
    }
    render() {
        return (
                <Button className="check" onClick={this._saveFieldsCahnges}>
                    <img src={check} />
                </Button>
        )
    }
}
const mapStateToProps = state => ({
    newFieldsChanges: state.newValFields.collectANewFields
})
export default connect(mapStateToProps)(SaveBtn)