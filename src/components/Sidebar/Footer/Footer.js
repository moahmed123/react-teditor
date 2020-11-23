import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Form, Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import '../../../css/Header-section.css';



class Footer extends Component {
    render() {
        return (
            <div className="generic-sidebar__section"> 
            <div className="sidebar__header__section">
                <h2>Header</h2>
                <div className="label">
                    <a href="#">
                        <span>slide show</span> 
                        <Form>
                        <Form.Check 
                            type="switch"
                            id="custom-switch"
                            label=""
                        />
                        </Form>
                    </a>
                </div>
                <div className="label">
                    <a href="#">
                        <span>promoted product</span> 
                        <span>slide show</span> 
                        <Form>
                        <Form.Check 
                            type="switch"
                            id="custom-switch"
                            label=""
                        />
                        </Form>
                    </a>
                </div>
                <div className="label">
                    <a href="#">
                        <span>Min banner</span> 
                        <span>slide show</span> 
                        <Form>
                        <Form.Check 
                            type="switch"
                            id="custom-switch"
                            label=""
                        />
                        </Form>
                    </a>
                </div>
            </div>
          
            <Link to ='section'> section </Link>
        </div> 
         )
    }
}

const mapStateToProps = state => ({
    initialized: state.app.initialized,
})

export default connect(mapStateToProps)(Footer)
