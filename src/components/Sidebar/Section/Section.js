import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, useParams , useLocation} from 'react-router-dom';
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
import {render} from 'react-dom';
import {arrayMove, SortableContainer, SortableElement } from 'react-sortable-hoc';

// Sections Fields 
import TypeText from './Fields/TypeText';
import TypeCheckbox from './Fields/TypeCheckbox';
import SelectLookup from './Fields/SelectLookup';
import TagsCategory from './Fields/TagsCategory';
import TagsProduct from './Fields/TagsProduct';
import LinkTag from './Fields/Link/Link';
import ImageTag from './Fields/Image/ImageCom';
// Main Collection 
import MainCollection from './Collection/MainCollection';
//action Btn Included {save, Cancel}
import SaveBtn from './SaveBtn';


class Section extends Component {             
 
    constructor(props) {
        super(props);
        this.state = {
            codeLang : 'en'                  
        }
    }
    componentDidMount(){    
        // Get Section By Id. 
        this.props.dispatch(GetSCFLD.getSectionFields());
        // active lang for fields               
    }  
     
    _getSectionFields = () => {
        let sectionFields   = this.props.sectionFieldsDT.data.section.Fields;            
        if(sectionFields.length > 0){
            return sectionFields.map((Fields, key) => {  
                // View For Type Text               
                if (Fields.Type == "text"){
                    return <TypeText key={key} codelang = {this.state.codeLang} FieldData = {Fields}/>
                }
                // View For Type Checkbox
                else if (Fields.Type == "checkbox"){
                    return <TypeCheckbox key={key} codelang = {this.state.codeLang} FieldData = {Fields}/>
                // View For Type sselect Lookup
                }else if(Fields.Type == "sselect-lookup"){
                    return <SelectLookup key={key} codelang = {this.state.codeLang} FieldData = {Fields}/>                    

                }// View For Type tags-category
                else if(Fields.Type == "tags-category"){
                    return <TagsCategory key={key} codelang = {this.state.codeLang} FieldTagsData = {Fields}/>
                }// View For Type tags-category
                else if(Fields.Type == "tags-product"){
                    return <TagsProduct key={key} codelang = {this.state.codeLang} FieldTagsPro = {Fields}/>
                }// View For Type Link
                else if(Fields.Type == "link"){
                    return <LinkTag key={key} codelang = {this.state.codeLang} FieldLink = {Fields}/>
                }// View For Type Image
                else if(Fields.Type == "image"){
                    return <ImageTag key={key} codelang = {this.state.codeLang} FieldImage = {Fields}/>
                }
            })
        }              
    }
    _getCollection = () => {                
        let section_Collection = this.props.sectionFieldsDT.data.section,
            section = this.props.sectionFieldsDT.data.section;               
        if(section_Collection.IsCollection == 1){                                                  
            return <MainCollection codelangCol = {this.state.codeLang} collectionData = {section} />            
        }      
    }
    
    render() {  
        // if(this.props.updateSecFields)      {
        //     // this.setState({updataCollection: true})
        // }        
        if(this.props.getlanguages){
            console.log('creently langs ', this.props.getlanguages.data.ActiveLanguage.code)
            // this.setState({
            //     codeLang: this.props.getlanguages.data.ActiveLanguage.code
            // })                  
        }
        if(!this.props.sectionFieldsDT){
            return <div className="main-loader"> <Spinner animation="border" /></div>
        }        
        return (

            <>                
                <div className="Home__sidebar__header">
                    <h4 className="setting--sidebar__header">  {this.props.sectionFieldsDT.data.section.DescName} <span>home page</span></h4>
                    <div className="setting--sidebar__controls">
                        <div className="delete">
                            <img src={deleteMark} />
                        </div>
                        {/* <Button className="check" onclick={()=> console.log('save')}>
                            <img src={check} />
                        </Button> */}
                        <SaveBtn/>
                    </div>
                </div>
                <div className="section--page__flags">
                {
                    (this.props.getlanguages)?
                        this.props.getlanguages.data.Languages.map((langs, key)=>{
                        console.log("langs,",langs)
                            return (
                                <div className="page__flags__country"  key={key} onClick={ ()=> this.setState({codeLang:langs.code})}>
                                    {langs.code == 'en'? 
                                    <img className="en-flag" src={enFlag} width= {20}/>
                                    :
                                    <img className="ar-flag" src={arFlag} width= {20}/> }                               
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
    sectionFieldsDT : state.sectionData.sectionFields,
    // updateSecFields : state.sectionData.updateSecFields,
    getlanguages: state.getlanguages.GetLangs
})

export default connect(mapStateToProps)(Section)
