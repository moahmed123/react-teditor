import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Form, Button, FormGroup, FormControl, ControlLabel,Dropdown,Accordion,Card } from "react-bootstrap";
import '../../../css/Header-section.css';

class Section extends Component {
    render() {
        return (
            <div className="generic-sidebar__section section--page"> 

            <div className="sidebar__header__section">
                <h2>small title</h2>
                <div className="label generic--section">
                    <input className="generic--section__form" type="text" />
                    <span class="focus-border"></span>
                </div>
                <h2>product type</h2>
                <Dropdown>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                        Dropdown Button
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                <h2>text area </h2>

                <div className="label generic--section">
                <textarea className="generic--section__form"></textarea>
                    <span class="focus-border"></span>
                </div>

                <Accordion defaultActiveKey="0">
                    <Card>
                        <Card.Header>
                        <Accordion.Toggle as={Button} variant="link" eventKey="0">
                            Click me!
                        </Accordion.Toggle>
                        </Card.Header> 
                        <Accordion.Collapse eventKey="0">
                        <Card.Body>Hello! I'm the body</Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card>
                        <Card.Header>
                        <Accordion.Toggle as={Button} variant="link" eventKey="1">
                            Click me!
                        </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="1">
                        <Card.Body>Hello! I'm another body</Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    </Accordion>
            </div>
            <Link to ='section'> section </Link>
        </div> 
 
        )
    }
}

const mapStateToProps = state => ({
    initialized: state.app.initialized,
})

export default connect(mapStateToProps)(Section)
