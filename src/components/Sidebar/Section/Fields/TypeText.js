import React, { Component } from 'react';
import { SaveSCFLD } from '../../../../actions';
import { connect } from 'react-redux'

class TypeText extends Component {      
    _setlangVal = () => {
        if(this.props.codelang == 'en'){
            return this.props.FieldData.FieldVals.map((langInputVal, key) => {
                if(langInputVal.Lang == 'en'){
                    return <input className="generic--section__form" placeholder="" id={langInputVal.id} key={key} type="text" defaultValue = {langInputVal.Value} onKeyUpCapture={this._changeTextVal}/>
                }
            })
        } else if (this.props.codelang == 'ar'){
            return this.props.FieldData.FieldVals.map((langInputVal, key) => {
                if(langInputVal.Lang == 'ar'){
                    return <input className="generic--section__form" placeholder="" key={key} type="text" defaultValue = {langInputVal.Value}/>
                }
            })
        } else if (this.props.codelang == 'fr'){
            return this.props.FieldData.FieldVals.map((langInputVal, key) => {
                if(langInputVal.Lang == 'fr'){
                    return <input className="generic--section__form" placeholder="" key={key} type="text" defaultValue = {langInputVal.Value}/>
                }
            })
        }else{
            return this.props.FieldData.FieldVals.map((langInputVal, key) => {
                if(langInputVal.Lang == 'en'){
                    return <input className="generic--section__form" placeholder="" key={key} type="text" defaultValue = {langInputVal.Value}/>
                }
            })
        }
    }
    _changeTextVal = (e) => {        
        
        let newTextVal = {"key": e.target.id,"value": e.target.value,};
        // console.log(newTextVal)
        // let newTextVal = ["nameTwo"]
        
        if(this.props.newFields){
            // console.log(this.props.newFields)
            // let x = [];
            // x.push(this.props.newFields);
            // x.push(newTextVal);
            // console.log(x)
            // this.props.dispatch(SaveSCFLD.newValFields(x));
            // console.log(this.props.newFields, newTextVal)
            // const obj3 = { ...this.props.newFields, ...newTextVal };
            /*
                this.props.newFields []
                newTextVal {}
            */
            // let x = this.props.newFields.concat(newTextVal)
            // let x = {actionSaved: this.props.newFields, newAction:newTextVal}
            let actionSaved = this.props.newFields;
            this.props.dispatch(SaveSCFLD.newValFields(newTextVal,actionSaved));
            console.log(this.props.newFields)
        }else{
            let x2 = {}
            this.props.dispatch(SaveSCFLD.newValFields(newTextVal));
            // console.log("this.props.newFields")
        }
    }
    render() {
        return (
            <div className="setting--sidebar__color">
                <div className="sidebar__color__main">
                    <div className="color__main__content">                           
                        <div className="label generic--section">
                            <h4 className="setting--sidebar__header"> {this.props.FieldData.Name} </h4>
                            {this._setlangVal()}                            
                            <span className="focus-border"></span>
                        </div>
                    </div>
                </div>
            </div> 
        )        
    }
}
const mapStateToProps = state => ({
    newFields: state.newValFields.newFields
})
export default connect(mapStateToProps)(TypeText)