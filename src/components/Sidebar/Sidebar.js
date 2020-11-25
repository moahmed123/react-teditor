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
// import ArrowLeft from '../../assets/images/arrow-left.png';
import { FaPlus } from "react-icons/fa";

import { app } from '../../actions';




class Sidebar extends Component {
    componentDidMount(){
        // this.dispatch.firstData()
        this.props.dispatch(app.firstData());        
    }
    _PageName(){
        if(this.props.PageResions){
            return <h2>{this.props.PageResions.Name}</h2>
        }
    }
    _getData(){
        if(this.props.PageResions){
            console.log(this.props.PageResions)
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
                            data.CodeName == "footer"?
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
                <div className="sidebar__header__section"> {this._PageName()}</div>
                <div> {this._getData()} </div>
                <div className="sidebar__header__section">
                    <button className="header__section--add"><FaPlus /> Add New Section</button>
                </div>
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