import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import { Container } from 'react-bootstrap';
import { Form, Button, FormGroup, FormControl, ControlLabel, Dropdown, Accordion, Card } from "react-bootstrap";

// import '../../css/Home.css';

// Component
import Header from '../Header/Header';
import SectionData from '../Sidebar/Section/Section';
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
                        <SectionData/>
                        <div className='col-md-9'>
                            <div className="main-frame">
                                <iframe src='http://qaz123.expandcart.com/' className='iframe-site'></iframe>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>
        )
    }
}

export default SectionPG
