import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
// import classNames from 'classnames';


// import DragDrop from './Drag_Drop/DragDrop'
// Sidebar data format
import HeaderDT from './SidebarFormat/HeaderDT';
import FooterDT from './SidebarFormat/FooterDT';
import MainContentDT from './SidebarFormat/MainContentDT';

//LocalImage
import Settings from '../../assets/svg/add-page.svg';
import { FaPlus } from "react-icons/fa";

import { app, ADDLAYOUT,ADDNESEC, ROUTECOM} from '../../actions';
import LoaderSpinner from './Spinner/LoaderSpinner';
import PathsApp from '../../actions/Api_paths';
//Sections Available
import PagesAvailable from './PagesAvailable/PagesAvailable'
import deleteMark from '../../assets/svg/delete.svg';
import localization from '../../localization/localization';



class Sidebar extends Component {
    constructor(props){
        super(props);
        this.state = { 
            showPagesAvailable: false
        }
    }  
    _PageName(){
        if(this.props.PageResions){
            return (
                <h2>
                    {this.props.PageResions.Name} 
                    <span onClick = {()=> {
                            this.props.closeRoutePage?
                                this.props.dispatch(ADDLAYOUT.CloseAddLayout(!this.props.closeRoutePage))
                            :
                                this.props.dispatch(ADDLAYOUT.CloseAddLayout(true))                                                                                
                        }}>
                        <img src={this.props.closeRoutePage?  deleteMark : Settings} />
                        
                    </span>
                </h2>
            )
        }
    }
    
    _getData(){
        if(this.props.PageResions){
            console.log(this.props.PageResions)
            let itemsForSection = 0,
                regions_length = this.props.PageResions.Regions.length - 2; // Get index Before Footer 
            return this.props.PageResions.Regions.map((data, key)=>{  
                // send Length Data Of Section:
                if(data.CodeName != "header" && data.CodeName != "footer"){
                    itemsForSection = data.UserSections.length;
                    console.log(itemsForSection)
                }          
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
                                <MainContentDT MainContenData = {data} SectionItems = {itemsForSection}/>
                            :
                             null 
                        }     
                        { 
                            (key == regions_length )?                                
                                <div className="sidebar__header__section sidebar__header__section--add" onClick = {()=>{
                                    this.props.dispatch(ROUTECOM.routeComponent('sectionsAvailable'))
                                }}>
                                    {/* <Link className="header__section--add" to = {`${PathsApp.Paths}region/${this.props.PageResions.id}`} > */}
                                        <span className= 'header__section--add'> <FaPlus /> {localization.AddNewSection}</span>
                                    {/* </Link>                                 */}
                                </div>
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
            return (
                <div className="main-loader main-loader--sec">  
                <div className="HeaderLoader--section mb-3">
                    <span className="loadingStyle label--sec"></span>
                    <span className="loadingStyle setting--sec"></span>
                </div>
                <div className="row--sec--home mt-3">
                    <span className="loadingStyle icon--input"></span>
                    <span className="loadingStyle icon--label"></span>
                    <span className="loadingStyle icon--move"></span>
                    </div>
                    <div className="row--sec mt-5">
                    <span className="loadingStyle input--row--sec"></span>
                    </div>
                    <div className="row--sec--home mt-3">
                    <span className="loadingStyle icon--input"></span>
                    <span className="loadingStyle icon--label"></span>
                    <span className="loadingStyle icon--delete"></span>
                    <span className="loadingStyle icon--move"></span>
                    </div>
                    <div className="row--sec--home mt-3">
                    <span className="loadingStyle icon--input"></span>
                    <span className="loadingStyle icon--label"></span>
                    <span className="loadingStyle icon--delete"></span>
                    <span className="loadingStyle icon--move"></span>
                    </div>
                    <div className="row--sec--home mt-3">
                    <span className="loadingStyle icon--input"></span>
                    <span className="loadingStyle icon--label"></span>
                    <span className="loadingStyle icon--delete"></span>
                    <span className="loadingStyle icon--move"></span>
                    </div>
                    <div className="row--sec--home mt-3">
                    <span className="loadingStyle icon--input"></span>
                    <span className="loadingStyle icon--label"></span>
                    <span className="loadingStyle icon--delete"></span>
                    <span className="loadingStyle icon--move"></span>
                    </div>
                    <div className="row--sec--home mt-3">
                    <span className="loadingStyle icon--input"></span>
                    <span className="loadingStyle icon--label"></span>
                    <span className="loadingStyle icon--delete"></span>
                    <span className="loadingStyle icon--move"></span>
                    </div>
                    <div className="row--sec--home mt-3">
                    <span className="loadingStyle icon--input"></span>
                    <span className="loadingStyle icon--label"></span>
                    <span className="loadingStyle icon--delete"></span>
                    <span className="loadingStyle icon--move"></span>
                    </div>
                     <div className="row--sec--home mt-3">
                    <span className="loadingStyle icon--input"></span>
                    <span className="loadingStyle icon--label"></span>
                    <span className="loadingStyle icon--delete"></span>
                    <span className="loadingStyle icon--move"></span>
                    </div>
                    <div className="row--sec--home mt-3">
                    <span className="loadingStyle icon--input"></span>
                    <span className="loadingStyle icon--label"></span>
                    <span className="loadingStyle icon--delete"></span>
                    <span className="loadingStyle icon--move"></span>
                    </div>
                    <div className="row--sec--home mt-3">
                    <span className="loadingStyle icon--input"></span>
                    <span className="loadingStyle icon--label"></span>
                    <span className="loadingStyle icon--delete"></span>
                    <span className="loadingStyle icon--move"></span>
                    </div>
                    <div className="row--sec--home mt-3">
                    <span className="loadingStyle icon--input"></span>
                    <span className="loadingStyle icon--label"></span>
                    <span className="loadingStyle icon--delete"></span>
                    <span className="loadingStyle icon--move"></span>
                    </div>
                    {/* <Spinner animation="border" /> */}
                </div>
            )
            //  <LoaderSpinner/>            
        }
    }
    render() {                
        return (            
            <>                               
                <div className="sidebar__header__section"> {this._PageName()}</div>
                  
                { this.props.closeRoutePage ? <PagesAvailable/> : <div> {this._getData()} </div> }
            </>
        )
    }
}

const mapStateToProps = state => ({
    initialized: state.app.initialized,
    dataFA: state.app.dataFirst,
    PageResions : state.slidebar.regions,
    closeRoutePage : state.slidebar.closeRoutePage
})

export default connect(mapStateToProps)(Sidebar)