import React, { Component,useState } from 'react';
// import { Link } from 'react-router-dom';
import classNames from 'classnames';
import { Container} from 'react-bootstrap';
// import { FaTrashAlt , FaPlus} from "react-icons/fa";


// Component
import Header from '../Header/Header';
import HeaderData from '../Sidebar/Header/Header';
import Modal from "react-bootstrap/Modal";
import { Button } from 'react-bootstrap';

// import Controls from './Test/Controls'
//Image Local
import check from '../../assets/svg/check-mark.svg';
import deleteMark from '../../assets/svg/delete.svg';

class SettingStylePG extends Component {
 
            state = {
                isOpen: false
              };
              openModal = () => this.setState({ isOpen: true });
  closeModal = () => this.setState({ isOpen: false });

    render() {
        const homeClass = classNames('Home', {});

        return (
            <section className={homeClass}>
                <Container fluid className="no-gutters p-0">  
                    <div className="row no-gutters">
                        <div className="col-md-12">
                            <Header /> 
                        </div>
                    </div>
                    <div className='row no-gutters'>                    
                        <div className='col-md-3 p-0 position-static'>  
                            <div className="Home__sidebar setting--sidebar">
                                <div className="Home__sidebar__header">                         
                                      <h4 className="setting--sidebar__header">  Main Theme </h4> 
    
                                    <div className="setting--sidebar__controls">
                                        <div className="delete">
                                            <img  src={deleteMark} />
                                        </div>
                                        <div  className="check"> 
                                            <img src={check} />
                                        </div>
                                    </div>   
                                </div>
                                <div className="setting--sidebar__color">
                                    <h4 className="setting--sidebar__header"> color </h4> 
                                    <div className="sidebar__color__main">
                                        <h5 className="color__main__caption">main color</h5>
                                        <div className="color__main__content">
                                            <div className="main__content__circle" style={{background: '#093784'}}></div>
                                            <div className="main__content__info">
                                                <p>#4c4c51</p>
                                            </div>
                                        </div>
 
                                    </div>
                                </div>
                                <div className="setting--sidebar__fonts">
                                    <h4 className="setting--sidebar__header"> Fonts </h4>
                                    <div className="sidebar__fonts__main">
                                        <h5 className="fonts__main__caption">English</h5>
                                        <div className="fonts__main__info">
                                            <div className="main__info__font">
                                                    <p>Aa</p>
                                                    <span>Font name</span>
                                            </div>
                                            <div className="main__info__font">
                                                    <p>Aa</p>
                                                    <span>Font name</span>
                                            </div>
                                            <div className="main__info__font">
                                                    <p>Aa</p>
                                                    <span>Font name</span>
                                            </div>
                                        </div>
                                        <h5 className="fonts__main__caption">arabic</h5>
                                        <div className="fonts__main__info">
                                            <div className="main__info__font">
                                                    <p>خط عربي</p>
                                                    <span>Font name</span>
                                            </div>
                                            <div className="main__info__font">
                                                    <p>خط عربي</p>
                                                    <span>Font name</span>
                                            </div>
                                            <div className="main__info__font">
                                                    <p>خط عربي</p>
                                                    <span>Font name</span>
                                            </div>
                                        </div>
                                    </div> 
                                </div>
                         
                    {/* back modal Button */}
                    <>
                        <div className="d-flex align-items-center justify-content-center">
                        <Button variant="primary" onClick={this.openModal}>
                            Launch demo modal
                        </Button>
                        </div>
                        <Modal centered className="generic-alert" show={this.state.isOpen} onHide={this.closeModal} backdrop="static">
                        <Modal.Header>
                            <Modal.Title>You will missed your update</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</Modal.Body>
                        <Modal.Footer>
                      
                            <Button variant="outline-secondary"  onClick={this.closeModal}>Cancel</Button>{' '}

                            <Button variant="danger">Confirm</Button>

                        </Modal.Footer>
                        </Modal>
                    </>
                            </div>                          
                        </div>
                        <div className='col-md-9'>  
                            <div className="main-frame">
                                <iframe src='http://qaz123.expandcart.com/' className='iframe-site'></iframe>
                            </div>                          
                        </div>
                    </div>
                </Container>
            </section>    
            
            
            
        )
    }
    
}
export default SettingStylePG