import React, { Component } from 'react';
import { GetSCFLD, ADCOLLE, REMCOLLE} from '../../../../actions';
import { connect } from 'react-redux';
import { arrayMove, SortableContainer, SortableElement } from 'react-sortable-hoc';
import { FaBars } from "react-icons/fa";
import { Form, Button, FormGroup, FormControl, ControlLabel, Dropdown, Accordion, Card } from "react-bootstrap";
import trash from '../../../../assets/svg/trash.svg';

// Sections Fields 
import TypeText from '../Fields/TypeText';
import TypeCheckbox from '../Fields/TypeCheckbox';
import SelectLookup from '../Fields/SelectLookup';
import TagsCategory from '../Fields/TagsCategory';
import TagsProduct from '../Fields/TagsProduct';
import LinkTag from '../Fields/Link/Link';
import ImageTag from '../Fields/Image/ImageCom';
import TypeTextarea from '../Fields/TypeTextarea';
import TagsBrand from '../Fields/TagsBrand';
import TagColorPicker from '../Fields/TagColorPicker';

class SetionCollection extends Component {
    constructor(props) {
        super(props); 
        this.state = {
            StopUpdateSection: false
        }       
    }
    // componentDidMount = () =>{
        
    // }

 
    _getSectionFields = () => {        
        let sectionFields   = this.props.CollectionField;
        let lang = this.props.langCollection;        
        
        if(sectionFields && sectionFields != undefined && this.state.StopUpdateSection == false){
            console.log("sectionFields com" , sectionFields ,lang );
            // this.setState({StopUpdateSection: true})
             // Update Data Collection         
        
            if(sectionFields){                
                return sectionFields.Fields.map((Fields, key) => {  
                    // View For Type Text               
                    if (Fields.Type == "text"){
                        return <TypeText key={key} codelang = {lang} FieldData = {Fields}/>
                    }
                    // View For Type textarea
                    else if (Fields.Type == "textarea"){
                        return <TypeTextarea key={key} codelang = {lang} FieldData = {Fields}/>
                    }
                    // View For Type Checkbox
                    else if (Fields.Type == "checkbox"){
                        return <TypeCheckbox key={key} codelang = {lang} FieldData = {Fields}/>
                    // View For Type sselect Lookup
                    }else if(Fields.Type == "sselect-lookup"){
                        return <SelectLookup key={key} codelang = {lang} FieldData = {Fields}/>                    

                    }// View For Type tags-category
                    else if(Fields.Type == "tags-category"){
                        return <TagsCategory key={key} codelang = {lang} FieldTagsData = {Fields}/>
                    }// View For Type tags-category
                    else if(Fields.Type == "tags-product"){
                        return <TagsProduct key={key} codelang = {lang} FieldTagsPro = {Fields}/>
                    }// View For Type Link
                    else if(Fields.Type == "link" || Fields.Type == "Link"){
                        return <LinkTag key={key} codelang = {lang} FieldLink = {Fields}/>
                    }// View For Type Image
                    else if(Fields.Type == "image"){
                        return <ImageTag key={key} codelang = {lang} FieldImage = {Fields}/>
                    }
                    // View For Type Brand
                    else if(Fields.Type == "tags-brand"){
                        return <TagsBrand key={key} codelang = {lang} FieldBrand = {Fields}/>
                    }
                     // View For Type colorpicker
                     else if(Fields.Type == "colorpicker"){                        
                        return <TagColorPicker key={key} codelang = {lang} FieldColorPicker = {Fields}/>
                    }
                    if(key == sectionFields.Fields.lenght - 1){
                        this.setState({StopUpdateSection: true})
                    }
                })
             }  
        }                
    } 
  
    render() {
        return(
            <>
            {this._getSectionFields()}</>
        )               
    }
}
const mapStateToProps = state => ({        
})
export default connect(mapStateToProps)(SetionCollection)