import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import { FaTrashAlt, FaPlus } from "react-icons/fa";



class Header extends Component {
    render() {
        return (
            <div> 
                Slider Header
                <Link to ='section'> section </Link>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    initialized: state.app.initialized,
})

export default connect(mapStateToProps)(Header)
