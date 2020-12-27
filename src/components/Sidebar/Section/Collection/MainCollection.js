import React, { Component } from 'react';
import { GetSCFLD, ADCOLLE, REMCOLLE, REODCOLLS} from '../../../../actions';
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
import Link from '../Fields/Link/Link';
import Spinner from 'react-bootstrap/Spinner';


import SetionCollection from './SetionCollection'

class MainCollection extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            open: "close",
            addCol: false,
            lengthColl: null,
            updataCollection: false,
            eventlengthCol: null,
            // sortCollection: false,
            collectionId: [],
            loading: false,
            addLoading: false
        }
        this._addCollection = this._addCollection.bind(this);

    }
    componentDidMount() {
        console.log("componentDidMount" + this.props.collectionData)
        this.setState({
            lengthColl: this.props.collectionData.Collections.length
        })
        //Function To Create Items For Drop 
        this._FunCreateDropItems();        
    }
     
    _FunCreateDropItems = () =>{
        let itemCollection = [];
        let CollectionId = [];
        this.props.collectionData.Collections.map((data, key) => {
            itemCollection.push(key);
            CollectionId.push(data.id)
        })
        this.setState({ items: itemCollection, collectionId: CollectionId })   
    }
    onSortEnd = ({ oldIndex, newIndex }) => {
        this.setState(({ items }) => ({
            items: arrayMove(items, oldIndex, newIndex),
        }));
        console.log(this.state.items, this.state.collectionId);
        let collDrop = []
        for (let i = 0; i<this.state.collectionId.length; i++){ 
            let cc = this.state.items[i];
            console.log(this.state.items[i]+1);
            console.log('"'+this.state.collectionId[cc]+'"'+ i + '"');
            let SortCollJS = {"key": this.state.collectionId[cc],"value": i}; 
            collDrop.push(SortCollJS)
            // console.log(SortCollJS)
            // Save Sort Of Collection:            
        }
        this.props.dispatch(REODCOLLS.reorderCollections(collDrop));
        console.log(collDrop)
    };   
    _addCollection = () => {
        this.setState({addCol: true, addLoading: true})
        const sectionId = this.props.collectionData.id; // Setion Id TO USe It FOr Add Some Of Collection
        //Send Section Id:
        this.props.dispatch(ADCOLLE.addCollection(sectionId));    
        setTimeout(()=>{
           this._checkAddOrRemoave()
        }, 800)            
    }   
    _checkAddOrRemoave(e){
        const {Collections} = this.props.collectionData; 
        // check when delete and add collection 
        if(this.state.addCol){
            // this.setState({eventlengthCol: Collections.length })  
            if(this.props.collectionData.length != 0){
                if(this.state.lengthColl < Collections.length){ 
                    console.log(" ----- Add Collection ----- ", this.state.items);  
                    // console.log(this.state.lengthColl, "  " , Collections.length)
                    // console.log(this.state.items)                          
                    let numberPush = Collections.length - 1;             
                    let pushItems = this.state.items.push(numberPush)
                    // console.log(pushItems)
                    // console.log(this.state.items)
                    this.setState({                     
                        addCol: false, 
                        lengthColl: Collections.length,
                        items: this.state.items ,
                        addLoading: false
                    })
                }else if (this.state.lengthColl >  Collections.length){
                    // console.log(this.state.lengthColl, "  " , Collections.length, Collections)
                    // console.log(this.state.items) 
                    // console.log(Collections.length)  
                    // Deleted Collection 
                    console.log("Deleted Collection", this.state.items);
                    this.state.items.pop();
                    console.log("Deleted Collection ===> ", this.state.items);
                    this.setState({                     
                        addCol: false, 
                        lengthColl: Collections.length,
                        items: this.state.items ,
                        loading: false
                    });
                }
            }else{
                //Delected All Collection 
                console.log('Deleted all Colletion');                
                this.setState({                     
                    addCol: false, 
                    lengthColl: 0,
                    items: [] ,
                })
            }         
            
            // update the Id For Collection:
            let CollectionId = [];
            Collections.map((data, key) => {
                CollectionId.push(data.id)
            })
            this.setState({ collectionId: CollectionId });
        }          
    } 
    render() {
        const {CollectionName, Collections, CollectionButtonName, CollectionItemName} = this.props.collectionData;         
        const SortableItem = SortableElement(({ value }) => {
            return (  
                <div className='Parent_Cart'>
                     <Card>
                        <Card.Header>
                            <Accordion.Toggle as={Button} variant="link" eventKey={`col_${value}`}>
                                <span>{CollectionItemName} {value + 1}</span>                                
                                <div className="controls">
                                <svg className="label--drag" xmlns="http://www.w3.org/2000/svg" width="6" height="10" viewBox="0 0 6 10">
  <g id="Group_7136" data-name="Group 7136" transform="translate(-9413.335 -20234.123)" opacity="0.62">
    <g id="Ellipse_1088" data-name="Ellipse 1088" transform="translate(9417.335 20234.123)" fill="#fff" stroke="#707070" stroke-width="1">
      <circle cx="1" cy="1" r="1" stroke="none"/>
      <circle cx="1" cy="1" r="0.5" fill="none"/>
    </g>
    <g id="Ellipse_1091" data-name="Ellipse 1091" transform="translate(9413.335 20234.123)" fill="#fff" stroke="#707070" stroke-width="1">
      <circle cx="1" cy="1" r="1" stroke="none"/>
      <circle cx="1" cy="1" r="0.5" fill="none"/>
    </g>
    <g id="Ellipse_1092" data-name="Ellipse 1092" transform="translate(9413.335 20238.123)" fill="#fff" stroke="#707070" stroke-width="1">
      <circle cx="1" cy="1" r="1" stroke="none"/>
      <circle cx="1" cy="1" r="0.5" fill="none"/>
    </g>
    <g id="Ellipse_1093" data-name="Ellipse 1093" transform="translate(9413.335 20242.123)" fill="#fff" stroke="#707070" stroke-width="1">
      <circle cx="1" cy="1" r="1" stroke="none"/>
      <circle cx="1" cy="1" r="0.5" fill="none"/>
    </g>
    <g id="Ellipse_1089" data-name="Ellipse 1089" transform="translate(9417.335 20238.123)" fill="#fff" stroke="#707070" stroke-width="1">
      <circle cx="1" cy="1" r="1" stroke="none"/>
      <circle cx="1" cy="1" r="0.5" fill="none"/>
    </g>
    <g id="Ellipse_1090" data-name="Ellipse 1090" transform="translate(9417.335 20242.123)" fill="#fff" stroke="#707070" stroke-width="1">
      <circle cx="1" cy="1" r="1" stroke="none"/>
      <circle cx="1" cy="1" r="0.5" fill="none"/>
    </g>
  </g>
</svg>

                                </div>
                            </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey={`col_${value}`}>
                            <Card.Body>
                                <SetionCollection CollectionField = {Collections[value]}  langCollection = {this.props.codelangCol}/>
                                {/* {this._getSectionFields(Collections[value].Fields, this.props.codelangCol )} */}
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>                 
                    <div className= 'Delete' onClick={()=>{                                              
                        this.setState({addCol: true, loading: true});
                        console.log(Collections[value].id)
                        this.props.dispatch(REMCOLLE.removeCollection(Collections[value].id));
                       
                         setTimeout(()=>{                          
                            this._checkAddOrRemoave()
                         }, 800) 
                    }}> 
                        <img src={trash} />
                    </div>
                    <div className= 'Delete hidden_Element'>
                        <Spinner animation="border" size="sm" />
                        {/* <Spinner animation="grow" variant="light" /> */}
                    </div>
                    
                </div>              
            );
        });
        const SortableList = SortableContainer(({ items }) => {
            return (
                <ul className='p-0'>
                    {items.map((value, index) => (                        
                        <SortableItem key={`item-${value}`} index = {index} value={value} />                                                    
                    ))}
                </ul>
            );
        });                   
        if(this.props.collectionData){
            return (
                <div className='row'>                
                    <h4 className="setting--sidebar__header col-md-12"> {CollectionName} </h4> 
                    <div className='col-md-12 p-0'>                 
                        <Accordion defaultActiveKey="0">
                            <SortableList items={this.state.items} onSortEnd={this.onSortEnd} distance={1} />
                        </Accordion>
                        {
                            this.state.loading ? 
                                <div className= 'loading_collection'>
                                    <Spinner animation="border" />                            
                                </div>
                            :
                            null
                        }
                        
                    </div>  
                    {
                        this.state.addLoading? 
                            <div className='Add_Loader'> <Spinner animation="grow"  size="sm"/> </div>
                        :
                            null
                    }
                    <div className="col-md-12">
                        <button onClick = {this._addCollection} className="header__section--add col-md-12"><svg stroke="currentColor" fill="currentColor" strokwidth="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"></path></svg>
                            {CollectionButtonName}
                         </button>
                    </div>     
                   
                </div>
            )
        }
        
    }
}
const mapStateToProps = state => ({
    newFields: state.newValFields.newFields,    
    sectionFieldsDT : state.sectionData.sectionFields,
})
export default connect(mapStateToProps)(MainCollection)