import React, { Component } from 'react';
import { Link } from 'react-router-dom';
//sort Section 
import { REMSEC, REODSEC, GETTMSET } from '../../../../actions';
import PathsApp from './../../../../actions/Api_paths';
import { connect } from 'react-redux';
// Sections Fields 
import TypeText from '../../Section/Fields/TypeText';
import TypeCheckbox from '../../Section/Fields/TypeCheckbox';
import SelectLookup from '../../Section/Fields/SelectLookup';
import TagsCategory from '../../Section/Fields/TagsCategory';
import TagsProduct from '../../Section/Fields/TagsProduct';
import LinkTag from '../../Section/Fields/Link/Link';
import ImageTag from '../../Section/Fields/Image/ImageCom';
import TagColorPicker from '../../Section/Fields/TagColorPicker';
import TypeTextarea from '../../Section/Fields/TypeTextarea';

class SettingsComponent extends Component {   
    _getSectionFields = () => {
        const {Collections} = this.props.Settingdata;
            return Collections.map((getFeilds, key )=>{
                return getFeilds.Fields.map((Fields, key)=>{
                    // View For Type Text               
                    if (Fields.Type == "text"){
                        return <TypeText key={key} codelang = {this.props.langCode} FieldData = {Fields}/>
                    }
                    // View For Type textarea
                    else if (Fields.Type == "textarea"){
                        return <TypeTextarea key={key} codelang = {this.props.langCode} FieldData = {Fields}/>
                    }
                    // View For Type Checkbox
                    else if (Fields.Type == "checkbox"){
                        return <TypeCheckbox key={key} codelang = {this.props.langCode} FieldData = {Fields}/>
                    // View For Type sselect Lookup
                    }else if(Fields.Type == "sselect-lookup"){
                        return <SelectLookup key={key} codelang = {this.props.langCode} FieldData = {Fields}/>                    

                    }// View For Type tags-category
                    else if(Fields.Type == "tags-category"){
                        return <TagsCategory key={key} codelang = {this.props.langCode} FieldTagsData = {Fields}/>
                    }// View For Type tags-category
                    else if(Fields.Type == "tags-product"){
                        return <TagsProduct key={key} codelang = {this.props.langCode} FieldTagsPro = {Fields}/>
                    }// View For Type Link
                    else if(Fields.Type == "link"){
                        return <LinkTag key={key} codelang = {this.props.langCode} FieldLink = {Fields}/>
                    }// View For Type Image
                    else if(Fields.Type == "image"){
                        return <ImageTag key={key} codelang = {this.props.langCode} FieldImage = {Fields}/>
                    }
                    // View For Type Image
                    else if(Fields.Type == "colorpicker"){                        
                        return <TagColorPicker key={key} codelang = {this.props.langCode} FieldColorPicker = {Fields}/>
                    }
                })
            })                
    }
    render() {               
        console.log(this.props.Settingdata)
        const {DescName} = this.props.Settingdata;
        return (
            <div className="setting--sidebar__color">
                <h4 className="setting--sidebar__header"> {DescName} </h4>
                {/* <div className="sidebar__color__main">*/}
                    <div className="color__main__content">
                        {this._getSectionFields()}
                    </div>
                {/* </div> */}
            </div>
        )
    }
}

const mapStateToProps = state => ({        
    templateSetting: state.getTemplateSettings.TemplateSEVal
})

export default connect(mapStateToProps)(SettingsComponent)