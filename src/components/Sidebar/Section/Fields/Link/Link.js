import React, { Component } from 'react';
import { SaveSCFLD, SeaLink } from '../../../../../actions';
import { connect } from 'react-redux';
import Select from 'react-select';
import LinkVal from './LinkVal';

let TextValdata = null; 
class Link extends Component {
    constructor(props) {
        super(props);
        this.state = {
            LinkVal: [],
            LinkValEn: [],
            LinkValAr: [],
            LinkValLang: [],

            inputValue: '',
            tagsidFieldEn: '',
            tagsidFieldAr: '',
            tagsidFieldFr: '',
            showData: false,
            
            defaultValueEn: '',
            defaultValueAr: '',
            defaultValueLang: '',



            correctId: null,
            textVal : null
        };
        this._closeWhenClickBody=this._closeWhenClickBody.bind(this);
    }   
    
    componentDidMount() {
        //Add Default Value For Selection                
        this._addDefaultVal();                      
    }
    componentWillMount(){         
        document.addEventListener('mousedown', this._closeWhenClickBody, false)       
    }
    componentWillUnmount(){
        document.removeEventListener('mousedown', this._closeWhenClickBody, false)    
    }
    _closeWhenClickBody(e){               
        if(e.target.className == "generic--section__form Link_box_com" || e.target.className == 'Link_list_comp'){            
            if(e.target.className == 'Link_list_comp'){                
                // when click for order list value                              
                var classname = document.getElementsByClassName("Link_list_comp");               
                for (var i = 0; i < classname.length; i++) {
                  classname[i].addEventListener('click', this._closeDropDChsData, false);                   
                }

                // let IdInput = document.getElementById(this.state.correctId);
                // console.log(IdInput)                
                // document.addEventListener('click', this._closeDropDChsData, false);                                

            }
        }else{
            if(this.state.showData == true){
                this.setState({ showData: false })
            }            
        }        
    }
    /****
     * Fun Close Dropdown When choose Value. 
     */
    _closeDropDChsData = (e) => {
        // Select Data To Set It for Input.
        let textContent = e.target.textContent;
        // console.log(textContent, this.state.LinkVal.id, this.state.correctId);
        // Select Input To Set A new Value.
        if(this.state.correctId){
            console.log(this.state.correctId, "sdsd", textContent);
            
            // Select Id Of Input 
            let selectInput = e.target.parentNode.parentNode.parentNode.parentNode.previousSibling.getElementsByTagName('INPUT')[0].id;
            console.log("selectInput ---> ",selectInput)
            // Set New Value on Input 
            // window.document.getElementById(`${selectInput}`).value = textContent; 
            setTimeout(()=>{
                document.querySelector(`#${selectInput}`).value = textContent; 
            },200)
            
            console.log(selectInput)
        }else{
            console.log('note add ')
        }
        //TEST
        // if(this.state.correctId){        
        //     window.document.getElementById(`${this.state.correctId}`).value = textContent; 
        //     // /style
        //     window.document.getElementById(`${this.state.correctId}`).style.border = "2px solid #cc0000" 
        // }else{
        //     console.log('need to null ')
        // }
        // window.document.getElementById(`${this.state.correctId}`).value = textContent;
        // window.document.getElementById(`Link_${this.state.LinkVal.id}`).value = textContent;
        // // close Dropdown 
        // this.setState({ showData: false })
    };
    _addDefaultVal = () => {
        if (this.props.FieldLink.FieldVals) {
            return this.props.FieldLink.FieldVals.map((LinkData, key) => {
                if (LinkData.Lang == 'en') {
                    this.setState({ LinkValEn: LinkData,defaultValueEn: LinkData.Value })
                }
                if (LinkData.Lang == 'ar') {
                    this.setState({ LinkValAr: LinkData, defaultValueAr: LinkData.Value })
                }
                if (LinkData.Lang == this.props.codelang) {
                    this.setState({ LinkValLang: LinkData, defaultValue: LinkData.Value, defaultValueLang: LinkData.Value })
                }
            })
        }

        // if (this.props.codelang == 'en') {
        //     if (this.props.FieldLink.FieldVals) {
        //         return this.props.FieldLink.FieldVals.map((LinkData, key) => {
        //             if (LinkData.Lang == 'en') {
        //                 this.setState({ LinkValEn: LinkData,defaultValueEn: LinkData.Value
        //                  })
        //             }
        //         })
        //     }
        // } else if (this.props.codelang == 'ar') {
        //     if (this.props.FieldLink.FieldVals) {
        //         return this.props.FieldLink.FieldVals.map((LinkData, key) => {
        //             if (LinkData.Lang == 'ar') {
        //                 this.setState({ LinkValAr: LinkData, defaultValueAr: LinkData.Value })
        //             }
        //         })
        //     }
        // } else if (this.props.codelang == 'fr') {
        //     if (this.props.FieldLink.FieldVals) {
        //         return this.props.FieldLink.FieldVals.map((LinkData, key) => {
        //             if (LinkData.Lang == 'fr') {
        //                 this.setState({ LinkValLang: LinkData, defaultValueLang: LinkData.Value })
        //             }
        //         })
        //     }
        // } else {
        //     if (this.props.FieldLink.FieldVals) {
        //         return this.props.FieldLink.FieldVals.map((LinkData, key) => {                    
        //             if (LinkData.Lang == this.props.codelang) {
        //                 this.setState({ LinkValLang: LinkData, defaultValue: LinkData.Value, defaultValueLang: LinkData.Value })
        //             }
        //         })
        //     }
        // }
    }
    _onFocus = (e) => {
        this.setState({ showData: true, correctId: e.target.id });
        console.log(e.target.id)
    }
    _onBlur = (e) => { 
        // Nothing Code
        // console.log('Blur Input ' + e.target.value , this.props.defaultInputVal)
    }
    _handleChange = (e) => {         
        this.props.dispatch(SeaLink.LinkInputVal("not_click"));        

        // Start Resolved Add Text By Input Link 
        let ValidURL = this._validURL(e.target.value);        
        // Valid Value Is URL Or Not 
        if(ValidURL){
            // This Value is URL 
            console.log(e.target.value)
            console.log(e.target.id.replace('Link_', ''))
            
            //TODO: One Of Function To Not Duplicated Code
            // To User On Save Data 
            let keyId = e.target.id.replace('Link_', ''),
            valueForInput = e.target.value;
            let TXTLinkSaveJS = {"key": keyId,"value": valueForInput}; 
                        
            if(this.props.newFields){                                 
                let x = this.props.newFields; // first input 
                let s = -1;
                x.map((d, key)=>{
                    if(d.key == TXTLinkSaveJS.key){
                        d.value =  TXTLinkSaveJS.value;                    
                        this.props.dispatch(SaveSCFLD.newValFields(x))
                        // break;
                    }else{
                        s = 0;
                    }
                })
                if(s >= 0 ){
                    x.push(TXTLinkSaveJS);
                    this.props.dispatch(SaveSCFLD.newValFields(x)); 
                }         
            }else{
                let x2 = []
                let lg = x2.push(TXTLinkSaveJS);

                this.props.dispatch(SaveSCFLD.newValFields(x2));            
            }
        }
        // End Resolved Add Text By Input Link 

        if (e.target.value) {            
            this.setState({ showData: true })
            console.log(e.target.value);            
            // Send Data To Search For it 
            this.props.dispatch(SeaLink.searchLink(e.target.value));            
        } else {
            this.setState({ showData: false })
        }
        // Display dropdown        
        console.log(">>>>>>>>>>>",this.props.defaultInputVal)
        if(this.props.defaultInputVal){
            if (this.props.defaultInputVal == 'not_click'){
                this.setState({ showData: true });
                console.log('notClick and Doen')
            }else if (this.props.defaultInputVal == 'click'){                
                this.setState({ showData: false })
                console.log('Click and Doen')
            }
        }        
    }

    // Fun To Valid URL : Value Is Link Or Not 
    // To accept this url: https://example.com/index.php?route=information/contact
    _validURL(str) {
        var pattern = new RegExp('^(http(s)?:\\/\\/)?'//+ // protocol
        //   '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // domain name
        //   '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
        //   '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
        //   '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
        //   '(\\#[-a-z\\d_]*)?$','i'
        ); // fragment locator
        return !!pattern.test(str);
      }
    
    render() {                           
        // console.log("this.state.LinkVal",this.state.LinkVal)
        return (
            <div className="setting--sidebar__color">
                <div className="sidebar__color__main set--padding">
                    <div className="color__main__content">
                        <div className="label generic--section">
                            <h4 className="setting--sidebar__header"> {this.props.FieldLink.Name} </h4>
                            <input className="generic--section__form Link_box_com" id= {`Link_${
                                this.props.codelang  == 'en'? this.state.LinkValEn.id : 
                                this.props.codelang  == 'ar'? this.state.LinkValAr.id : this.state.LinkValLang.id 
                                // this.state.LinkVal.id
                            }`}
                                type='text' 
                                onChange={this._handleChange} 
                                defaultValue={
                                    this.props.codelang  == 'en'? this.state.defaultValueEn : 
                                    this.props.codelang  == 'ar'? this.state.defaultValueAr : this.state.defaultValueLang 
                                    // this.state.defaultValue
                                }
                                onFocus={this._onFocus} onBlur={this._onBlur} />  

                            <span className="focus-border"></span>
                        </div>
                    </div>
                    {
                        this.state.showData?
                            <div className='box-data'>
                                {/* Work For Link Data For Multi  */}
                                <LinkVal LinkValData={this.state.LinkVal} ObjectFieldId={
                                    this.props.codelang  == 'en'? this.state.LinkValEn.id : 
                                    this.props.codelang  == 'ar'? this.state.LinkValAr.id : this.state.LinkValLang.id 
                                }/>

                            </div>                            
                        :
                            null
                    }
                </div>
            </div>
        )
    }
}
const mapStateToProps = state => ({
    newFields: state.newValFields.newFields,
    GetLinkData: state.searchLink.LinkData,
    defaultInputVal: state.searchLink.VInputLink
})
export default connect(mapStateToProps)(Link)