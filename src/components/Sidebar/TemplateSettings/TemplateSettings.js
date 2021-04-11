import React, { Component } from 'react';
import { Link } from 'react-router-dom';
//sort Section 
import trash from '../../../assets/svg/trash.svg';
import { REMSEC, REODSEC, GETTMSET } from '../../../actions';
import PathsApp from './../../../actions/Api_paths';
import { connect } from 'react-redux';


// import HeaderData from '../../Sidebar/Header/Header';
import Modal from "react-bootstrap/Modal";
import { Button } from 'react-bootstrap';

// import Controls from './Test/Controls'
//Image Local
// import check from '../../../assets/svg/check-mark.svg';
import deleteMark from '../../../assets/svg/delete.svg';
import { SketchPicker } from 'react-color';
import LoaderSpinner from './../Spinner/LoaderSpinner';
import SettingsComponent from './SettingsComponent/SettingsComponent';
import SaveBtn from '../Section/SaveBtn';
import BackBtn from '../Section/BackBtn';
import localization from '../../../localization/localization';

class TemplateSettings extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
            displayColorPicker: false,
            background: null,
            color: null
        };
    }
    componentDidMount() {
        this.props.dispatch(GETTMSET.getTemplateSettings());
    }
    handleClick = () => {
        this.setState({ displayColorPicker: !this.state.displayColorPicker })
        document.querySelector('body').classList.add('hidden');
        document.querySelector('.Home__sidebar').classList.add('hidden');
    };
    handleClose = () => {
        this.setState({ displayColorPicker: false })
        document.querySelector('body').classList.remove('hidden');
        document.querySelector('.Home__sidebar').classList.remove('hidden');
    };
    openModal = () => this.setState({ isOpen: true });
    closeModal = () => this.setState({ isOpen: false });

    handleChangeColor = (color) => {
        document.getElementById('color-info').innerHTML = color.hex;
        document.getElementById('circle-color').style.background = color.hex;
    }
    _dataTemplateSetting = () => {
        const Template_Settings = this.props.templateSetting;
        if(Template_Settings){
            const  user_Regions =  Template_Settings.data.Settings.Regions; 
            
            if(this.props.getlanguages){                
                const activeLang = this.props.getlanguages.data.ActiveLanguage.code
                return user_Regions.map((RegData, key)=>{               
                    return RegData.UserSections.map((SecData, key)=>{
                     return <SettingsComponent Settingdata = {SecData} key = {key} langCode = {activeLang}/>                    
                    })            
                })                
            }   
        }else{
            return <LoaderSpinner/>
        }
    }
    render() {
        const popover = {
            position: 'absolute',
            zIndex: '2',
        }
        const cover = {
            position: 'fixed',
            top: '0px',
            right: '0px',
            bottom: '0px',
            left: '0px',
        }
       
        return (
            <div className='col-md-3 p-0 sidebar__section section--static'>
                <div className="Home__sidebar Home__abs setting--sidebar section--page setting--page home-sidebar--active">
                    <div className="Home__sidebar__header header--controls">

                    <div className="setting--sidebar__controls">  
                            <BackBtn BackCom = {null}/>
                    </div>
                        <h4 className="setting--sidebar__header">  {localization.MainTheme} </h4>
                        <div className="setting--sidebar__controls save">
                            <SaveBtn/>
                        </div>
                    </div>
                    {this._dataTemplateSetting()}
                    
                    {/* <div className="setting--sidebar__fonts">
                        <h4 className="setting--sidebar__header"> Fonts </h4>
                        <div className="sidebar__fonts__main">
                            <h5 className="fonts__main__caption">English</h5>
                            <div className="fonts__main__info">
                                <div className="main__info__font">
                                    <p>Aa</p>
                                    <span>Font name</span>
                                </div>
                                <div className="main__info__font">
                                    <p>Aa</p>
                                    <span>Font name</span>
                                </div>
                                <div className="main__info__font">
                                    <p>Aa</p>
                                    <span>Font name</span>
                                </div>
                            </div>
                            <h5 className="fonts__main__caption">arabic</h5>
                            <div className="fonts__main__info">
                                <div className="main__info__font">
                                    <p>خط عربي</p>
                                    <span>Font name</span>
                                </div>
                                <div className="main__info__font">
                                    <p>خط عربي</p>
                                    <span>Font name</span>
                                </div>
                                <div className="main__info__font">
                                    <p>خط عربي</p>
                                    <span>Font name</span>
                                </div>
                            </div>
                        </div>
                    </div> */}                
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({        
    templateSetting: state.getTemplateSettings.TemplateSEVal,
    getlanguages: state.getlanguages.GetLangs
})

export default connect(mapStateToProps)(TemplateSettings)