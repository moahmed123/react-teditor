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
import {SortableContainer, SortableElement } from 'react-sortable-hoc';

import { arrayMove } from 'react-sortable-hoc';

const SortableItem = SortableElement(({value}) => <li> <span>pla</span>{value}</li>);
const SortableList = SortableContainer(({items}) => {
    return (
      <ul>
        {items.map((value, index) => (
          <SortableItem key={`item-${value}`} index={index} value={value} />
        ))}
      </ul>
    );
  });

// Sections Fields 
import TypeText from './Fields/TypeText';
import TypeCheckbox from './Fields/TypeCheckbox';
import SelectLookup from './Fields/SelectLookup';
import TagsCategory from './Fields/TagsCategory';

//action Btn Included {save, Cancel}
import SaveBtn from './SaveBtn';


class Section extends Component {
    state = {
        items: ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5', 'Item 6'],
      };
      
  onSortEnd = ({oldIndex, newIndex}) => {
    this.setState(({items}) => ({
      items: arrayMove(items, oldIndex, newIndex),
    }));
  };
    constructor(props) {
        super(props);
        this.state = {
            codeLang : 'en'
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
        let sectionCollection = this.props.sectionFieldsDT.data.section.Collections,
            sectionFields     = this.props.sectionFieldsDT.data.section.Fields; 

            // console.log(sectionCollection.length, sectionFields.length)
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
                    // return <SelectLookup key={key} codelang = {this.state.codeLang} FieldData = {Fields}/>
                    return null ;
                }else if(Fields.Type == "tags-category"){
                    return <TagsCategory key={key} codelang = {this.state.codeLang} FieldData = {Fields}/>
                }
            })
        }        
    }
    render() {
        const {items} = this.state;

        const colourOptions = [
            { value: 'chocolate', label: 'Chocolate1' },
            { value: 'strawberry', label: 'Strawberry1' },
            { value: 'vanilla', label: 'Vanilla1' }
          ]
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

                <Accordion defaultActiveKey="0">
                    <h4 className="setting--sidebar__header"> Logos </h4>
                    <Card>
                        <Card.Header>
                            <Accordion.Toggle as={Button} variant="link" eventKey="0">
                                <span>Logo 1</span>
                                <div className="controls">
                                    <img src={trash} />
                                    <FaBars />
                                </div>
                            </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="0">
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
                    <Card>
                        <Card.Header>
                            <Accordion.Toggle as={Button} variant="link" eventKey="1">
                                <span>Logo 2</span>
                                <div className="controls">
                                    <img src={trash} />
                                    <FaBars />
                                </div>
                            </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="1">
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
                    <Card>
                        <Card.Header>
                            <Accordion.Toggle as={Button} variant="link" eventKey="2">
                                <span>Logo 3</span>
                                <div className="controls">
                                    <img src={trash} />
                                    <FaBars />
                                </div>
                            </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="2">
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

                </Accordion>
                <Select
                    defaultValue={[colourOptions[0]]}
                    isMulti
                    name="colors"
                    options={colourOptions}
                    className="basic-multi-select"
                    classNamePrefix="select"
                />
                <SortableList items={this.state.items} onSortEnd={this.onSortEnd} />
            </>                


        )
    }
}

const mapStateToProps = state => ({
    initialized: state.app.initialized,
    sectionFieldsDT : state.sectionData.sectionFields
})

export default connect(mapStateToProps)(Section)
