import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import classNames from 'classnames';
import { Dropdown, Spinner, Alert, Button, Modal } from 'react-bootstrap';
import { FaCheck, FaRocket, FaAngleDown, FaBars } from "react-icons/fa";
import { FaLongArrowAltLeft } from "react-icons/fa";

import { app, PUBLISH, RESDRAFVER, SETLANG, NOTIFICATION } from './../../actions';
import Shuttl from '../../assets/svg/shuttle.svg';
import Reset from '../../assets/svg/reset.svg';
import ShuttlBlue from '../../assets/svg/shuttle-blue.svg';
import styleShape from '../../assets/svg/style-shape.svg';
import PathsApp from '../../actions/Api_paths'
import localization from '../../localization/localization';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            PublishLoading: false 
        }
        // create a ref to store the dropdown DOM element
        this.dropdown = React.createRef();
        // this._PagesData = this._PagesData.bind(this);
    }
    componentDidMount() {
        this.props.dispatch(app.getDropdownPages()); // Dispatch Data For Pages;    
        //open menu in mobile
        var menu, sideBar, body;
        menu = document.querySelector('.burger-menu');
        sideBar = document.querySelector('.Home__sidebar');
        function toggleSideBar() {
            menu.addEventListener('click', function () {
                sideBar.classList.toggle('home-sidebar--active');
            });
        }
        toggleSideBar();

    }
    openModal = () => this.setState({ isOpen: true });
    closeModal = () => this.setState({ isOpen: false });
    _PagesData() {
        if (!this.props.Pages) {
            return <div>Loading 1 </div>
        } else {
            document.getElementById("name_page").innerHTML = this.props.Pages[0].Name; // Add First Name Page. 
            return this.props.Pages.map((Pages_DT, key) => {
                return (
                    // Onclick Fun : Send Regions Data Related This Page              
                    <Dropdown.Item
                        className={key == 0 ? 'active' : null} // To Active First Page 
                        key={key}
                        onClick={
                            (event) => {
                                this.props.dispatch(app.reloadRegionsOfPages(Pages_DT));
                                this.dropdown.current.innerHTML = Pages_DT.Name; // Replace Name By Active Pages
                                // To Remove All Active Form Dropdown  
                                for (let i = 0; i < event.target.parentElement.children.length; i++) {
                                    event.target.parentElement.children[i].classList.remove("active")
                                }
                                // Active Event Click
                                event.target.classList.add('active');
                            }}>

                        { Pages_DT.Name}
                    </Dropdown.Item>
                )
            })
        }
    }
    _notification = () => {
        if (this.props.notification) {
            const { status, Message, title, delay} = this.props.notification;
            if (delay){ setTimeout(()=> this.props.dispatch(NOTIFICATION.notification(null)), delay)}
            // if (status == 'success') { this.setState({PublishLoading: false})}
            return (
                <div className='container_notification'>
                    <Alert variant={status} 
                        onClose={() => {
                            this.props.dispatch(NOTIFICATION.notification(null));
                            this.setState({PublishLoading: false})
                        }}
                        dismissible>
                       { title ? <> <Alert.Heading>{title}</Alert.Heading> <hr/> </> : null}                        
                        <p className="mb-0">
                            {Message}
                        </p>
                    </Alert>
                </div>
            )
        }
    }
    render() {
        let ActiveLanguage;
        if (this.props.getlanguages) {
            ActiveLanguage = this.props.getlanguages.data.ActiveLanguage.code;
            localization.setLanguage(ActiveLanguage);
        }
        const headerClass = classNames('Header', {
            visible: this.props.initialized,
        })
        return (
            <header className={headerClass}>
                {this._notification()}
                <div className="row align-items-center">
                    <div className="col-md-3 p-0">
                        <div className="header-left__controls">
                            <div className="header__back-circle">
                                <button onClick = {()=>{                                    
                                    /*
                                    ** User_Save_fields : if false User Still not Changes any fields                                    
                                    */
                                   let User_Save_Fields = localStorage.getItem('User_Save_Fields');
                                   if(User_Save_Fields == "true"){
                                        //show Popups                                        
                                        let lengthPath = window.location.pathname.split('/').length; 
                                        let pathName = window.location.pathname.split('/')[lengthPath - 1];
                                        if(pathName == 'header' || pathName == 'footer'){
                                            window.history.back();
                                        }else{
                                            this.openModal();
                                        }
                                   }else{ 
                                       console.log('hide Popups');
                                        // back For History:         
                                        window.history.back();
                                   }
                                }}>
                                    <span>
                                        <FaLongArrowAltLeft />
                                    </span>
                                </button>
                                {/* <Link to={`${PathsApp.AdminPaths}`}>
                                    <span>
                                        <FaLongArrowAltLeft />
                                    </span>
                                </Link> */}
                            </div>
                            <div className="header__page">
                                <div className="dropdown">
                                    <Dropdown>
                                        <Dropdown.Toggle variant="success" id='dropdown_pages'>
                                            <span ref={this.dropdown} id='name_page'> {localization.HomePage}</span>
                                            <FaAngleDown />
                                        </Dropdown.Toggle>
                                        <Dropdown.Menu>
                                            {this._PagesData()}
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </div>
                            </div>
                            <div className="header__style">
                                <Link to={`${PathsApp.Paths}setting`}>
                                    <img src={styleShape} />
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
                            <button className="Header__controls__save d-block" onClick={() => {
                                // set Language:                                
                                ActiveLanguage == "en" ?
                                    this.props.dispatch(SETLANG.setLanguage('ar'))
                                    :
                                    this.props.dispatch(SETLANG.setLanguage('en'))
                            }}>
                                {localization.Lang}
                            </button>

                            <button className="Header__controls__save" onClick={() => {
                                // reset Dreft Version Changes For Fields :
                                this.props.dispatch(RESDRAFVER.resetDraftVersion());
                            }} > {localization.Reset} </button>
                            <img className="Header__controls__reset" src={Reset} />

                            <button className="Header__controls__publish" onClick={() => {
                                // Publish All Changes For Fields                            
                                this.props.dispatch(PUBLISH.publishFieldsVals());
                                this.setState({PublishLoading: true})

                            }}>
                                {
                                    !this.state.PublishLoading? 
                                        <><img className="controls-publish--lg" src={Shuttl} />{localization.Publish}</> 
                                    : 
                                        this.props.notification? 
                                            <><img className="controls-publish--lg" src={Shuttl} />{localization.Publish}</> 
                                            :
                                            <Spinner animation="grow" size="sm" />
                                }
                            </button>
                            {this.state.PublishLoading && this.props.notification? <img className="controls-publish--xs" src={ShuttlBlue} /> : null}                            
                        </div>
                    </div>
                </div>                
                <Modal centered className="generic-alert" show={this.state.isOpen} onHide={this.closeModal} backdrop="static">
                    <Modal.Header>
                            <Modal.Title>{localization.MessagePopup}</Modal.Title>
                    </Modal.Header>
                            <Modal.Body>{localization.PargPopup}</Modal.Body>
                    <Modal.Footer>
                        <Button variant="outline-secondary" onClick={this.closeModal}>{localization.Cancel}</Button>                                
                        <Link to = {`/admin`}>
                            <Button variant="danger">{localization.Confirm}</Button>
                        </Link>
                    </Modal.Footer>
                </Modal>
            </header>
        )
    }
}

const mapStateToProps = state => ({
    Pages: state.getPagesDropDown.pagesData, // All Page For Template Editor
    getlanguages: state.getlanguages.GetLangs,
    notification: state.notification.result // get notification When Save and publshed data
})

export default connect(mapStateToProps)(Header)
