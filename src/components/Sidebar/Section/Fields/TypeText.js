import React, { Component } from 'react';
import { SaveSCFLD } from '../../../../actions';
import { connect } from 'react-redux'

class TypeText extends Component {  
    state = {
        radioToggleText: true
    }    
    _setlangVal = () => {
        if(this.props.codelang == 'en'){
            return this.props.FieldData.FieldVals.map((langInputVal, key) => {
                if(langInputVal.Lang == 'en'){
                    return <input className="generic--section__form" placeholder="" id={langInputVal.id} key={key} type="text" maxLength="25" defaultValue = {langInputVal.Value} onKeyUpCapture={this._changeTextVal}/>
                }
            })
        } else if (this.props.codelang == 'ar'){
            return this.props.FieldData.FieldVals.map((langInputVal, key) => {
                if(langInputVal.Lang == 'ar'){
                    return <input className="generic--section__form" placeholder="" id={langInputVal.id} key={key} type="text" maxLength="25" defaultValue = {langInputVal.Value} onKeyUpCapture={this._changeTextVal}/>
                }
            })
        } else if (this.props.codelang == 'fr'){
            return this.props.FieldData.FieldVals.map((langInputVal, key) => {
                if(langInputVal.Lang == 'fr'){
                    return <input className="generic--section__form" placeholder="" id={langInputVal.id} key={key} type="text" maxLength="25" defaultValue = {langInputVal.Value} onKeyUpCapture={this._changeTextVal}/>
                }
            })
        }else{
            return this.props.FieldData.FieldVals.map((langInputVal, key) => {
                if(langInputVal.Lang == this.props.codelang){
                    return <input className="generic--section__form" placeholder="" id={langInputVal.id} key={key} type="text" maxLength="25" defaultValue = {langInputVal.Value} onKeyUpCapture={this._changeTextVal}/>
                }
            })
        }
    }
    _changeTextVal = (e) => {        
        
        let newTextVal = {"key": e.target.id,"value": e.target.value,};        
        
        if(this.props.newFields){                        
            let x = this.props.newFields; // first input 
            let s = -1;
            x.map((d, key)=>{
                if(d.key == newTextVal.key){
                    d.value =  newTextVal.value;                    
                    this.props.dispatch(SaveSCFLD.newValFields(x))
                    // break;
                }else{
                    s = 0;
                }
            })
            if(s >= 0 ){
                x.push(newTextVal);
                this.props.dispatch(SaveSCFLD.newValFields(x)); 
            }         
        }else{
            let x2 = []
            let lg = x2.push(newTextVal);

            this.props.dispatch(SaveSCFLD.newValFields(x2));            
        }
    }
    render() {
        const {TemplateName} = this.props;
        return (
            <div className="setting--sidebar__color">
                <div className="sidebar__color__main set--padding">
                    <div className="color__main__content">                        
                        <div className={`label generic--section ${this.props.FieldData.Name? null : 'generic--section--v2'}`} id ={this.props.FieldData.field_id}>
                            {
                                this.props.FieldData.Name != '' ? 
                                    <h4 className="setting--sidebar__header"> {this.props.FieldData.Name} </h4>             
                                : 
                                    null
                            }                              
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