import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { Link } from 'react-router-dom';
// import classNames from 'classnames';


// import DragDrop from './Drag_Drop/DragDrop'
// Sidebar data format
import HeaderDT from './SidebarFormat/HeaderDT';
import FooterDT from './SidebarFormat/FooterDT';
import MainContentDT from './SidebarFormat/MainContentDT';

//LocalImage
import Settings from '../../assets/svg/settings.svg';
import { FaPlus } from "react-icons/fa";

import { app } from '../../actions';

//Sections Available
import SectionAvailable from './Section/sectionsAvailable/sectionsAvailable'




class Sidebar extends Component {
    constructor(props){
        super(props);
        this.state = { 
            showSectionsAvailable: false
        }
    }
    componentDidMount(){
        // this.dispatch.firstData()
        // this.props.dispatch(app.firstData());        
    }
    _PageName(){
        if(this.props.PageResions){
            return <h2>{this.props.PageResions.Name} <img src={Settings} /></h2>
        }
    }
    _addNewSections = () => {
        this.setState({
            showSectionsAvailable: true
        })
    }
    _getData(){
        if(this.props.PageResions){
            console.log(this.props.PageResions)
            let renderAddNewSection = -1; 
            return this.props.PageResions.Regions.map((data, key)=>{                
                return(                    
                    <div key={key}>                        
                        { 
                            data.CodeName == "header"? 
                                <HeaderDT headerData = {data}/>
                            :
                             null 
                        }
                        { 
                            data.CodeName != "header" && data.CodeName != "footer"? 
                                <MainContentDT MainContenData = {data}/>
                            :
                             null 
                        }
                        {
                            (data.CodeName == "footer" && renderAddNewSection == -1)?                                
                                <div className="sidebar__header__section">
                                    <button className="header__section--add" onClick = {this._addNewSections}><FaPlus /> Add New Section</button>
                                </div>
                            : 
                                null
                        } 
                        
                        { // To Not Render Add New Section Again 
                            (data.CodeName == "footer" && renderAddNewSection == -1)? renderAddNewSection == 0 : null 
                        } 
                        {
                            data.CodeName == "footer"?
                                // renderAddNewSection == -1? <div>Add New Section</div>: null
                                <FooterDT FooterData = {data}/>
                            :
                             null 
                        }
                        
                    </div>
                )            
            })
        }else{
            return <h6> Loading...</h6>
        }
    }
    render() {
        return (            
            <>
                {
                    this.state.showSectionsAvailable ? 
                        <SectionAvailable/>
                    : null
                }
                
                <div className="sidebar__header__section"> {this._PageName()}</div>
                <div> {this._getData()} </div>              
            </>
        )
    }
}

const mapStateToProps = state => ({
    initialized: state.app.initialized,
    dataFA: state.app.dataFirst,
    PageResions : state.slidebar.regions
})

export default connect(mapStateToProps)(Sidebar)