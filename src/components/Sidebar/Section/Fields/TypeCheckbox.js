import React, { Component } from 'react';
import { SaveSCFLD } from '../../../../actions';
import { connect } from 'react-redux'

class TypeCheckbox extends Component {
    _setlangVal = () => {
        
        if (this.props.codelang == 'en') {
            return this.props.FieldData.FieldVals.map((langInputVal, key) => {
                if (langInputVal.Lang == 'en') {                    
                    if(langInputVal.Value == 0 || langInputVal.Value == false){
                        return   <input type="checkbox" id={langInputVal.id} defaultChecked = '' key={key} onChange={this._changeCheckboxVal}/>;
                    }else{
                        return   <input type="checkbox" id={langInputVal.id} defaultChecked = 'check' key={key} onChange={this._changeCheckboxVal}/>;
                    }                    
                }
            })
        } else if (this.props.codelang == 'ar') {
            return this.props.FieldData.FieldVals.map((langInputVal, key) => {
                if (langInputVal.Lang == 'ar') {
                    if(langInputVal.Value == 0 || langInputVal.Value == false){
                        return   <input type="checkbox" id={langInputVal.id} defaultChecked = '' key={key} onChange={this._changeCheckboxVal}/>;
                    }else{
                        return   <input type="checkbox" id={langInputVal.id} defaultChecked = 'check' key={key} onChange={this._changeCheckboxVal}/>;
                    }                    
                }
            })
        } else if (this.props.codelang == 'fr') {
            return this.props.FieldData.FieldVals.map((langInputVal, key) => {
                if (langInputVal.Lang == 'fr') {
                    if(langInputVal.Value == 0 || langInputVal.Value == false){
                        return   <input type="checkbox" id={langInputVal.id} defaultChecked = '' key={key} onChange={this._changeCheckboxVal}/>;
                    }else{
                        return   <input type="checkbox" id={langInputVal.id} defaultChecked = 'check' key={key} onChange={this._changeCheckboxVal}/>;
                    }                    
                }
            })
        } else {
            return this.props.FieldData.FieldVals.map((langInputVal, key) => {
                if (langInputVal.Lang == 'en') {
                    if(langInputVal.Value == 0 || langInputVal.Value == false){
                        return   <input type="checkbox" id={langInputVal.id} defaultChecked = '' key={key} onChange={this._changeCheckboxVal}/>;
                    }else{
                        return   <input type="checkbox" id={langInputVal.id} defaultChecked = 'check' key={key} onChange={this._changeCheckboxVal}/>;
                    }                    
                }
            })
        }
    }
    _changeCheckboxVal = (e) => {     
        let checkValTOJ; 
        // To Make Value For Checked is Number: 
        (e.target.checked)? checkValTOJ = 1 : checkValTOJ = 0;         
        // Create Json Data To send 
        let newCheckboxVal = {"key": e.target.id,"value": checkValTOJ,}; 

        if(this.props.newFields){
            let x = this.props.newFields; // first input 
            let s = -1;
            x.map((d, key)=>{
                if(d.key == newCheckboxVal.key){
                    d.value =  newCheckboxVal.value;                    
                    this.props.dispatch(SaveSCFLD.newValFields(x))
                    // break;
                }else{
                    s = 0;
                }
            })
            if(s >= 0 ){
                x.push(newCheckboxVal);
                this.props.dispatch(SaveSCFLD.newValFields(x)); 
            } 
        }else{
            let x2 = []
            let lg = x2.push(newCheckboxVal);

            this.props.dispatch(SaveSCFLD.newValFields(x2)); 
        }        
    }
    render() {
        return (

            <div className="setting--sidebar__color mb-3">
                <div className="sidebar__color__main  set--padding">
                    <div className="color__main__content">
                        <label className="check-container">                            
                            {this.props.FieldData.Name}
                            {this._setlangVal()}
                            <span className="checkmark"></span>
                        </label>
                    </div>
                </div>
            </div>
        )
    }
}
const mapStateToProps = state => ({
    newFields: state.newValFields.newFields
})
export default connect(mapStateToProps)(TypeCheckbox)