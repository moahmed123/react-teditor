import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import classNames from 'classnames'
import '../../css/Header.css'

class Header extends Component {
    render() {
        const headerClass = classNames('Header', {
            visible: this.props.initialized,
        })

        return (
            <header className={headerClass}>
                {/* <Link to="/">back</Link> */}
                <h6 className='text-center'>Header</h6>             
            </header>
        )
    }
}

const mapStateToProps = state => ({
    initialized: state.app.initialized,
})

export default connect(mapStateToProps)(Header)
