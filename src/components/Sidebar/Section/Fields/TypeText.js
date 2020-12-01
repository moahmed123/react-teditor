import React, { Component } from 'react';
import { SaveSCFLD } from '../../../../actions';
import { connect } from 'react-redux'

class TypeText extends Component {      
    _setlangVal = () => {
        if(this.props.codelang == 'en'){
            return this.props.FieldData.FieldVals.map((langInputVal, key) => {
                if(langInputVal.Lang == 'en'){
                    return <input className="generic--section__form" placeholder="" id={langInputVal.id} key={key} type="text" defaultValue = {langInputVal.Value} onChange={this._changeTextVal}/>
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
        // let newTextVal = ["nameTwo"]
        this.props.dispatch(SaveSCFLD.collectionAllChanged(newTextVal))        
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
const mapStateToProps = state => ({})
export default connect(mapStateToProps)(TypeText)