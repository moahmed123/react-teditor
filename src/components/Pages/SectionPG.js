/**
 ** Deprecated This Page : Remove This route 
 **/
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import { Container } from 'react-bootstrap';
import { Form, Button, FormGroup, FormControl, ControlLabel, Dropdown, Accordion, Card } from "react-bootstrap";

// import '../../css/Home.css';

// Component
import Header from '../Header/Header';
import SectionData from '../Sidebar/Section/Section';
import IframeProv from '../Iframe/IframePrev';
// import Controls from './Test/Controls'
//Image Local

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
                        
                        <div className='col-md-3 p-0 position-static'>                            
                            <div className="Home__sidebar setting--sidebar section--page ">
                            <SectionData/>
                            </div>
                        </div>
                        <div className='col-md-9'>                            
                            <IframeProv/>                            
                        </div>
                    </div>
                </Container>
            </section>
        )
    }
}

export default SectionPG
