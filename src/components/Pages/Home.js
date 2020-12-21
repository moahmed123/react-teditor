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
// import SectionsAvailable from './../Sidebar/Section/sectionsAvailable/SectionsAvailable'
// LTR Direction
// import '../../css/main-ltr.css'; 
// RTL Direction
// import '../../css/main-rtl.css';

class Home extends Component {   
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
                            <div className='col-md-3 p-0'>                             
                                <div className="Home__sidebar Home__sidebar__HomePage">
                                    <div className="Home__sidebar__header">
                                        <Sidebar/>
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

// export default Home
const mapStateToProps = state => ({    
    getlanguages: state.getlanguages.GetLangs
})

export default connect(mapStateToProps)(Home)