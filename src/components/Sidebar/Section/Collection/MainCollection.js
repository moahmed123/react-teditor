import React, { Component } from 'react';
import { SaveSCFLD } from '../../../../actions';
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
import Link from '../Fields/Link';

class MainCollection extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            open: "close"
        }
    }
    componentDidMount() {
        console.log(this.props.collectionData)
        let itemCollection = [];
        this.props.collectionData.Collections.map((data, key) => {
            itemCollection.push(key)
        })
        this.setState({ items: itemCollection })        
    }
    onSortEnd = ({ oldIndex, newIndex }) => {
        this.setState(({ items }) => ({
            items: arrayMove(items, oldIndex, newIndex),
        }));
    };
    _getSectionFields = (FieldsVal, lang) => {
        let sectionFields   = FieldsVal;
        console.log("sectionFieldssectionFields" , sectionFields.length , " ",lang )
        if(sectionFields.length > 0){
            return sectionFields.map((Fields, key) => {  
                // View For Type Text               
                if (Fields.Type == "text"){
                    return <TypeText key={key} codelang = {lang} FieldData = {Fields}/>
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
                else if(Fields.Type == "link"){
                    return <Link key={key} codelang = {lang} FieldLink = {Fields}/>
                }
            })
        }              
    }
    render() {
        const {CollectionName, Collections} = this.props.collectionData;         
        const SortableItem = SortableElement(({ value }) => {
            return (  
                <div className='Parent_Cart'>
                     <Card onClick={()=>{console.log(value)}}>
                        <Card.Header>
                            <Accordion.Toggle as={Button} variant="link" eventKey={`col_${value}`}>
                                <span>{Collections[value].Name}</span>                                
                                <div className="controls"><FaBars/></div>
                            </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey={`col_${value}`}>
                            <Card.Body>
                                {this._getSectionFields(Collections[value].Fields, this.props.codelangCol)}
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>                 
                    <div className= 'Delete' onClick={()=>{console.log('Delete')}}> <img src={trash} /></div>
                </div>              
            );
        });
        const SortableList = SortableContainer(({ items }) => {
            return (
                <ul className='col-md-12'>
                    {items.map((value, index) => (                        
                        <SortableItem key={`item-${value}`} index = {index} value={value} />                                                    
                    ))}
                </ul>
            );
        });

        return (
            <div className='row'>                
                <h4 className="setting--sidebar__header"> {CollectionName} </h4> 
                <div className='col-md-12'>
                <Accordion defaultActiveKey="0">
                    <SortableList items={this.state.items} onSortEnd={this.onSortEnd} distance={1} />
                </Accordion>
                </div>
            </div>
        )
    }
}
const mapStateToProps = state => ({
    newFields: state.newValFields.newFields
})
export default connect(mapStateToProps)(MainCollection)