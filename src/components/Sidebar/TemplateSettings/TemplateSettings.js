import React, { Component } from 'react';
import { Link } from 'react-router-dom';
//sort Section 
import trash from '../../../assets/svg/trash.svg';
import { REMSEC, REODSEC } from '../../../actions';
import PathsApp from './../../../actions/Api_paths';
import { connect } from 'react-redux';


// import HeaderData from '../../Sidebar/Header/Header';
import Modal from "react-bootstrap/Modal";
import { Button } from 'react-bootstrap';

// import Controls from './Test/Controls'
//Image Local
import check from '../../../assets/svg/check-mark.svg';
import deleteMark from '../../../assets/svg/delete.svg';
import { SketchPicker } from 'react-color';

class TemplateSettings extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
            displayColorPicker: false,
            background: null,
            color: null
        };
    }
    
      handleClick = () => {
        this.setState({ displayColorPicker: !this.state.displayColorPicker })
        document.querySelector('body').classList.add('hidden');
        document.querySelector('.Home__sidebar').classList.add('hidden');
      };
      handleClose = () => { 
        this.setState({ displayColorPicker: false })
        document.querySelector('body').classList.remove('hidden');
        document.querySelector('.Home__sidebar').classList.remove('hidden');
      };
    openModal = () => this.setState({ isOpen: true });
    closeModal = () => this.setState({ isOpen: false });

      handleChangeColor = (color) =>{
          document.getElementById('color-info').innerHTML = color.hex;
          document.getElementById('circle-color').style.background = color.hex;
      }
    componentDidMount() { }
    render() {
        const popover = {
            position: 'absolute',
            zIndex: '2',
          }
          const cover = {
            position: 'fixed',
            top: '0px',
            right: '0px',
            bottom: '0px',
            left: '0px',
          }
        return (            
            <div className='col-md-3 p-0 position-static'>
                    <div className="Home__sidebar setting--sidebar">
                        <div className="Home__sidebar__header">
                            <h4 className="setting--sidebar__header">  Main Theme </h4>

                            <div className="setting--sidebar__controls">
                                <div className="delete">
                                    <img src={deleteMark} />
                                </div>
                                <div className="check">
                                    <img src={check} />
                                </div>
                            </div>
                        </div>
                        <div className="setting--sidebar__color">
                            <h4 className="setting--sidebar__header"> color </h4>
                            <div className="sidebar__color__main">
                                <h5 className="color__main__caption">main color</h5>
                                <div className="color__main__content">
                                    <div>


                                        <div id="circle-color" onClick={this.handleClick} className="main__content__circle" style={{ background: '#093784' }}></div>
                                        {
                                            this.state.displayColorPicker ?
                                                <div style={popover}>
                                                    <div style={cover} onClick={this.handleClose} />
                                                    <SketchPicker onChange={this.handleChangeColor} />
                                                    {/* <SketchPicker onChangeComplete={ this.handleChangeComplete } /> */}
                                                </div>

                                                :
                                                null
                                        }
                                    </div>

                                    <div className="main__content__info">
                                        <p id="color-info"></p>
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

                                    <Button variant="outline-secondary" onClick={this.closeModal}>Cancel</Button>{' '}

                                    <Button variant="danger">Confirm</Button>

                                </Modal.Footer>
                            </Modal>
                        </>
                        {/* back modal Button */}
                    </div>
                </div>                          
        )
    }
}

const mapStateToProps = state => ({
    initialized: state.app.initialized,
    dataFA: state.app.dataFirst,
    PageResions: state.slidebar.regions
})

export default connect(mapStateToProps)(TemplateSettings)