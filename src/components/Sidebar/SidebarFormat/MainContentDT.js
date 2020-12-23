import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FaTrashAlt, FaPlus } from "react-icons/fa";
import Trash from '../../../assets/svg/trash.svg';
import Promoted from '../../../assets/svg/promoted-product.svg';
//sort Section 
import { arrayMove, SortableContainer, SortableElement } from 'react-sortable-hoc';
import trash from '../../../assets/svg/trash.svg';
import { REMSEC , REODSEC, GetSCFLD, ROUTECOM } from '../../../actions';
import PathsApp from './../../../actions/Api_paths';
import { connect } from 'react-redux';

class MainContentDT extends Component {
    constructor(props){
        super(props);
        this.state = {
            items: [],
            sectionId: [],
            collectData: []
        }
    }
    componentDidMount(){
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
    onSortMove = (e) =>{
        console.log(e.target)
    }  
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
                                    this.props.dispatch(ROUTECOM.routeComponent('SectionPG'))
                                }}>
                                        <img className="label__icon" src={Promoted} />
                                        <span> 
                                            {collect_Data_state[value].DescName}
                                        </span>                             
                                </div>  
                                {/* <Link to = {`${PathsApp.Paths}section/${collect_Data_state[value].id}`} onClick={()=>{
                                    this.props.dispatch(GetSCFLD.getSectionFields(null, collect_Data_state[value].id))
                                }}>
                                        <img className="label__icon" src={Promoted} />
                                        <span> 
                                            {collect_Data_state[value].DescName}
                                        </span>                             
                                </Link>                                                            */}
                            </div>                                                                                 
                            <div className= 'Delete_home' 
                                onClick = {(e)=> {
                                    this.props.dispatch(REMSEC.removeSection(collect_Data_state[value].id));                                   
                                    // TODO DYNAMIC CHECK REM IS OK 
                                    setTimeout(()=>{
                                        e.target.parentElement.parentElement.remove()
                                    },200)                                   
                                }}
                            > 
                                <img src={trash} />
                            </div>                  
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
                    this.props.MainContenData.UserSections.length > 0? 
                        <h2> {this.props.MainContenData.Name} </h2>
                    :
                        <h6 className='text-center not-found-sc'> No Section Found </h6>
                }                                               
                {
                this.state.items.length > 0 ?
                    <SortableList items={this.state.items} onSortEnd={this.onSortEnd} distance={1} helperClass="sortable-list-tab" onSortMove={this.onSortMove} />
                    :
                    null
                }                
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