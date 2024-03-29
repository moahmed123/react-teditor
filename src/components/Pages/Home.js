import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import { Container, Button } from 'react-bootstrap';
import { FaTrashAlt, FaPlus } from "react-icons/fa";
import { connect } from 'react-redux';
import { GETLANGS, RESDRAFVER, SETLANG } from '../../actions'
// import '../../css/Home.css';

// Component
import Header from '../Header/Header';
import Sidebar from '../Sidebar/Sidebar';
import IframePrev from '../Iframe/IframePrev';
// import Controls from './Test/Controls'
//Image Local
import ArrowLeft from '../../assets/images/arrow-left.png';

// Transformation Pages TO Component: 
import SectionsAvailable from '../Sidebar/Section/sectionsAvailable/sectionsAvailable';
import SectionData from '../Sidebar/Section/Section';
import HeaderData from '../Sidebar/Header/Header';
import FooterData from '../Sidebar/Footer/Footer';
import TemplateSettings from '../Sidebar/TemplateSettings/TemplateSettings';
import Reset from '../../assets/svg/reset.svg';

// - LoaderSpinner
import LoaderSpinner from '../Sidebar/Spinner/LoaderSpinner';
import localization from '../../localization/localization';
import ImgBanner from '../../assets/images/conversion_banner_gift.webp';
import backgroundBanner from '../../assets/images/conversion_banner_bg.webp';

class Home extends Component {
    _routeComponent = () => {
        let ActiveLanguage;
        if (this.props.getlanguages) {
            ActiveLanguage = this.props.getlanguages.data.ActiveLanguage.code;
            localization.setLanguage(ActiveLanguage);
        }
        const { routeComponent } = this.props;
        switch (routeComponent) {
            case 'sectionsAvailable':
                return (
                    <div className='col-md-3 p-0 sidebar__section'>
                        <div className="Home__sidebar  Home__abs setting--sidebar add--page home-sidebar--active">
                            <div className="Home__sidebar__header flex-column">
                                <SectionsAvailable />
                            </div>
                        </div>
                    </div>
                )
            case 'SectionPG':
                return (

                    <div className='col-md-3 p-0 sidebar__section section--static'>
                        <div className="Home__sidebar Home__abs setting--sidebar section--page home-sidebar--active">
                            <SectionData />
                        </div>
                    </div>
                )
            case 'HeaderPG':
                return (
                    <div className='col-md-3 p-0 sidebar__section'>
                        <div className="Home__sidebar Home__sidebar__HomePage home-sidebar--active">
                            <div className="Home__sidebar__header">
                                {
                                    (this.props.UserSections) ?
                                        <HeaderData HeaderData={this.props.UserSections} />
                                        :
                                        <LoaderSpinner />
                                }
                            </div>
                        </div>
                    </div>
                )
            case 'FooterPG':
                return (
                    <div className='col-md-3 p-0 sidebar__section'>
                        <div className="Home__sidebar Home__sidebar__HomePage home-sidebar--active">
                            <div className="Home__sidebar__header">
                                {
                                    (this.props.FooterUserSections) ?
                                        <FooterData FooterData={this.props.FooterUserSections} />
                                        :
                                        <LoaderSpinner />
                                }
                            </div>
                        </div>
                    </div>
                )
            case 'SettingPG':
                return <TemplateSettings />
            default:
                return (
                    <div className='col-md-3 p-0 sidebar__section'>
                        <div className="Home__sidebar Home__sidebar__HomePage">
                            <div className="Home__sidebar__header"> <Sidebar />
                                <div className="mobile-control__reset__exit">
                                    <button onClick={
                                        () => {
                                            let URL = document.location.origin,
                                                AdminPath = '/admin/setting/template';
                                            window.location.href = URL + AdminPath;
                                        }}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="15.728" height="15.676" viewBox="0 0 15.728 15.676"><g id="Group_7170" data-name="Group 7170" transform="translate(-21 -19)"><g id="Group_7140" data-name="Group 7140" transform="translate(28.237 19)"><g id="Group_7139" data-name="Group 7139"><path id="Path_11501" data-name="Path 11501" d="M.653,15.219H6.532a.653.653,0,0,0,.653-.653V2.809a.653.653,0,0,0-.653-.653H.653A.653.653,0,0,1,.653.85H6.532A1.962,1.962,0,0,1,8.491,2.809V14.566a1.962,1.962,0,0,1-1.959,1.959H.653a.653.653,0,1,1,0-1.306Z" transform="translate(0 -0.85)" fill="#a2a6b7"></path></g></g><g id="Group_7142" data-name="Group 7142" transform="translate(21 22.266)"><g id="Group_7141" data-name="Group 7141"><path id="Path_11502" data-name="Path 11502" d="M170.295,111.272l3.971-3.919a.653.653,0,1,1,.917.93l-2.838,2.8h7.6a.653.653,0,0,1,0,1.306h-7.6l2.838,2.8a.653.653,0,1,1-.917.93l-3.971-3.919a.653.653,0,0,1,0-.93Z" transform="translate(-170.1 -107.165)" fill="#a2a6b7"></path></g></g></g></svg>
                                        {localization.Exiteditor}
                                    </button>
                                    <button onClick={() => {
                                        // reset Dreft Version Changes For Fields :
                                        // this.props.dispatch(RESDRAFVER.resetDraftVersion());
                                        // TODO: revoke this Click 
                                        document.querySelector('.Header__controls__save.reset_tm').click()
                                    }} >
                                        <img src={Reset} />
                                        {localization.Reset}
                                    </button>
                                    <button className="language-btn" onClick={() => {
                                        // set Language:                                
                                        ActiveLanguage == "en" ?
                                            this.props.dispatch(SETLANG.setLanguage('ar'))
                                            :
                                            this.props.dispatch(SETLANG.setLanguage('en'))
                                    }}>
                                        {localization.Lang}
                                    </button>
                                </div>
                                <div className="mobile-control__reset__exit">
                                    <button className="Header__controls__save d-block full-width-btn" onClick={() => {
                                        // Switch To Old Editor 
                                        document.location.href = document.location.origin + '/admin/teditor/teditor#/';

                                    }}>
                                        {localization.OldEditor}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                )
        }
    }
    render() {
        if (this.props.UserSections) {
            console.log(this.props.UserSections)
        }       
        const homeClass = classNames('Home', {});
        const {currentPlan} = this.props;
        return (
            <section className={homeClass}>
                <Container fluid className="no-gutters p-0">
                    <div className="row no-gutters">
                        <div className="col-md-12">
                            <Header />
                        </div>
                    </div>
                    <div className='row no-gutters'>
                        {this._routeComponent()}
                        <div className='col-md-9 body__section'>
                            {/* Start Banner  */}
                            {
                                currentPlan ? 
                                    currentPlan == 6 || currentPlan == 8 ?                                        
                                        <div className="conversion-banners">                                                                                        
                                            <div className="conversion-banner" style={{backgroundImage: `url(${backgroundBanner})`}} >
                                                <div className="left">
                                                    <div className="img">
                                                        <img src={ImgBanner} alt="Banner_Image"/>
                                                    </div>
                                                    <p className="desc">
                                                        {currentPlan == 8 ? localization.EnterpriseParagraph : null}
                                                        {currentPlan == 6 ? localization.UltimateParagraph : null}
                                                    </p>
                                                </div>
                                                <div className="right">                                              
                                                    <Button className="theme-btn rounded-primary-btn" onClick={()=>{
                                                        document.location.href = document.location.origin + '/admin/account/charge';
                                                    }}>
                                                        {localization.btnUpgrade}
                                                    </Button>
                                                </div>
                                            </div>
                                        </div>
                                    :
                                        null
                                : 
                                    null
                            }                           
                            {/* End Banner  */}
                            <IframePrev />
                        </div>
                    </div>
                </Container >
            </section >
        )
    }
}

// export default Home
const mapStateToProps = state => ({
    getlanguages: state.getlanguages.GetLangs,
    routeComponent: state.getlanguages.routeCom,
    UserSections: state.slidebar.UserSections,
    FooterUserSections: state.slidebar.FooterUserSections,
    currentPlan: state.currentPlan.UserCurrentPlan
})

export default connect(mapStateToProps)(Home)