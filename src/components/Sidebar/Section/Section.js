import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, useParams , useLocation} from 'react-router-dom';
import { Form, Button, FormGroup, FormControl, ControlLabel, Dropdown, Accordion, Card } from "react-bootstrap";
// import '../../../css/Header-section.css';
import { GetSCFLD } from '../../../actions';

class Section extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount(){
        // let { parameter1, parameter2 } = useParams();
        // // const { parameter1, parameter2 } = this.props.match.params;
        // console.log(parameter1, parameter2 ) 
        
        // console.log(window.location.pathname)       
        this.props.dispatch(GetSCFLD.getSectionFields())   
    }
   
    render() {
        return (
            <div className="generic-sidebar__section section--page">

                <div className="sidebar__header__section">
                    <h2>small title</h2>
                    <div className="label generic--section">
                        <input className="generic--section__form" type="text" />
                        <span className="focus-border"></span>
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
                        <span className="focus-border"></span>
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
                <Link to='section'> section </Link>
            </div>

        )
    }
}

const mapStateToProps = state => ({
    initialized: state.app.initialized,
})

export default connect(mapStateToProps)(Section)
