import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import { Container} from 'react-bootstrap';
import { FaTrashAlt , FaPlus} from "react-icons/fa";
import { connect } from 'react-redux';
import {GETLANGS} from '../../actions'
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

// - LoaderSpinner
import LoaderSpinner from '../Sidebar/Spinner/LoaderSpinner';

class Home extends Component {       
    _routeComponent = () => {
        const {routeComponent} = this.props;       
        switch(routeComponent) {
            case 'sectionsAvailable':
              return (
                <div className='col-md-3 p-0 position-static'>                             
                    <div className="Home__sidebar setting--sidebar section--page">
                        <div className="Home__sidebar__header flex-column">                                    
                            <SectionsAvailable/>
                        </div>                                                          
                    </div>                          
                </div> 
              )            
            case 'SectionPG':
              return (
                <div className='col-md-3 p-0 position-static'>                            
                    <div className="Home__sidebar setting--sidebar section--page ">
                        <SectionData/>
                    </div>
                </div>
            )
            case 'HeaderPG':
                return (
                    <div className='col-md-3 p-0'>  
                        <div className="Home__sidebar">
                            <div className="Home__sidebar__header">
                                {
                                    (this.props.UserSections)?                                      
                                        <HeaderData HeaderData = {this.props.UserSections}/>
                                    :
                                       <LoaderSpinner/>                                    
                                }
                            </div>
                        </div>                          
                    </div>
              )
            default:
                return(
                    <div className='col-md-3 p-0'>                             
                        <div className="Home__sidebar Home__sidebar__HomePage">
                            <div className="Home__sidebar__header"> <Sidebar/> </div>                                        
                        </div>                          
                    </div>
                )
          }
    }
    render() {
        if(this.props.UserSections){
            console.log("---------------------", this.props.UserSections)
        }
        const homeClass = classNames('Home', {});       
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
                            <div className='col-md-9'>   
                                <IframePrev/>                            
                            </div>
                        </div>
                    </Container> 
                </section>            
        )       
    }
}

// export default Home
const mapStateToProps = state => ({    
    getlanguages: state.getlanguages.GetLangs,
    routeComponent: state.getlanguages.routeCom,
    UserSections : state.slidebar.UserSections
})

export default connect(mapStateToProps)(Home)