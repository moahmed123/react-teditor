import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import classNames from 'classnames'
import { Container } from 'react-bootstrap'
import { FaEdit } from "react-icons/fa";

import '../css/Home.css'

// Component
import Header from './Header/Header'
import Controls from './Test/Controls'


class Home extends Component {
    render() {
        const homeClass = classNames('Home', {})

        return (
            <section className={homeClass}>
                <Container fluid>                    
                    <Header />
                    <div className='row'>                    
                        <div className='col-md-3'>
                            <FaEdit />
                            <Controls />  
                        </div>
                        <div className='col-md-9'>                            
                            <iframe src='http://qaz123.expandcart.com/' className='iframe-site'></iframe>
                        </div>
                    </div>
                    <h2>Home component</h2>                                      
                </Container>
            </section>            
        )
    }
}

export default Home
