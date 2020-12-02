import React, { Component } from 'react';
import { SaveSCFLD } from '../../../../actions';
import { connect } from 'react-redux'

class TypeCheckbox extends Component {
    _setlangVal = () => {
        if (this.props.codelang == 'en') {
            return this.props.FieldData.FieldVals.map((langInputVal, key) => {
                if (langInputVal.Lang == 'en') {
                    return   <input type="checkbox" id={langInputVal.id} defaultChecked = {langInputVal.Value} key={key} onChange={this._changeCheckboxVal}/>;
                }
            })
        } else if (this.props.codelang == 'ar') {
            return this.props.FieldData.FieldVals.map((langInputVal, key) => {
                if (langInputVal.Lang == 'ar') {
                    return   <input type="checkbox" defaultChecked = {langInputVal.Value} key={key}/>;
                }
            })
        } else if (this.props.codelang == 'fr') {
            return this.props.FieldData.FieldVals.map((langInputVal, key) => {
                if (langInputVal.Lang == 'fr') {
                    return   <input type="checkbox" defaultChecked = {langInputVal.Value} key={key}/>;
                }
            })
        } else {
            return this.props.FieldData.FieldVals.map((langInputVal, key) => {
                if (langInputVal.Lang == 'en') {
                    return   <input type="checkbox" defaultChecked = {langInputVal.Value} key={key}/>;
                }
            })
        }
    }
    _changeCheckboxVal = (e) => {     

        let newCheckboxVal = {"key": e.target.id,"value": e.target.checked,}; 

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

            <div className="setting--sidebar__color">
                <div className="sidebar__color__main">
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