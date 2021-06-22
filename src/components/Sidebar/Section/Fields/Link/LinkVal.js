import React, { Component } from 'react';
import { SaveSCFLD, SeaLink } from '../../../../../actions';
import { connect } from 'react-redux';
import Select from 'react-select';

class LinkVal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // search_data: false
        }        
    }
    _listOfLinksData = () => {
        let Links_data = this.props.LinkValData.Links;
        if (Links_data) {
            return Links_data.map((data_links, key) => {
                return data_links.items.map((item_data, key) => {
                    return (
                        <li key={key}>
                             <button className = 'Link_list_comp' onClick={this._handleSelectData}>{item_data}</button>
                        </li>
                    )
                })
            })
        }
    }
    _handleSelectData = (e) => { 
        //send Action for User to close Dropdown Menu.   
        this.props.dispatch(SeaLink.LinkInputVal("click"));   

        let inputValue = e.target.textContent;    
        let inputV2 = [{key:this.props.ObjectFieldId, value: inputValue }] 
        // this.props.dispatch(SeaLink.LinkInputVal(inputValue)); 
        console.log(inputValue)    
        
        //Test
        // let selectInput = e.target.parentNode.parentNode.parentNode.parentNode.previousSibling.getElementsByTagName('input');
        // console.log('33333333', selectInput, selectInput[0].id)
        // selectInput[0].value = "mohamed";
        // document.getElementById(selectInput[0].id).value = inputValue; 
        //console.log("test this.props.ObjectFieldId",this.props.ObjectFieldId, inputValue)
        //let valIN = inputValue;
        //document.getElementById(`Link_${this.props.ObjectFieldId}`).value =  valIN;
        //window.document.getElementById(`Link_${this.props.ObjectFieldId}`).value = valIN; 
        // this.props.dispatch(SeaLink.LinkInputVal("click"));   
        //End Test             
        let LinkSaveJS = {"key": this.props.ObjectFieldId,"value": inputValue}; 
                        
        if(this.props.newFields){                        
            let x = this.props.newFields; // first input 
            let s = -1;
            x.map((d, key)=>{
                if(d.key == LinkSaveJS.key){
                    d.value =  LinkSaveJS.value;                    
                    this.props.dispatch(SaveSCFLD.newValFields(x))
                    // break;
                }else{
                    s = 0;
                }
            })
            if(s >= 0 ){
                x.push(LinkSaveJS);
                this.props.dispatch(SaveSCFLD.newValFields(x)); 
            }         
        }else{
            let x2 = []
            let lg = x2.push(LinkSaveJS);

            this.props.dispatch(SaveSCFLD.newValFields(x2));            
        }
    }
    render() {
        if (this.props.GetLinkData) {
            // console.log(this.props.GetLinkData)            
            return (
                <div>
                    <ul>                        
                        {
                           this.props.GetLinkData.map((data_links, key) => {                                
                                return   data_links.items.map((item_data, key) => {                                    
                                    return (
                                        <li key={key} >
                                            <button className = 'Link_list_comp' onClick={this._handleSelectData}>{item_data}</button>
                                        </li>
                                    )
                                })
                            })
                        }

                    </ul>
                </div>
            )
        } else {
            return (
                <div>
                    <ul>
                        {/* <input className='input_val' type='hidden'/> */}
                        {this._listOfLinksData()}
                    </ul>
                </div>
            )
        }

    }
}
const mapStateToProps = state => ({
    newFields: state.newValFields.newFields,
    GetLinkData: state.searchLink.LinkData
})
export default connect(mapStateToProps)(LinkVal)