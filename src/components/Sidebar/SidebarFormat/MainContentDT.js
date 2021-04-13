import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FaTrashAlt, FaPlus } from "react-icons/fa";
import Trash from '../../../assets/svg/trash.svg';
import Promoted from '../../../assets/svg/promoted-product.svg';
import { Modal, Button } from 'react-bootstrap';
//sort Section 
import { arrayMove, SortableContainer, SortableElement } from 'react-sortable-hoc';
import trash from '../../../assets/svg/trash.svg';
import { REMSEC , REODSEC, GetSCFLD, ROUTECOM, app} from '../../../actions';
import PathsApp from './../../../actions/Api_paths';
import { connect } from 'react-redux';
import LocalizedStrings from 'react-localization';
import localization from '../../../localization/localization';

class MainContentDT extends Component {
    constructor(props){
        super(props);
        this.state = {
            items: [],
            sectionId: [],
            collectData: [],
            isOpen: false,
            SectionIdToRemoved: null,
            eventTagetId: null
        }
    }
    componentDidMount(){
        // this.props.dispatch(app.reloadRegionsOfPages(null))
        // this.setState({ items: [] })
        if(this.props.MainContenData){
            this.state.collectData.push(this.props.MainContenData);
            // console.log('main contant' , this.props.MainContenData.UserSections.CodeName);
            console.log('main contant' , this.props.MainContenData);
            console.log(this.state.collectData)            
        }
        
        console.log(this.props.SectionItems)
        this._FunCreateDropItems()
    }
    _FunCreateDropItems = () =>{
        let itemCollection = [];
        let SectionId = [];
        let lengthSectionItems = this.props.SectionItems; 
        //Create Items to Sort For it. 
        for (let IS = 0; IS < lengthSectionItems; IS++ ){
            itemCollection.push(IS);
        }
        this.props.MainContenData.UserSections.map((data, key) => {
            // itemCollection.push(key);
            SectionId.push(data.id)
        })
        this.setState({ items: itemCollection, sectionId: SectionId })   
    }  
    onSortEnd = ({ oldIndex, newIndex }) => {        
        this.setState(({ items }) => ({
            items: arrayMove(items, oldIndex, newIndex),
        }));
        console.log(oldIndex, newIndex);   
        let SECDrop = []
        for (let i = 0; i<this.state.sectionId.length; i++){ 
            let cc = this.state.items[i];            
            let SortCollJS = {"key": this.state.sectionId[cc],"value": i}; 
            SECDrop.push(SortCollJS)
            // console.log(SECDrop)
            // Save Sort Of Collection:
            // REODSEC            
        }  
        this.props.dispatch(REODSEC.reorderSection(SECDrop));          
    };  

    
    closeModal = () => this.setState({ isOpen: false });
    // onSortMove = (e) =>{
    //     console.log(e.target)
    // }  
    render() {
        const SortableItem = SortableElement(({ value }) => {
            if(this.props.MainContenData.UserSections && this.state.collectData.length > 0 ){
                // console.log("this.....",this.state.items)
                const {UserSections} = this.props.MainContenData; 
                const collect_Data_state = this.state.collectData[0].UserSections;                  
                    return (  
                        <div className='Parent_Cart' key={value}>
                            <div className="label" >                    
                             <div onClick={()=>{
                                    this.props.dispatch(GetSCFLD.getSectionFields(null, collect_Data_state[value].id));
                                    this.props.dispatch(ROUTECOM.routeComponent('SectionPG'));
                                    //Add Class Loading For Layouts. 
                                    document.getElementsByTagName("BODY")[0].classList.add('loading-Layout');
                                }}>
                                        {/* <img className="label__icon" src={Promoted} /> */}
                                        <span> 
                                            {collect_Data_state[value].DescName}
                                        </span>                             
                                </div>                                
                            </div>                                                                                 
                            <div className= 'Delete_home' 
                                onClick = {(e)=> {
                                    this.setState({ 
                                        SectionIdToRemoved: collect_Data_state[value].id,
                                        eventTagetId: value,
                                        isOpen: true 
                                    });
                                    // console.log(e.target.parentElement.parentElement, value)
                                    // this.props.dispatch(REMSEC.removeSection(collect_Data_state[value].id));                                   
                                    // // TODO DYNAMIC CHECK REM IS OK 
                                    // setTimeout(()=>{
                                    //     e.target.parentElement.parentElement.remove()
                                    // },200)                                   
                                }}
                            > 
                                <img src={trash} />
                            </div>     
                            <svg  className="label--drag" xmlns="http://www.w3.org/2000/svg" width="6" height="10" viewBox="0 0 6 10">
                                <g id="Group_7136" data-name="Group 7136" transform="translate(-9413.335 -20234.123)" opacity="0.62">
                                    <g id="Ellipse_1088" data-name="Ellipse 1088" transform="translate(9417.335 20234.123)" fill="#fff" stroke="#707070" strokeWidth="1">
                                    <circle cx="1" cy="1" r="1" stroke="none"/>
                                    <circle cx="1" cy="1" r="0.5" fill="none"/>
                                    </g>
                                    <g id="Ellipse_1091" data-name="Ellipse 1091" transform="translate(9413.335 20234.123)" fill="#fff" stroke="#707070" strokeWidth="1">
                                    <circle cx="1" cy="1" r="1" stroke="none"/>
                                    <circle cx="1" cy="1" r="0.5" fill="none"/>
                                    </g>
                                    <g id="Ellipse_1092" data-name="Ellipse 1092" transform="translate(9413.335 20238.123)" fill="#fff" stroke="#707070" strokeWidth="1">
                                    <circle cx="1" cy="1" r="1" stroke="none"/>
                                    <circle cx="1" cy="1" r="0.5" fill="none"/>
                                    </g>
                                    <g id="Ellipse_1093" data-name="Ellipse 1093" transform="translate(9413.335 20242.123)" fill="#fff" stroke="#707070" strokeWidth="1">
                                    <circle cx="1" cy="1" r="1" stroke="none"/>
                                    <circle cx="1" cy="1" r="0.5" fill="none"/>
                                    </g>
                                    <g id="Ellipse_1089" data-name="Ellipse 1089" transform="translate(9417.335 20238.123)" fill="#fff" stroke="#707070" strokeWidth="1">
                                    <circle cx="1" cy="1" r="1" stroke="none"/>
                                    <circle cx="1" cy="1" r="0.5" fill="none"/>
                                    </g>
                                    <g id="Ellipse_1090" data-name="Ellipse 1090" transform="translate(9417.335 20242.123)" fill="#fff" stroke="#707070" strokeWidth="1">
                                    <circle cx="1" cy="1" r="1" stroke="none"/>
                                    <circle cx="1" cy="1" r="0.5" fill="none"/>
                                    </g>
                                </g>
                                </svg>                                       
                        </div>              
                    );                              
            }
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
        return (
            <div className="sidebar__header__section" key={this.props.MainContenData.id}>
                {
                    this.props.MainContenData.UserSections.length > 0 ? 
                        // <h6> 
                        //     {this.props.MainContenData.Name}
                        // </h6>
                        
                        this.props.MainContenData.Name.toUpperCase() == 'MAIN CONTENT' ? 
                            <h6> main sections </h6> 
                        : 
                            <h6> {this.props.MainContenData.Name} </h6> 
                        
                        
                    :
                        <h6 className='text-center not-found-sc'> {localization.SectionNotFound}</h6>
                }                                               
                {
                this.state.items.length > 0 ?
                    <SortableList items={this.state.items} onSortEnd={this.onSortEnd} distance={1} helperClass="sortable-list-tab" onSortMove={this.onSortMove} />
                    :
                    null
                }   
                <Modal centered className="generic-alert" show={this.state.isOpen} onHide={this.closeModal} backdrop="static">
                    <Modal.Header>
                    <Modal.Title className='Pop_del_Sec'>{localization.TitleDeleteSection}</Modal.Title>
                     <div className="delete__modal">
                        <svg onClick={this.closeModal} xmlns="http://www.w3.org/2000/svg" id="close_3_" width="12.743" height="12.743" viewBox="0 0 12.743 12.743">
                            <defs>
                            
                            </defs>
                            <path id="Path_67" d="M12.417 10.674L2.43.687a1.114 1.114 0 0 0-1.577 0l-.526.526a1.115 1.115 0 0 0 0 1.577l9.987 9.987a1.115 1.115 0 0 0 1.577 0l.526-.526a1.114 1.114 0 0 0 0-1.577zm0 0" class="cls-1" transform="translate(0 -.36)"/>
                            <path id="Path_68" d="M10.314.688L.327 10.675a1.115 1.115 0 0 0 0 1.577l.526.526a1.115 1.115 0 0 0 1.577 0l9.988-9.986a1.114 1.114 0 0 0 0-1.577l-.527-.526a1.115 1.115 0 0 0-1.577 0zm0 0" class="cls-1" transform="translate(0 -.362)"/>
                        </svg>                             
                     </div>
                    </Modal.Header>    
                            <Modal.Body className='Msg_Pop_Del_Sec'>{localization.ConfirmMsgForDeleteSection}</Modal.Body>
                    <Modal.Footer>
                        <Button variant="outline-secondary" onClick={this.closeModal}>{localization.Cancel}</Button>                                
                        <Button variant="danger" onClick={()=>{
                            console.log(this.state.eventTagetId)                            
                                // Remove Section Confirmed:
                                this.props.dispatch(REMSEC.removeSection(this.state.SectionIdToRemoved));   
                                this.setState({isOpen: false});  
                                // let NewData = this.props.MainContenData.UserSections.slice(this.state.eventTagetId + 1);
                                // this.state.collectData.UserSections = NewData;
                                // console.log(this.state.collectData)                                                                                                                                                                    
                            // TODO DYNAMIC CHECK REM IS OK 
                            // document.getElementsByClassName("Parent_Cart")[this.state.eventTagetId].remove();
                            setTimeout(()=>{                                
                                // document.getElementsByClassName("Parent_Cart")[this.state.eventTagetId].remove()
                                // this.setState({isOpen: false, SectionIdToRemoved: null});
                                // this.setState({isOpen: false});                                
                            },300)
                        }}>{localization.Delete_modal}</Button>
                        
                    </Modal.Footer>
                </Modal>             
            </div>
        )
    }
}

const mapStateToProps = state => ({
    initialized: state.app.initialized,
    dataFA: state.app.dataFirst,
    PageResions : state.slidebar.regions
})

export default connect(mapStateToProps)(MainContentDT)