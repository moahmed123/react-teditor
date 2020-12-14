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
            inputValue: '',
            tagsidFieldEn: '',
            tagsidFieldAr: '',
            tagsidFieldFr: '',
            showData: false,
            defaultValue: '',
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
                // Nothing Code
            }
        }else{
            if(this.state.showData == true){
                this.setState({ showData: false })
            }
        }        
    }
    _addDefaultVal = () => {
        if (this.props.codelang == 'en') {
            if (this.props.FieldLink.FieldVals) {
                return this.props.FieldLink.FieldVals.map((LinkData, key) => {
                    if (LinkData.Lang == 'en') {
                        this.setState({ LinkVal: LinkData, defaultValue: LinkData.Value })
                    }
                })
            }
        } else if (this.props.codelang == 'ar') {
            if (this.props.FieldLink.FieldVals) {
                return this.props.FieldLink.FieldVals.map((LinkData, key) => {
                    if (LinkData.Lang == 'ar') {
                        this.setState({ LinkVal: LinkData, defaultValue: LinkData.Value })
                    }
                })
            }
        } else if (this.props.codelang == 'fr') {
            if (this.props.FieldLink.FieldVals) {
                return this.props.FieldLink.FieldVals.map((LinkData, key) => {
                    if (LinkData.Lang == 'fr') {
                        this.setState({ LinkVal: LinkData, defaultValue: LinkData.Value })
                    }
                })
            }
        } else {
            if (this.props.FieldLink.FieldVals) {
                return this.props.FieldLink.FieldVals.map((LinkData, key) => {
                    if (LinkData.Lang == 'en') {
                        this.setState({ LinkVal: LinkData, defaultValue: LinkData.Value })
                    }
                })
            }
        }
    }
    _onFocus = () => {
        this.setState({ showData: true })
    }
    _onBlur = () => { 
        // Nothing Code
    }
    _handleChange = (e) => {         
        this.props.dispatch(SeaLink.LinkInputVal("not_click"));                
        if (e.target.value) {
            this.setState({ showData: true })
            console.log(e.target.value);
            // Send Data To Search For it 
            this.props.dispatch(SeaLink.searchLink(e.target.value));            
        } else {
            this.setState({ showData: false })
        }
        // Dispaly dropdown        
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
    render() {                       
        return (
            <div className="setting--sidebar__color">
                <div className="sidebar__color__main set--padding">
                    <div className="color__main__content">
                        <div className="label generic--section">
                            <h4 className="setting--sidebar__header"> {this.props.FieldLink.Name} </h4>
                            <input className="generic--section__form Link_box_com" id= {`Link_${this.state.LinkVal.id}`}
                                type='text' 
                                onChange={this._handleChange} 
                                defaultValue={this.state.defaultValue}    
                                onFocus={this._onFocus} onBlur={this._onBlur} />                          
                            <span className="focus-border"></span>
                        </div>
                    </div>
                    {
                        this.state.showData?                            
                            <div className='box-data'>                                
                                <LinkVal LinkValData={this.state.LinkVal} ObjectFieldId={this.state.LinkVal.id} />
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