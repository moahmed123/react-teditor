import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';




class Footer extends Component {
    render() {
        return (
            <div>Footer</div>
        )
    }
}

const mapStateToProps = state => ({
    initialized: state.app.initialized,
})

export default connect(mapStateToProps)(Footer)
