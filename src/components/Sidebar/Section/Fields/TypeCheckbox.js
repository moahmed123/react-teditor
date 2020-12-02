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
        let newCheckboxVal = {"key": e.target.id,"value": e.target.value,};
        // let newCheckboxVal= ['name']
        if(this.props.newFields){
            // console.log(this.props.newFields)
            // let x = [];
            // x.push(this.props.newFields);
            // x.push(newCheckboxVal);
            // const obj3 = { ...this.props.newFields, ...newCheckboxVal };
            // console.log(obj3)
            // let x = this.props.newFields.concat(newCheckboxVal)
            // let x = {old: this.props.newFields, new : newCheckboxVal}
            // this.props.dispatch(SaveSCFLD.newValFields(x));
            // console.log(this.props.newFields)
            // this.props.dispatch(SaveSCFLD.newValFields(x));
            let actionSaved = this.props.newFields;
            this.props.dispatch(SaveSCFLD.newValFields(newCheckboxVal,actionSaved));
        }else{
            // this.props.dispatch(SaveSCFLD.newValFields(newCheckboxVal));
            // console.log("this.props.newFields")
        }
        // this.props.dispatch(SaveSCFLD.newValFields(newCheckboxVal))
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