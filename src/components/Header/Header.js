import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import classNames from 'classnames'
import { FaCheck ,FaRocket ,FaAngleDown} from "react-icons/fa";
import { FaLongArrowAltLeft } from "react-icons/fa";

import '../../css/Header.css'

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
                                <span>
                                    <FaLongArrowAltLeft />
                                    {/* <img src="../../assets/images/arrow-left.png" /> */}
                                </span>
                            </div>
                            <div className="header__page">
                                <div class="dropdown">
                                    <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Home page
                                    <FaAngleDown />
                                    </button>
                                    <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                        <a class="dropdown-item" href="#">Action</a>
                                        <a class="dropdown-item" href="#">Another action</a>
                                        <a class="dropdown-item" href="#">Something else here</a>
                                    </div>
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
