import React, { Component } from 'react';
import { SaveSCFLD, SeaLink } from '../../../../../actions';
import { connect } from 'react-redux';
import Select from 'react-select';
import LinkVal from './LinkVal'

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
            defaultValue: ''
        };
    }

    componentDidMount() {
        //Add Default Value For Selection        
        // console.log(this.props.FieldLink);
        this._addDefaultVal();

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
    // _onBlur = () => {
    //     this.setState({ showData: false })
    // }
    _handleChange = (e) => {
        if (e.target.value) {
            this.setState({ showData: true })
            console.log(e.target.value);
            // Send Data To Search For it 
            this.props.dispatch(SeaLink.searchLink(e.target.value))

        } else {
            this.setState({ showData: false })
        }


    }
    render() {
        return (

            <div className="setting--sidebar__color">
                <div className="sidebar__color__main set--padding">
                    <div className="color__main__content">
                        <div className="label generic--section">
                            <h4 className="setting--sidebar__header"> {this.props.FieldLink.Name} </h4>
                            {
                                (this.props.defaultInputVal) ?
                                    <input className="generic--section__form" type='text' onChange={this._handleChange} value={this.props.defaultInputVal} onFocus={this._onFocus} onBlur={this._onBlur} />
                                    :
                                    <input className="generic--section__form" type='text' onChange={this._handleChange} defaultValue={this.state.defaultValue} onFocus={this._onFocus} onBlur={this._onBlur} />
                            }
                            <span className="focus-border"></span>
                        </div>
                    </div>
                    {
                        this.state.showData ?
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