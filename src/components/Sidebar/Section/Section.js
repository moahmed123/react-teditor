import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, useParams , useLocation} from 'react-router-dom';
import { Form, Button, FormGroup, FormControl, ControlLabel, Dropdown, Accordion, Card } from "react-bootstrap";
// import '../../../css/Header-section.css';
import { GetSCFLD } from '../../../actions';
import check from '../../../assets/svg/check-mark.svg';
import deleteMark from '../../../assets/svg/delete.svg';
import arFlag from '../../../assets/images/soady flag.png';
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
// Main Collection 
import MainCollection from './Collection/MainCollection'
//action Btn Included {save, Cancel}
import SaveBtn from './SaveBtn';


class Section extends Component {             
 
    constructor(props) {
        super(props);
        this.state = {
            codeLang : 'en',            
        }
    }
    componentDidMount(){    
        // Get Section By Id. 
        this.props.dispatch(GetSCFLD.getSectionFields());
        // this.setState({
        //     codeLang: 'ar'
        // })                  
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
                }
            })
        }              
    }
    _getCollection = () => {        
        let sectionCollection = this.props.sectionFieldsDT.data.section.Collections,
            section = this.props.sectionFieldsDT.data.section;
        if(sectionCollection.length > 0){                                                  
            return <MainCollection codelangCol = {this.state.codeLang} collectionData = {section}/>            
        }      
    }
    
    render() {        
        if(!this.props.sectionFieldsDT){
            return <div>Loading ...</div>
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
                    <div className="page__flags__country active">
                        <img src={arFlag} />
                        <span className="active">EN</span>
                    </div>
                    <div className="page__flags__country">
                        <img src={arFlag} />
                        <span className="active">عربي</span>
                    </div>
                    <div className="page__flags__country">
                        <img src={arFlag} />
                        <span className="active">fr</span>
                    </div>
                </div>
                {this._getSectionFields()}                             
                {this._getCollection()}
                {/* <Accordion defaultActiveKey="022">
                    <h4 className="setting--sidebar__header"> Logos </h4>
                    <Card>
                        <Card.Header>
                            <Accordion.Toggle as={Button} variant="link" eventKey="022">
                                <span>Logo 1</span>
                                <div className="controls">
                                    <img src={trash} />
                                    <FaBars />
                                </div>
                            </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="022">
                            <Card.Body>
                                <div className="setting--sidebar__color">
                                    <div className="sidebar__color__main">
                                        <div className="color__main__content">
                                            <input className="upload-image" id="image" type="file" />
                                            <label className="upload-image__label" htmlFor="image">
                                                <div className="upload-image__label__icon">
                                                    <p>Browse</p>
                                                </div>
                                                <span>delete</span>
                                            </label>
                                            <div className="label generic--section">
                                                <input className="generic--section__form" placeholder="www.example.com/lorem-ipsum" type="text" />
                                                <span className="focus-border"></span>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>                 
                </Accordion> */}                            
            </>                
        )
    }
}

const mapStateToProps = state => ({
    initialized: state.app.initialized,
    sectionFieldsDT : state.sectionData.sectionFields
})

export default connect(mapStateToProps)(Section)
