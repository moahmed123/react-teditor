import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, useParams, useLocation } from 'react-router-dom';
import { Form, Button, FormGroup, FormControl, ControlLabel, Dropdown, Accordion, Card } from "react-bootstrap";
// import '../../../css/Header-section.css';
import { GetSCFLD } from '../../../actions';
import check from '../../../assets/svg/check-mark.svg';
import deleteMark from '../../../assets/svg/delete.svg';
import arFlag from '../../../assets/svg/flag-of-saudi-arabia.svg';
import enFlag from '../../../assets/svg/english-lang.svg';
import Spinner from 'react-bootstrap/Spinner'
import trash from '../../../assets/svg/trash.svg';
import { FaBars } from "react-icons/fa";
import Select from 'react-select';
import { render } from 'react-dom';
import { arrayMove, SortableContainer, SortableElement } from 'react-sortable-hoc';

// Sections Fields 
import TypeText from './Fields/TypeText';
import TypeCheckbox from './Fields/TypeCheckbox';
import SelectLookup from './Fields/SelectLookup';
import TagsCategory from './Fields/TagsCategory';
import TagsProduct from './Fields/TagsProduct';
import LinkTag from './Fields/Link/Link';
import ImageTag from './Fields/Image/ImageCom';
import TypeTextarea from './Fields/TypeTextarea';
import TagsBrand from './Fields/TagsBrand';
import TagColorPicker from './Fields/TagColorPicker';
// Main Collection 
import MainCollection from './Collection/MainCollection';
//action Btn Included {save, Cancel}
import SaveBtn from './SaveBtn';
import BackBtn from './BackBtn';
import localization from '../../../localization/localization';


class Section extends Component {

    constructor(props) {
        super(props);
        this.state = {
            codeLang: '',
            codeLangST: true
        }
    }
    componentDidMount() {
        // Get Section By Id. 
        // this.props.dispatch(GetSCFLD.getSectionFields());
        // active lang for fields               
    }

    _getSectionFields = () => {
        let sectionFields = this.props.sectionFieldsDT.data.section.Fields;
        let langActive = 'en'
        if (sectionFields.length > 0) {
            if (this.props.getlanguages) {
                langActive = this.props.getlanguages.data.ActiveLanguage.code;
            }
            return sectionFields.map((Fields, key) => {
                // View For Type Text               
                if (Fields.Type == "text") {
                    return <TypeText
                        key={key}
                        codelang={this.state.codeLang ? this.state.codeLang : langActive}
                        FieldData={Fields} />
                }
                // View For Type textarea
                else if (Fields.Type == "textarea") {
                    return <TypeTextarea
                        key={key}
                        codelang={this.state.codeLang ? this.state.codeLang : langActive}
                        FieldData={Fields} />
                }
                // View For Type Checkbox
                else if (Fields.Type == "checkbox") {
                    return <TypeCheckbox key={key} codelang={this.state.codeLang ? this.state.codeLang : langActive} FieldData={Fields} />
                    // View For Type sselect Lookup
                } else if (Fields.Type == "sselect-lookup") {
                    return <SelectLookup key={key} codelang={this.state.codeLang ? this.state.codeLang : langActive} FieldData={Fields} />

                }// View For Type tags-category
                else if (Fields.Type == "tags-category") {
                    return <TagsCategory key={key} codelang={this.state.codeLang ? this.state.codeLang : langActive} FieldTagsData={Fields} />
                }// View For Type tags-category
                else if (Fields.Type == "tags-product") {
                    return <TagsProduct key={key} codelang={this.state.codeLang ? this.state.codeLang : langActive} FieldTagsPro={Fields} />
                }// View For Type Link
                else if (Fields.Type == "link" || Fields.Type == "Link") {
                    return <LinkTag key={key} codelang={this.state.codeLang ? this.state.codeLang : langActive} FieldLink={Fields} />
                }// View For Type Image
                else if (Fields.Type == "image") {
                    return <ImageTag key={key} codelang={this.state.codeLang ? this.state.codeLang : langActive} FieldImage={Fields} />
                }
                // View For Type Brand
                else if (Fields.Type == "tags-brand") {
                    return <TagsBrand key={key} codelang={this.state.codeLang ? this.state.codeLang : langActive} FieldBrand={Fields} />
                }
                 // View For Type colorpicker
                 else if(Fields.Type == "colorpicker"){ 
                    console.log(sectionFields.length - 1 , "key: ", key)
                    let checkColection = this.props.sectionFieldsDT.data.section.IsCollection;
                    if (sectionFields.length - 1 == key && checkColection != 1 ){
                        console.log()
                        return <TagColorPicker key={key} codelang={this.state.codeLang ? this.state.codeLang : langActive} FieldColorPicker = {Fields} LastField= {true}/>                        
                    }
                    return <TagColorPicker key={key} codelang={this.state.codeLang ? this.state.codeLang : langActive} FieldColorPicker = {Fields}/>
                }
            })
        }
    }
    _getCollection = () => {
        let section_Collection = this.props.sectionFieldsDT.data.section,
            section = this.props.sectionFieldsDT.data.section,
            langActive = 'en';
        if (section_Collection.IsCollection == 1) {
            if (this.props.getlanguages) {
                langActive = this.props.getlanguages.data.ActiveLanguage.code;
            }
            return <MainCollection codelangCol={this.state.codeLang ? this.state.codeLang : langActive} collectionData={section} />
        }
    }

    render() {        
        let ActiveLanguage;
        if (this.props.getlanguages) {            
            ActiveLanguage = this.props.getlanguages.data.ActiveLanguage.code;
        }
        if (!this.props.sectionFieldsDT) {
            return (
                <div className="main-loader main-loader--sec">  
                <div className="HeaderLoader--section">
                    <span className="loadingStyle label--sec"></span>
                    <span className="loadingStyle check--sec"></span>
                    <span className="loadingStyle check--sec"></span>
                </div>
                <div className="mt-5 mb-5">
                    <span className="loadingStyle languge--sec"></span>
                    <span className="loadingStyle languge--sec"></span>
                </div>
                <div className="checkbox--sec mt-3">
                    <span className="loadingStyle checkbox--input"></span>
                    <span className="loadingStyle checkbox--label"></span>
                    </div>
                    <div className="row--sec mt-3">
                    <span className="loadingStyle label--row--sec"></span>
                    <span className="loadingStyle input--row--sec"></span>
                    </div>
                    <div className="row--sec mt-3">
                    <span className="loadingStyle label--row--sec"></span>
                    <span className="loadingStyle input--row--sec"></span>
                    </div>
                    <div className="row--sec mt-3">
                    <span className="loadingStyle label--row--sec"></span>
                    <span className="loadingStyle input--row--sec"></span>
                    </div>
                  
                    {/* <Spinner animation="border" /> */}
                </div>
            )
       }
        return (

            <>
                <div className="Home__sidebar__header header--controls">
                    <div className="setting--sidebar__controls">  
                    <BackBtn 
                            Status = { null } 
                            history = {false}
                            BackCom =  {this.props.backComponent? this.props.backComponent : null}/>
                    </div>
                    <h4 className="setting--sidebar__header setting--label">  {this.props.sectionFieldsDT.data.section.DescName} 
                    {/* <span>{localization.HomePage}</span> */}
                    </h4>
                    <div className="setting--sidebar__controls save">                        
                        
                        <SaveBtn />
                    </div>
                </div>
                <div className = {`section--page__flags ${this.props.getlanguages ? this.props.getlanguages.data.Languages.length > 3 ? ' multi_lang': '' : null }`}>
                    {
                        
                        (this.props.getlanguages) ?                        
                            this.props.getlanguages.data.Languages.map((langs, key) => {
                                return (
                                    <div
                                        className = {`page__flags__country ${langs.code == ActiveLanguage && this.state.codeLangST ? 'active' : ''}${langs.code == this.state.codeLang ? 'active' : ''} `}
                                        key={key}
                                        onClick={(e) => this.setState({ codeLangST: false, codeLang: langs.code })}>

                                        {   
                                            langs.code == 'en' ?
                                                <img className="en-flag" src={enFlag} width={20} />
                                                :
                                                    langs.code == 'ar'?
                                                        <img className="ar-flag" src={arFlag} width={20} />
                                                    : 
                                                        <img className="ar-flag" src={`/admin/view/image/flags/${langs.code}.png`} width={20} />
                                        }
                                        {langs.name}
                                    </div>
                                )
                            })
                            :
                            null
                    }
                </div>

                {this._getSectionFields()}
                {this._getCollection()}
            </>
        )
    }
}

const mapStateToProps = state => ({
    initialized: state.app.initialized,
    sectionFieldsDT: state.sectionData.sectionFields,
    // updateSecFields : state.sectionData.updateSecFields,
    getlanguages: state.getlanguages.GetLangs,
    backComponent: state.getlanguages.backCom // Back Component For Back From Section TO Header, Footer Component
})

export default connect(mapStateToProps)(Section)
