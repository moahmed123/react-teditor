import React, { Component } from 'react';
import { SaveSCFLD, GetLOUpKy} from '../../../../actions';
import { connect } from 'react-redux';
import { Dropdown} from 'react-bootstrap';
import { FaCheck ,FaRocket ,FaAngleDown , FaBars, FaCommentsDollar} from "react-icons/fa";

class SelectLookup extends Component {
    constructor(props){
        super(props);
        this.state = {
            dataForDropdown: []
        }

    }
    componentDidMount(){
        // this.props.dispatch(GetLOUpKy.getLookupKey(this.props.FieldData.LookUpKey))
        // console.log(" lll"+this.props.FieldData.LookUpKey)
    }
    // async componentDidMount() {
    //   await this.props.dispatch(GetLOUpKy.getLookupKey(this.props.FieldData.LookUpKey))        
    // }
    _setlangDefaultVal = () => {    
        // if(this.props.LookupKeyVal){            
            // this.setState({dataForDropdown:this.state.dataForDropdown.push(this.props.LookupKeyVal) })

            // let LookUpKeyVal = this.props.LookupKeyVal.data.Lookup;        
            // console.log("DataSate"+this.state.dataForDropdown)
            if (this.props.codelang == 'en') {
                return this.props.FieldData.FieldVals.map((langInputVal, key) => {
                    if (langInputVal.Lang == 'en') {
                        return <span className='name_page' key={key}>{langInputVal.Value} </span>;
                    }
                    // if (langInputVal.Lang == 'en') {
                    //     console.log('true...')
                    //   return LookUpKeyVal.map((dataLookupKey, key)=>{     
                    //     console.log( dataLookupKey.Value) 
                    //     console.log( langInputVal.Value) 
                    //         if(dataLookupKey.Value == langInputVal.Value){

                    //             return <span className='name_page' key={key}>{dataLookupKey.Name} </span>;
                    //         }
                    //     })                                
                    // }
                })
            } 
            // else if (this.props.codelang == 'ar') {
            //     return this.props.FieldData.FieldVals.map((langInputVal, key) => {
            //         if (langInputVal.Lang == 'ar') {
            //           return LookUpKeyVal.map((LookupKey, key)=>{
            //                 if(LookupKey.Value == langInputVal.Value){
            //                     return <span className='name_page' key={key}>{LookupKey.Name} </span>;
            //                 }
            //             })                                
            //         }
            //     })
            // } else if (this.props.codelang == 'fr') {
            //     return this.props.FieldData.FieldVals.map((langInputVal, key) => {
            //         if (langInputVal.Lang == 'fr') {
            //           return LookUpKeyVal.map((LookupKey, key)=>{
            //                 if(LookupKey.Value == langInputVal.Value){
            //                     return <span className='name_page' key={key}>{LookupKey.Name} </span>;
            //                 }
            //             })                                
            //         }
            //     })
            // } else {
            //     return this.props.FieldData.FieldVals.map((langInputVal, key) => {
            //         if (langInputVal.Lang == 'en') {
            //           return LookUpKeyVal.map((LookupKey, key)=>{
            //                 if(LookupKey.Value == langInputVal.Value){
            //                     return <span className='name_page' key={key}>{LookupKey.Name} </span>;
            //                 }
            //             })                                
            //         }
            //     })
            // }
        // }
    }
    _changeCheckboxVal = (e) => {        
        // let newCheckboxVal = {"key": e.target.id,"value": e.target.value,};        
        if(this.props.newFields){
            
        }else{
            
        }        
    }
    render() {
        return (

            <div className="setting--sidebar__color">   
                <h4 className="setting--sidebar__header"> {this.props.FieldData.Name} </h4>             
                <Dropdown>
                    <Dropdown.Toggle onClick = {()=> console.log('test')}>
                            {this._setlangDefaultVal()}
                            {/* {this.props.FieldData.Value} */}
                        {/* <FaAngleDown /> */}
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item>action</Dropdown.Item>   
                        <Dropdown.Item>action</Dropdown.Item>   
                        <Dropdown.Item>action</Dropdown.Item>   
                    </Dropdown.Menu>
                </Dropdown>  
            </div>
        )
    }
}
const mapStateToProps = state => ({
    newFields: state.newValFields.newFields,
    LookupKeyVal: state.LookupKeyVal.LookupKey

})
export default connect(mapStateToProps)(SelectLookup)