import React, { Component } from 'react';
import { SaveSCFLD, GetLOUpKy} from '../../../../actions';
import { connect } from 'react-redux';
import { Dropdown} from 'react-bootstrap';
import { FaCheck ,FaRocket ,FaAngleDown , FaBars, FaCommentsDollar} from "react-icons/fa";

class SelectLookup extends Component {    
    constructor(props){
        super(props);
        this.state = {
            DropdownVal: '',
            idFieldEn : '',
            idFieldAr : '',
            idFieldFr : '',
        }
    }    
    componentDidMount(){
        this._setlangDefaultVal();        
    }

    _setlangDefaultVal = () => {    
        if(this.props.codelang == 'en'){
            return this.props.FieldData.FieldVals.map((langInputVal, key) => {
                if(langInputVal.Lang == 'en'){                                       
                    let valSelected = langInputVal.Value;  
                    this.setState({idFieldEn: langInputVal.id});                                      
                    return this.props.FieldData.LookUpVals.map((data, key)=>{
                        if(valSelected == data.Value){
                            // return <span> {data.Name}</span>
                            console.log('name of val selected ' +  data.Name)
                            this.setState({DropdownVal: data.Name});
                        }
                    })
                }
            })
        } else if (this.props.codelang == 'ar'){
            return this.props.FieldData.FieldVals.map((langInputVal, key) => {
                if(langInputVal.Lang == 'ar'){                    
                    let valSelected = langInputVal.Value;    
                    this.setState({idFieldAr: langInputVal.id});
                    return this.props.FieldData.LookUpVals.map((data, key)=>{
                        if(valSelected == data.Value){
                            return <span> {data.Name}</span>
                        }
                    })
                }
            })
        } else if (this.props.codelang == 'fr'){
            return this.props.FieldData.FieldVals.map((langInputVal, key) => {
                if(langInputVal.Lang == 'fr'){
                    this.setState({idFieldFr: langInputVal.id});                    
                    let valSelected = langInputVal.Value;                                                
                    return this.props.FieldData.LookUpVals.map((data, key)=>{
                        if(valSelected == data.Value){
                            return <span> {data.Name}</span>
                        }
                    })
                }
            })
        }else{
            return this.props.FieldData.FieldVals.map((langInputVal, key) => {
                if(langInputVal.Lang == 'en'){                    
                    let valSelected = langInputVal.Value;                                                
                    return this.props.FieldData.LookUpVals.map((data, key)=>{
                        if(valSelected == data.Value){
                            return <span> {data.Name}</span>
                        }
                    })
                }
            })
        }
    }
    // _lookUpKeyVals= () =>{
    //     return this.props.FieldData.LookUpVals.map((dataLookUP, key)=>{
    //         return <Dropdown.Item key={key} eventKey="1" onClick = {this._changeCheckboxVal} value = {dataLookUP.Name}>{dataLookUP.Name}</Dropdown.Item>            
    //     })
    // }
    _lookUpKeyVals= () =>{
        return this.props.FieldData.LookUpVals.map((dataLookUP, key)=>{
            // return <Dropdown.Item key={key} eventKey="1" onClick = {this._changeCheckboxVal} value = {dataLookUP.Name}>{dataLookUP.Name}</Dropdown.Item>                        
            return <option key={key}  value={dataLookUP.Name} nametag = {dataLookUP.Value}>{dataLookUP.Name}</option>
        })
    }
    _changeCheckboxVal = (e) => {        
        let idField;  
        // Lang
            if(this.props.codelang == 'en'){
                idField = this.state.idFieldEn;
            } else if(this.props.codelang == 'ar'){
                idField = this.state.idFieldAr;
            } else if(this.props.codelang == 'fr'){
                idField = this.state.idFieldFr;
            } 
        // endLang
        // To Change Selection Value 
        this.setState({DropdownVal: e.target.value})
        //Create Json To Use It At Save BTN: 
        let index = e.target.selectedIndex,
            optionElement = e.target.childNodes[index],
            optionVal =  optionElement.getAttribute('nametag');
        
        let SelectLookupJS = {"key": idField,"value": optionVal,}; 
        if(this.props.newFields){
            let x = this.props.newFields; // first input 
            let s = -1;
            x.map((d, key)=>{
                if(d.key == SelectLookupJS.key){
                    d.value =  SelectLookupJS.value;                    
                    this.props.dispatch(SaveSCFLD.newValFields(x))
                    // break;
                }else{
                    s = 0;
                }
            })
            if(s >= 0 ){
                x.push(SelectLookupJS);
                this.props.dispatch(SaveSCFLD.newValFields(x)); 
            } 
        }else{
            let x2 = []
            let lg = x2.push(SelectLookupJS);

            this.props.dispatch(SaveSCFLD.newValFields(x2));
        }        
    }
    render() {        
        return (
            <div className="setting--sidebar__color mb-3">   
                {
                    this.props.FieldData.Name != '' ? 
                        <h4 className="setting--sidebar__header"> {this.props.FieldData.Name} </h4>             
                    : 
                        null
                }
                
                {/* <Dropdown>
                    <Dropdown.Toggle>                           
                        <span>{this.state.DropdownVal}</span>
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        {this._lookUpKeyVals()}   
                    </Dropdown.Menu>
                </Dropdown>   */}
                <div className="generic-select">
                    <select  value = {this.state.DropdownVal} onChange = {this._changeCheckboxVal}>
                        {this._lookUpKeyVals()}  
                    </select>
                    <svg height="20" width="20" viewBox="0 0 20 20" aria-hidden="true" focusable="false" className="css-6q0nyr-Svg"><path d="M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"></path></svg>
                </div>
            </div>
        )
    }
}
const mapStateToProps = state => ({
    newFields: state.newValFields.newFields,
    LookupKeyVal: state.LookupKeyVal.LookupKey

})
export default connect(mapStateToProps)(SelectLookup)