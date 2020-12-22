/**
 ** Deprecated This Page : Remove This route 
 **/

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import { Container} from 'react-bootstrap';
import { FaTrashAlt , FaPlus} from "react-icons/fa";

// import '../../css/Home.css';

// Component
import Header from '../Header/Header';
import Sidebar from '../Sidebar/Sidebar';
import IframePrev from '../Iframe/IframePrev';
// import Controls from './Test/Controls'
//Image Local
import ArrowLeft from '../../assets/images/arrow-left.png';
import SectionsAvailable from '../Sidebar/Section/sectionsAvailable/sectionsAvailable';


class AvailableSectionsPG extends Component {
    render() {
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
                        <div className='col-md-3 p-0 position-static'>                             
                            <div className="Home__sidebar setting--sidebar section--page">
                                <div className="Home__sidebar__header flex-column">                                    
                                    <SectionsAvailable/>
                                </div>                                                          
                            </div>                          
                        </div>
                        <div className='col-md-9'>   
                            <IframePrev/>                            
                        </div>
                    </div>
                </Container> 
            </section>            
        )
    }
}

export default AvailableSectionsPG
