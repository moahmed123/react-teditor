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