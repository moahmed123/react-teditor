import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import classNames from 'classnames';
import { Dropdown} from 'react-bootstrap';
import { FaCheck ,FaRocket ,FaAngleDown , FaBars} from "react-icons/fa";
import { FaLongArrowAltLeft } from "react-icons/fa";

import {app} from './../../actions';
import Shuttl from '../../assets/svg/shuttle.svg';
import Reset from '../../assets/svg/reset.svg';
import ShuttlBlue from '../../assets/svg/shuttle-blue.svg';

// import '../../css/Header.css'


class Header extends Component {
    constructor(props) {
        super(props);
        // create a ref to store the dropdown DOM element
        this.dropdown = React.createRef();
        // this._PagesData = this._PagesData.bind(this);
      }
    componentDidMount(){
        this.props.dispatch(app.getDropdownPages()); // Dispatch Data For Pages;    
        //open menu in mobile
        var menu ,sideBar, body;
         menu = document.querySelector('.burger-menu');
         sideBar = document.querySelector('.Home__sidebar');
         function toggleSideBar (){
            menu.addEventListener('click' , function (){
                sideBar.classList.toggle('home-sidebar--active');
            });
         }
         toggleSideBar();

    }
    _PagesData(){
        if(!this.props.Pages){
            return <div>Loading ..... </div>
        }else{                         
            document.getElementById("name_page").innerHTML = this.props.Pages[0].Name; // Add First Name Page. 
            return this.props.Pages.map( (Pages_DT, key) => {
                return(       
                    // Onclick Fun : Send Regions Data Related This Page              
                    <Dropdown.Item 
                        className = { key == 0? 'active': null } // To Active First Page 
                        key={key} 
                        onClick = {
                            (event) => {                                
                                this.props.dispatch(app.reloadRegionsOfPages(Pages_DT)); 
                                this.dropdown.current.innerHTML = Pages_DT.Name ; // Replace Name By Active Pages
                                // To Remove All Active Form Dropdown  
                                for( let i = 0; i <event.target.parentElement.children.length; i++ ){
                                    event.target.parentElement.children[i].classList.remove("active")
                                }
                                // Active Event Click
                                event.target.classList.add('active');                               
                            }}>

                        { Pages_DT.Name }
                    </Dropdown.Item>                    
                )          
            })         
        }
    }
    render() {
        const headerClass = classNames('Header', {
            visible: this.props.initialized,
        })

        return (
            <header className={headerClass}>                 
                <div className="row align-items-center">
                    <div className="col-md-3 p-0">
                        <div className="header-left__controls">                          
                            <div className="header__back-circle">
                                <Link to='/'>
                                    <span>
                                        <FaLongArrowAltLeft />                                    
                                    </span>
                                </Link>
                            </div>                            
                            <div className="header__page">
                                <div className="dropdown">
                                    <Dropdown>
                                        <Dropdown.Toggle variant="success" id='dropdown_pages'>
                                            <span ref={this.dropdown} id='name_page'> home page</span>
                                            <FaAngleDown />
                                        </Dropdown.Toggle>
                                        <Dropdown.Menu>
                                            {this._PagesData()}                                        
                                        </Dropdown.Menu>
                                    </Dropdown>                                    
                                </div>
                            </div>
                            <div className="header__style">
                                <Link to='/setting'>
                                    <div className="header__style__shapre">
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                    {/* navbar for mobile */}
                    <div className="col-6 d-xs">
                        <span className="burger-menu" >
                            <FaBars />
                        </span>
                    </div>
                    {/* end navbar for mobile */}
                    <div className="col-md-9 col-6">
                        <div className="Header__controls">
                        <button className="Header__controls__save d-block">EN</button>
                        <button className="Header__controls__save">Reset </button>
                        <img className="Header__controls__reset" src={Reset} />
                        <button className="Header__controls__publish"> 
                        <img className="controls-publish--lg" src={Shuttl} /> 
                        Publish</button>
                        <img className="controls-publish--xs" src={ShuttlBlue} /> 
                    </div>
                    </div>
                
                </div>
         
            </header> 
        )
    }
}

const mapStateToProps = state => ({
    Pages: state.getPagesDropDown.pagesData, // All Page For Template Editor
})

export default connect(mapStateToProps)(Header)
