import React, { Component } from 'react';
import Spinner from 'react-bootstrap/Spinner';

class LoaderSpinner extends Component {    
    render() {       
        return (
            <div className="main-loader"> <Spinner animation="border" /></div>
        )
    }
}
export default LoaderSpinner;