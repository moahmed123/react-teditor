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
                    return <input className="generic--section__form" placeholder="" id={langInputVal.id} key={key} type="text" defaultValue = {langInputVal.Value} onKeyUpCapture={this._changeTextVal}/>
                }
            })
        } else if (this.props.codelang == 'ar'){
            return this.props.FieldData.FieldVals.map((langInputVal, key) => {
                if(langInputVal.Lang == 'ar'){
                    return <input className="generic--section__form" placeholder="" id={langInputVal.id} key={key} type="text" defaultValue = {langInputVal.Value} onKeyUpCapture={this._changeTextVal}/>
                }
            })
        } else if (this.props.codelang == 'fr'){
            return this.props.FieldData.FieldVals.map((langInputVal, key) => {
                if(langInputVal.Lang == 'fr'){
                    return <input className="generic--section__form" placeholder="" id={langInputVal.id} key={key} type="text" defaultValue = {langInputVal.Value} onKeyUpCapture={this._changeTextVal}/>
                }
            })
        }else{
            return this.props.FieldData.FieldVals.map((langInputVal, key) => {
                if(langInputVal.Lang == this.props.codelang){
                    return <input className="generic--section__form" placeholder="" id={langInputVal.id} key={key} type="text" defaultValue = {langInputVal.Value} onKeyUpCapture={this._changeTextVal}/>
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
                    {/* Start Wonder Login */}
                        {
                            // Check Template name for Wonder to add radio input 
                            TemplateName ?                                
                                <div className="label generic--section">
                                
                                    <h2> Radio </h2>
                                    <div style={{
                                        borderRadius: 10, 
                                        borderWidth: 1, 
                                        width: 20, height: 20,
                                        borderWidth: 2,
                                        borderStyle: "solid",
                                        borderColor: "#333",
                                        position:"relative"
                                        }}
                                        onClick = {() => this.setState({radioToggleText: !this.state.radioToggleText})}                                         
                                         >
                                       {
                                           this.state.radioToggleText?
                                                <div style={{                                            
                                                    background: "#333",
                                                    borderRadius: 100,
                                                    width: 11,
                                                    height: 11,
                                                    position: 'absolute',
                                                    left: 0,
                                                    right: 0,
                                                    marginLeft: "auto",
                                                    marginRight: "auto",
                                                    marginTop: 0,
                                                    marginBottom: 0,                                                                                                        
                                                    transform: `translate(${0}px, ${2}px)`
                                                }}></div>
                                            : 
                                                null
                                       }                                        
                                    </div>
                                
                                    {
                                        this.state.radioToggleText? 
                                            <>
                                                {
                                                    this.props.FieldData.Name != '' ? 
                                                        <h4 className="setting--sidebar__header"> {this.props.FieldData.Name} </h4>             
                                                    : 
                                                        null
                                                }                              
                                                {this._setlangVal()}                            
                                                <span className="focus-border"></span>
                                            </>
                                        : 
                                            null
                                    }                                                                   
                                </div>
                            : 
                                <div className="label generic--section">
                                    {
                                        this.props.FieldData.Name != '' ? 
                                            <h4 className="setting--sidebar__header"> {this.props.FieldData.Name} </h4>             
                                        : 
                                            null
                                    }                              
                                    {this._setlangVal()}                            
                                    <span className="focus-border"></span>
                                </div>
                        }             
                        {/* End Wonder Login */}     

                        {/* <div className="label generic--section">
                            {
                                this.props.FieldData.Name != '' ? 
                                    <h4 className="setting--sidebar__header"> {this.props.FieldData.Name} </h4>             
                                : 
                                    null
                            }                              
                            {this._setlangVal()}                            
                            <span className="focus-border"></span>
                        </div> */}
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