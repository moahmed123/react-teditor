import React, { Component } from 'react';
import { SaveSCFLD } from '../../../../actions';
import { connect } from 'react-redux'


class TypeRadio extends Component {
    constructor(props){
        super(props);
        this.state = {
            idSelectorShow: null,
            idSelectorHide: null
        }
        this._setlangVal = this._setlangVal.bind(this, false);
        this.handleLoad = this.handleLoad.bind(this);
    }
    componentDidMount() {
        window.addEventListener('load', this.handleLoad);
     }
    
     componentWillUnmount() {         
       window.removeEventListener('load', this.handleLoad)  
     }
        
     handleLoad() {
         setTimeout(()=>{
             if (document.getElementById(this.props.FieldData.hides)){
                 document.getElementById(this.props.FieldData.hides).classList.add('hidden')
             } 
             if (document.getElementById(this.props.FieldData.shows)){
                document.getElementById(this.props.FieldData.shows).classList.remove('hidden')
            }                
         },100)
                
     }
     handleLoad2() {
         console.log('change Langauge ')
        
            if (document.getElementById(this.props.FieldData.hides)){
                document.getElementById(this.props.FieldData.hides).style.display = 'none';
                document.getElementById(this.props.FieldData.shows).style.display = 'block';
            } 
                           
        
               
    }
    _setlangVal = () => {
              
        return this.props.FieldData.FieldVals.map((langInputVal, key) => {
            if (langInputVal.Lang == this.props.codelang) {                    
                if(langInputVal.Value == 0 || langInputVal.Value == false){                     
                    // this.handleLoad2();
                  return  <input type="checkbox" id={langInputVal.id} defaultChecked = '' key={key} onChange={this._changeCheckboxVal}/>
                }else{                 
                    this.handleLoad();
                    return   <input type="checkbox" id={langInputVal.id} defaultChecked = 'check' key={key} onChange={this._changeCheckboxVal}/>;
                }                    
            }
        })
        // if (this.props.codelang == 'en') {
        //     return this.props.FieldData.FieldVals.map((langInputVal, key) => {
        //         if (langInputVal.Lang == 'en') {                    
        //             if(langInputVal.Value == 0 || langInputVal.Value == false){
        //                 return   <input type="checkbox" id={langInputVal.id} defaultChecked = '' key={key} onChange={this._changeCheckboxVal}/>;
        //             }else{
        //                 return   <input type="checkbox" id={langInputVal.id} defaultChecked = 'check' key={key} onChange={this._changeCheckboxVal}/>;
        //             }                    
        //         }
        //     })
        // } else if (this.props.codelang == 'ar') {
        //     return this.props.FieldData.FieldVals.map((langInputVal, key) => {
        //         if (langInputVal.Lang == 'ar') {
        //             if(langInputVal.Value == 0 || langInputVal.Value == false){
        //                 return   <input type="checkbox" id={langInputVal.id} defaultChecked = '' key={key} onChange={this._changeCheckboxVal}/>;
        //             }else{
        //                 return   <input type="checkbox" id={langInputVal.id} defaultChecked = 'check' key={key} onChange={this._changeCheckboxVal}/>;
        //             }                    
        //         }
        //     })
        // } else if (this.props.codelang == 'fr') {
        //     return this.props.FieldData.FieldVals.map((langInputVal, key) => {
        //         if (langInputVal.Lang == 'fr') {
        //             if(langInputVal.Value == 0 || langInputVal.Value == false){
        //                 return   <input type="checkbox" id={langInputVal.id} defaultChecked = '' key={key} onChange={this._changeCheckboxVal}/>;
        //             }else{
        //                 return   <input type="checkbox" id={langInputVal.id} defaultChecked = 'check' key={key} onChange={this._changeCheckboxVal}/>;
        //             }                    
        //         }
        //     })
        // } else {
        //     return this.props.FieldData.FieldVals.map((langInputVal, key) => {                
        //         if(langInputVal.Lang == this.props.codelang){
        //             if(langInputVal.Value == 0 || langInputVal.Value == false){
        //                 return   <input type="checkbox" id={langInputVal.id} defaultChecked = '' key={key} onChange={this._changeCheckboxVal}/>;
        //             }else{
        //                 return   <input type="checkbox" id={langInputVal.id} defaultChecked = 'check' key={key} onChange={this._changeCheckboxVal}/>;
        //             }                    
        //         }
        //     })
        // }
    }
    _changeCheckboxVal = (e) => { 
        
        let checkValTOJ; 
        // To Make Value For Checked is Number: 
        (e.target.checked)? checkValTOJ = 1 : checkValTOJ = 0;         
        // Create Json Data To send 
        let newCheckboxVal = {"key": e.target.id,"value": checkValTOJ,}; 
        console.log(newCheckboxVal, this.props.FieldData.hides, this.props.FieldData.shows )

        // Start Show and hide Logo
        console.log(checkValTOJ, "checkValTOJ")
        if(checkValTOJ == 1){            
            document.getElementById(this.props.FieldData.hides).style.display = 'none';
            document.getElementById(this.props.FieldData.shows).style.display = 'block';
        }else{            
            document.getElementById(this.props.FieldData.hides).style.display = 'block';
            document.getElementById(this.props.FieldData.shows).style.display = 'none';
        }        

            // Get Relation for radio.             
            let lengthIdRadio = document.getElementsByClassName('radio-input').length;
            let valueToSave = [],
                valueForid;

            for (let i = 0; i < lengthIdRadio; i++ ){
                let radioId = document.getElementsByClassName('radio-input')[i].children[0].id;
                console.log(e.target.id, radioId)
                if(e.target.id == radioId){
                    // console.log('true')
                    valueToSave.push({"key": radioId,"value": checkValTOJ,})                    
                    // switch input to check or uncheck
                    document.getElementById(radioId).checked = checkValTOJ == 1 ? true : false;                    
                }else{
                    checkValTOJ == 1? valueForid = 0 : valueForid = 1;
                    valueToSave.push({"key": radioId,"value": valueForid,})                    
                    // switch input to check or uncheck
                    document.getElementById(radioId).checked = valueForid == 1 ? true : false;                                        
                }
                if(i == lengthIdRadio - 1 ){
                    // console.log(valueToSave)
                    this._sendRadioVal(valueToSave)
                }
                
            }
        // End Show and hide Logo
        
        
        return false
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
    _sendRadioVal(value){
        console.log(value)        
        if(this.props.newFields){
            let x = this.props.newFields; // first input 
            let s = -1;
            x.map((d, key)=>{                
                if(value.length - 1 >= key){
                //  console.log("value data = ",value,'lenght=' ,value.length,"array data = ", d, key)
                // console.log("value data key = ",value[key], 'lenght=' ,value.length,"array data = ", d, key)
                // return false
                    if(d.key == value[key].key){
                
                        d.value =  value[key].value;                    
                        this.props.dispatch(SaveSCFLD.newValFields(x))
                        // break;
                    }else{
                        s = 0;
                    }
                }
                
            })
            if(s >= 0 ){
                x.push(value[0]);
                x.push(value[1]);
                this.props.dispatch(SaveSCFLD.newValFields(x)); 
            } 
        }else{
            // let x2 = []
            // let lg = x2.push(value);

            this.props.dispatch(SaveSCFLD.newValFields(value)); 
        }  
    }
    render() {        
        return (
            <div className="setting--sidebar__color mb-3 setting--sidebar__radio">
                <div className="sidebar__color__main  set--padding">
                    <div className="color__main__content">
                        <label className="check-container radio-input">                            
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
export default connect(mapStateToProps)(TypeRadio)