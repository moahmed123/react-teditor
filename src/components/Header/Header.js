import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import classNames from 'classnames';
import { Dropdown, Spinner, Alert, Button, Modal } from 'react-bootstrap';
import { FaCheck, FaRocket, FaAngleDown, FaBars, FaHome} from "react-icons/fa";
import { FaLongArrowAltLeft } from "react-icons/fa";

import { app, PUBLISH, RESDRAFVER, SETLANG, NOTIFICATION, ROUTECOM } from './../../actions';
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
            PublishLoading: false,
            DropDownFristOPen: false 
        }
        // create a ref to store the dropdown DOM element
        this.dropdown = React.createRef();
        // this._PagesData = this._PagesData.bind(this);
    }
    componentDidMount() {
        this.props.dispatch(app.getDropdownPages()); // Dispatch Data For Pages;    
        //open menu in mobile
        // var menu, sideBar, body;
        // menu = document.querySelector('.burger-menu');
        // sideBar = document.querySelector('.Home__sidebar');
        // function toggleSideBar() {            
        //     menu.addEventListener('click', function () {
        //         sideBar.classList.toggle('home-sidebar--active');
        //         menu.classList.toggle('close--icon');
        //     });
        // }
        
        // toggleSideBar();       
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
                                // if(key == 0){ this.props.dispatch(app.RefreshData())}
                                // console.log("Pages_DT", key, Pages_DT)
                                this.props.dispatch(app.reloadRegionsOfPages(Pages_DT));
                                this.dropdown.current.innerHTML = Pages_DT.Name; // Replace Name By Active Pages
                                // To Remove All Active Form Dropdown  
                                for (let i = 0; i < event.target.parentElement.children.length; i++) {
                                    event.target.parentElement.children[i].classList.remove("active")
                                }
                                // Active Event Click
                                event.target.classList.add('active');
                                //get first URL For Iframe 
                                let Link_Iframe_Store =  localStorage.getItem('Link_Iframe_Store')
                                //set URL Iframe
                                let iframe = document.getElementsByClassName('iframe-site');
                                if(iframe[0].src != Link_Iframe_Store ){
                                    iframe[0].src = Link_Iframe_Store // Result Reload it.
                                }                                
                                
                            }}>

                        { Pages_DT.Name}
                    </Dropdown.Item>
                )
            })
        }
    }
    _webPagesData(){
        if(this.props.webPages){  
                      
            return this.props.webPages.map((result, key) => {
                console.log(result);
                return (
                    // Onclick Fun : Send Web Pages Data Related User Pages added.
                    <Dropdown.Item
                        // className={key == 0 ? 'active' : null} // To Active First Page 
                        key={key}
                        onClick={
                            () => {
                                //Coding 
                                let iframe = document.getElementsByClassName('iframe-site');
                                iframe[0].src = result.prview // Result Reload it.
                            }
                        }>

                        { result.title}
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
                    <div className="col-md-3 sidebar__section">
                        <div className="header-left__controls d-xs--none">
                            <div className="header__back-circle">
                                <button onClick = {()=>{                                    
                                    /*
                                    ** User_Save_fields : if false User Still not Changes any fields                                    
                                    */
                                   let User_Save_Fields = localStorage.getItem('User_Save_Fields');
                                   if(User_Save_Fields == "true"){
                                        //show Popups       
                                        console.log(this.props.routeComponent)                                                                         
                                        let pathNameCom = this.props.routeComponent;
                                        if(pathNameCom == 'HeaderPG' || pathNameCom == 'FooterrPG'){
                                            this.props.dispatch(ROUTECOM.routeComponent(null));
                                        }else{
                                            this.openModal();
                                        }
                                   }else{ 
                                       console.log('hide Popups');
                                       if(this.props.routeComponent){
                                            this.props.dispatch(ROUTECOM.routeComponent(null)) // redirect To Home Page       
                                       }else{
                                            // back For History:         
                                            // window.history.back();
                                            // console.log('back To Admin ')
                                            this.openModal();
                                       }                                        
                                   }
                                }}>
                                    {
                                        this.props.routeComponent ? 
                                            <span>                                        
                                                <svg className="back" xmlns="http://www.w3.org/2000/svg" width="15.728" height="15.676" viewBox="0 0 15.728 15.676">
                                                    <g id="Group_7170" data-name="Group 7170" transform="translate(-21 -19)">
                                                        <g id="Group_7140" data-name="Group 7140" transform="translate(28.237 19)">
                                                        <g id="Group_7139" data-name="Group 7139">
                                                            <path id="Path_11501" data-name="Path 11501" d="M.653,15.219H6.532a.653.653,0,0,0,.653-.653V2.809a.653.653,0,0,0-.653-.653H.653A.653.653,0,0,1,.653.85H6.532A1.962,1.962,0,0,1,8.491,2.809V14.566a1.962,1.962,0,0,1-1.959,1.959H.653a.653.653,0,1,1,0-1.306Z" transform="translate(0 -0.85)" fill="#a2a6b7"/>
                                                        </g>
                                                        </g>
                                                        <g id="Group_7142" data-name="Group 7142" transform="translate(21 22.266)">
                                                        <g id="Group_7141" data-name="Group 7141">
                                                            <path id="Path_11502" data-name="Path 11502" d="M170.295,111.272l3.971-3.919a.653.653,0,1,1,.917.93l-2.838,2.8h7.6a.653.653,0,0,1,0,1.306h-7.6l2.838,2.8a.653.653,0,1,1-.917.93l-3.971-3.919a.653.653,0,0,1,0-.93Z" transform="translate(-170.1 -107.165)" fill="#a2a6b7"/>
                                                        </g>
                                                        </g>
                                                    </g>
                                                </svg>
                                            </span>
                                        :
                                            <span>
                                               <svg xmlns="http://www.w3.org/2000/svg" width="38" height="35" viewBox="0 0 38 35">
                                                    <g id="Group_7180" data-name="Group 7180" transform="translate(-14 -10)">
                                                        <g id="Group_7178" data-name="Group 7178">
                                                        <rect id="Rectangle_4843" data-name="Rectangle 4843" width="38" height="35" rx="3" transform="translate(14 10)" fill="#e0ddef" opacity="0.28"/>
                                                        </g>
                                                        <path id="Path_11524" data-name="Path 11524" d="M16.035,12.561a.774.774,0,0,0-.063-1.108L8.714,5.1a.9.9,0,0,0-1.18.014L.252,11.791A.77.77,0,0,0,.217,12.9l.183.19a.8.8,0,0,0,1.093.084l.544-.487v7.135a.792.792,0,0,0,.792.792H5.668a.792.792,0,0,0,.792-.792V14.828H10.08v4.992a.749.749,0,0,0,.744.792h3.008a.792.792,0,0,0,.792-.792V12.785l.336.295c.185.163.574.032.868-.292Z" transform="translate(24.937 15.167)" fill="#a2a6b7"/>
                                                    </g>
                                                </svg>
                                            </span>
                                    }
                                    
                                </button>                              
                            </div>
                         
                            <div className="header__page">
                                <div className="dropdown">
                                    <Dropdown onClick= {()=>{    
                                        
                                        if (this.state.DropDownFristOPen == false){
                                            this.setState({DropDownFristOPen: true})
                                            // Get Link For Store Code Iframe.
                                            let iframe = document.getElementsByClassName('iframe-site')[0].src;
                                            // Save The Frist Link For Store Iframe.
                                            localStorage.setItem('Link_Iframe_Store',iframe);                                    
                                        }                                                                                
                                    }}>
                                        <Dropdown.Toggle variant="success" id='dropdown_pages'>
                                            <span ref={this.dropdown} id='name_page'> {localization.HomePage}</span>
                                            <FaAngleDown />
                                        </Dropdown.Toggle>
                                        <Dropdown.Menu>
                                            {this._PagesData()}
                                            <Dropdown.Divider />
                                            <Dropdown.Header>{localization.internalPages}</Dropdown.Header>
                                            {this._webPagesData()}
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </div>
                            </div>
                            <div className="header__style">
                                <div onClick = {()=> this.props.dispatch(ROUTECOM.routeComponent('SettingPG'))}>
                                    <img src={styleShape} />
                                </div>
                                {/* <Link to={`${PathsApp.Paths}setting`}>
                                    <img src={styleShape} />
                                </Link> */}
                            </div>
                     
                            <button className="Header__controls__publish publish--mob d-block d-sm-none" onClick={() => {
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
                         
                        </div>
                    </div>
                    {/* navbar for mobile */}
                    <div className="col-md-6 col-12">
                        <div className="mobile__controls">
                            <div className="header-control__mobile header-left__controls">
                                <span className="burger-menu" onClick = {(e)=>{
                                        console.log('show')
                                        var menu, sideBar, Body;
                                         menu = document.querySelector('.burger-menu');
                                         // TODO : will revoke this code condation
                                        if(menu.classList.contains("close--icon")){                                                                                        
                                            sideBar = document.querySelector('.Home__sidebar');
                                            Body = document.querySelector('body');
                                            sideBar.classList.remove('home-sidebar--active');
                                            Body.classList.remove('home-sidebar--active');
                                            menu.classList.remove('close--icon');
                                        }else{
                                            sideBar = document.querySelector('.Home__sidebar');
                                            Body = document.querySelector('body');
                                            sideBar.classList.add('home-sidebar--active');
                                            // Body.classList.add('home-sidebar--active');
                                            menu.classList.add('close--icon');
                                        }
                                        
                                    }}>
                                    <FaBars className="bar" />
                                    <svg className="close--icon__delete" xmlns="http://www.w3.org/2000/svg" width="15.899" height="15.767" viewBox="0 0 15.899 15.767">
                                        <g>
                                            <path fill="#b9b9c5" stroke="#fff" d="M14.14 2.884L9.705 7.319l4.434 4.434a1.689 1.689 0 1 1-2.387 2.388L7.317 9.707l-4.435 4.435a1.689 1.689 0 0 1-2.387-2.389l4.434-4.434L.494 2.884A1.688 1.688 0 0 1 2.882.5l4.435 4.431L11.752.5a1.689 1.689 0 0 1 2.388 2.384z" transform="translate(.632 .632) translate(0 -.002)"/>
                                        </g>
                                    </svg>
                                </span>
                                <div className="header__page">
                                        <div className="dropdown">
                                            <Dropdown onClick= {()=>{    
                                                
                                                if (this.state.DropDownFristOPen == false){
                                                    this.setState({DropDownFristOPen: true})
                                                    // Get Link For Store Code Iframe.
                                                    let iframe = document.getElementsByClassName('iframe-site')[0].src;
                                                    // Save The Frist Link For Store Iframe.
                                                    localStorage.setItem('Link_Iframe_Store',iframe);                                    
                                                }                                                                                
                                            }}>
                                                <Dropdown.Toggle variant="success" id='dropdown_pages'>
                                                    <span ref={this.dropdown} id='name_page'> {localization.HomePage}</span>
                                                    <FaAngleDown />
                                                </Dropdown.Toggle>
                                                <Dropdown.Menu>
                                                    {this._PagesData()}
                                                    <Dropdown.Divider />
                                                    <Dropdown.Header>{localization.internalPages}</Dropdown.Header>
                                                    {this._webPagesData()}
                                                </Dropdown.Menu>
                                            </Dropdown>
                                        </div>
                                    </div>
                                    <div className="header__style">
                                        <div onClick = {()=> this.props.dispatch(ROUTECOM.routeComponent('SettingPG'))}>
                                            <img src={styleShape} />
                                        </div>
                                        {/* <Link to={`${PathsApp.Paths}setting`}>
                                            <img src={styleShape} />
                                        </Link> */}
                                    </div>
                            
                                    <button className="Header__controls__publish publish--mob d-block d-sm-none" onClick={() => {
                                        // Publish All Changes For Fields                            
                                        this.props.dispatch(PUBLISH.publishFieldsVals());
                                        this.setState({PublishLoading: true})

                                    }}>
                                        {
                                            !this.state.PublishLoading? 
                                                <><img className="controls-publish--lg" src={Shuttl} /></> 
                                            : 
                                                this.props.notification? 
                                                    <><img className="controls-publish--lg" src={Shuttl} /></> 
                                                    :
                                                    <Spinner animation="grow" size="sm" />
                                        }
                                    </button>
                                
                                </div>
                        </div>
                    </div>
                    {/* end navbar for mobile */}
                    <div className="col-md-9 col-6 body__section">
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
                            <div className="delete__modal">
                                <svg onClick={this.closeModal} xmlns="http://www.w3.org/2000/svg" id="close_3_" width="12.743" height="12.743" viewBox="0 0 12.743 12.743">
                                    <defs>
                                    
                                    </defs>
                                    <path id="Path_67" d="M12.417 10.674L2.43.687a1.114 1.114 0 0 0-1.577 0l-.526.526a1.115 1.115 0 0 0 0 1.577l9.987 9.987a1.115 1.115 0 0 0 1.577 0l.526-.526a1.114 1.114 0 0 0 0-1.577zm0 0" class="cls-1" transform="translate(0 -.36)"/>
                                    <path id="Path_68" d="M10.314.688L.327 10.675a1.115 1.115 0 0 0 0 1.577l.526.526a1.115 1.115 0 0 0 1.577 0l9.988-9.986a1.114 1.114 0 0 0 0-1.577l-.527-.526a1.115 1.115 0 0 0-1.577 0zm0 0" class="cls-1" transform="translate(0 -.362)"/>
                                </svg>                             
                            </div>
                    </Modal.Header>
                            <Modal.Body>{localization.PargPopup}</Modal.Body>
                    <Modal.Footer>
                        <Button variant="outline-secondary" onClick={this.closeModal}>{localization.Cancel}</Button>                                
                        {/* <Link to = {`/admin/`}> */}
                            <Button variant="danger" onClick={()=>{
                                document.location.href = document.location.origin + '/admin/';
                            }}>{localization.Confirm}</Button>
                        {/* </Link> */}
                    </Modal.Footer>
                </Modal>
            </header>
        )
    }
}

const mapStateToProps = state => ({
    Pages: state.getPagesDropDown.pagesData, // All Page For Template Editor
    getlanguages: state.getlanguages.GetLangs,
    notification: state.notification.result, // get notification When Save and publshed data
    routeComponent: state.getlanguages.routeCom, // To Use When Show Header, Footer Component and need TO Back 
    webPages: state.slidebar.webPages
})

export default connect(mapStateToProps)(Header)
