import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FaTrashAlt, FaPlus } from "react-icons/fa";
import Trash from '../../../assets/svg/trash.svg';
import Promoted from '../../../assets/svg/promoted-product.svg';
//sort Section 
import { arrayMove, SortableContainer, SortableElement } from 'react-sortable-hoc';
import trash from '../../../assets/svg/trash.svg';
import { REMSEC , REODSEC } from '../../../actions';
import { connect } from 'react-redux';

class MainContentDT extends Component {
    constructor(props){
        super(props);
        this.state = {
            items: [],
            sectionId: []
        }
    }
    componentDidMount(){
        console.log('main contant' , this.props.MainContenData);
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
    _UserSections(){
        if(this.props.MainContenData){
            return this.props.MainContenData.UserSections.map((Sections, key)=>{
                return (
                    <div className="label" key={key}>                    
                        <Link to = {`/section/${Sections.id}`} >
                                    <img className="label__icon" src={Promoted} />
                                <span> 
                                    {Sections.DescName}
                                </span> 
                            <img className="label--delete" src={Trash} />
                        </Link>
                    </div>
                )
            })
        }
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
    //[0,1]
    render() {
        const SortableItem = SortableElement(({ value }) => {
            if(this.props.MainContenData.UserSections){                
                // console.log("this.....",this.state.items)
                const {UserSections} = this.props.MainContenData;                   
                    return (  
                        <div className='Parent_Cart' key={value}>
                            <div className="label" >                    
                                <Link to = {`/section/${UserSections[value].id}`} >
                                        <img className="label__icon" src={Promoted} />
                                        <span> 
                                            {UserSections[value].DescName}
                                        </span>                             
                                </Link>                                                           
                            </div>                                                                                 
                            <div className= 'Delete_home' 
                                onClick = {(e)=> {
                                    this.props.dispatch(REMSEC.removeSection(UserSections[value].id));                                   
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
                <ul className='col-md-12'>
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
                               
                {/* {this._UserSections()}  */}

                <SortableList items={this.state.items} onSortEnd={this.onSortEnd} distance={1} />               
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