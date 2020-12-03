import React, { Component } from 'react';
import { SaveSCFLD, SeaLink } from '../../../../actions';
import { connect } from 'react-redux';
import Select from 'react-select';

class Link extends Component {
    constructor(props) {
        super(props);
        this.state = {
            LinkVal: [],
            inputValue: '',
            tagsidFieldEn : '',
            tagsidFieldAr : '',
            tagsidFieldFr : '',
            showData: false
        };
    }

    componentDidMount() {
        //Add Default Value For Selection        
        // console.log(this.props.FieldLink);
        this._addDefaultVal();

    }
    _addDefaultVal = () => {
        if (this.props.codelang == 'en') {
            if(this.props.FieldLink.FieldVals){                
                return this.props.FieldLink.FieldVals.map((LinkData, key) => {
                    if (LinkData.Lang == 'en') {this.setState({LinkVal: LinkData })}
                })
            }           
        }       
    }
    _defaultLinkVal(){        
        if(this.state.LinkVal['Links']){
            console.log(this.state.LinkVal)
             return this.state.LinkVal['Links'].map((VCdataLink, key) => {
            return (
                <div key ={key}>
                    <h6>{VCdataLink.name}</h6>
                    <ul>
                        {
                            VCdataLink.items.map((data, key)=>{
                                return (
                                    <li key={key}> <i className={VCdataLink.icon}></i>{data}</li>
                                )
                            })
                        }
                    </ul>
                </div>
            )                         
        })
        }                 
    }
    _onFocus = ()=>{
        this.setState({showData: true})
    }
    _onBlur = ()=>{
        this.setState({showData: false})
    }
    _handleChange=(e)=>{
        if(e.target.value){
            this.setState({showData: true})
            // Send Data To Search For it 
            // this.props.dispatch(SeaLink.searchLink(e.target.value))
            
        }else{
            this.setState({showData: false})
        }

        
    }
    render() {  
        // if(this.props.GetLinkData){
        //     this.setState({LinkVal: this.props.GetLinkData })
        // }     
        return (
            <div className="setting--sidebar__color">

                <h4 className="setting--sidebar__header"> {this.props.FieldLink.Name} </h4>
                <input type='text' onChange={this._handleChange} onFocus={ this._onFocus } onBlur={ this._onBlur } />
                {
                    this.state.showData? 
                        <div className='box-data'>
                            {this._defaultLinkVal()}
                        </div>               
                    :
                    null
                }
                
            </div>
        )
    }
}
const mapStateToProps = state => ({
    newFields: state.newValFields.newFields,
    GetLinkData: state.searchLink.LinkData
})
export default connect(mapStateToProps)(Link)