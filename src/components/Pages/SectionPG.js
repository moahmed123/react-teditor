import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import { Container} from 'react-bootstrap';
import { FaTrashAlt , FaPlus} from "react-icons/fa";

// import '../../css/Home.css';

// Component
import Header from '../Header/Header';
import SectionData from '../Sidebar/Section/Section';
// import Controls from './Test/Controls'
//Image Local
import ArrowLeft from '../../assets/images/arrow-left.png';


class SectionPG extends Component {
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
                    <div className='row'>                    
                        <div className='col-md-3 p-0'>  
                            <div className="Home__sidebar">
                                <div className="Home__sidebar__header">                         
                                    <SectionData/>          
                                </div>
                            </div>                          
                        </div>
                        <div className='col-md-9'>                            
                            <iframe src='http://qaz123.expandcart.com/' className='iframe-site'></iframe>
                        </div>
                    </div>
                </Container>
            </section>            
        )
    }
}

export default SectionPG
