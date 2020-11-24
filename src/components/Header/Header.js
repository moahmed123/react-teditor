import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import classNames from 'classnames';
import { Dropdown} from 'react-bootstrap';
import { FaCheck ,FaRocket ,FaAngleDown} from "react-icons/fa";
import { FaLongArrowAltLeft } from "react-icons/fa";

// import '../../css/Header.css'

class Header extends Component {
    render() {
        const headerClass = classNames('Header', {
            visible: this.props.initialized,
        })

        return (
            <header className={headerClass}> 
                {/* <Link to="/">back</Link> */}
                <div className="row align-items-center">
                    <div className="col-md-3 p-0">
                        <div className="header-left__controls">                          
                            <div className="header__back-circle">
                                <Link to='/'>
                                    <span>
                                        <FaLongArrowAltLeft />                                    
                                    </span>
                                </Link>
                            </div>                            
                            <div className="header__page">
                                <div class="dropdown">
                                    <Dropdown>
                                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                                            Home page
                                            <FaAngleDown />
                                        </Dropdown.Toggle>

                                        <Dropdown.Menu>
                                            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>                                    
                                </div>
                            </div>
                            <div className="header__style">
                                <div className="header__style__shapre">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-9">
                <div className="Header__controls">
                    <button className="Header__controls__save"><FaCheck className="save" /> Save </button>
                    <button className="Header__controls__publish"> <FaRocket className="publish" />Publish</button>
                </div>
                    </div>
                </div>
         
            </header> 
        )
    }
}

const mapStateToProps = state => ({
    initialized: state.app.initialized,
})

export default connect(mapStateToProps)(Header)
