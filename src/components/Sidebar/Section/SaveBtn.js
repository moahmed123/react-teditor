import React, { Component } from 'react';
import { SaveSCFLD } from '../../../actions';
import { Button} from "react-bootstrap";
import { connect } from 'react-redux';
import check from '../../../assets/svg/check-mark.svg';

class SaveBtn extends Component {  
    _saveFieldsCahnges = (e) => {        
        console.log('save');
        console.log(this.props.newFieldsChanges)
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