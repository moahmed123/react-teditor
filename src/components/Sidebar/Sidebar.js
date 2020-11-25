import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import { FaTrashAlt, FaPlus } from "react-icons/fa";

import DragDrop from './Drag_Drop/DragDrop'
//LocalImage
import ArrowLeft from '../../assets/images/arrow-left.png';

import { app } from '../../actions'


class Sidebar extends Component {
    componentDidMount(){
        // this.dispatch.firstData()
        this.props.dispatch(app.firstData());        
    }
    _getData(){
        if(this.props.PageResions){
            return (
                <div>
                    <h3>Pages</h3>
                    <h6>{this.props.PageResions[0].CodeName}</h6>
                    <h6>{this.props.PageResions[1].CodeName}</h6>                                        
                    {/* <h5>{this.props.dataFA.data.Pages[0].CodeName}</h5>
                    <h5>{this.props.dataFA.data.Pages[1].CodeName}</h5>
                    <h5>{this.props.dataFA.data.Pages[2].CodeName}</h5>                     */}
                </div>
            )
        }else{
            return <h6> Loading data</h6>
        }
    }
    render() {
        return (            
            <>
                {/* sidebar section */}
                <div className="sidebar__header__section">
                    <h2>home page</h2>
                    <div className="label">
                        <Link to="/header">
                            <img src={ArrowLeft} />
                            <span>Header</span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="10.513" height="10.513" viewBox="0 0 10.513 10.513">
                                <g>
                                    <path d="M320.934 3.9L317.74.706a.308.308 0 0 1 0-.436.924.924 0 0 1 1.307 0l2.323 2.323a.924.924 0 0 1 0 1.307.308.308 0 0 1-.436 0z" transform="translate(-311.127)" />
                                    <g>
                                        <g>
                                            <path d="M.894 304.038a3.43 3.43 0 0 0-.882 1.521.308.308 0 0 0 .378.378 3.431 3.431 0 0 0 1.521-.882l2.41-2.41-1.021-1.017z" transform="translate(0 1.65) translate(0 4.543) translate(0 -301.628)" />
                                        </g>
                                        <path d="M105.395 127.115a2.827 2.827 0 0 0-1.5.786l-.357.357a.308.308 0 0 0 0 .436l4.065 4.065a.308.308 0 0 0 .436 0l.357-.357a2.842 2.842 0 0 0 .774-2.578l-2.7-2.7a2.83 2.83 0 0 0-1.077-.012z" transform="translate(0 1.65) translate(-101.322 -126.11)" />
                                        <g>
                                            <path d="M0 0h1.189v3.08H0z" transform="translate(0 1.65) translate(5.843) rotate(-45 1.015 .42)" />
                                        </g>
                                    </g>
                                </g>
                            </svg>

                        </Link>
                    </div>
                </div>
                <div className="sidebar__header__section">
                    <h2>Pages section</h2>  
                    <div>
                        {this._getData()}
                    </div>
                    {/* <DragDrop/>                   */}
                    <div className="label">
                        <a href="#">
                            <img src="../../assets/images/arrow-left.png" />
                            <span>slide show</span> <FaTrashAlt />
                        </a>
                    </div>
                    <div className="label">
                        <a href="#">
                            <img src="../../assets/images/arrow-left.png" />
                            <span>promoted product</span> <FaTrashAlt />
                        </a>
                    </div>
                    <div className="label">
                        <a href="#">
                            <img src="../../assets/images/arrow-left.png" />
                            <span>Min banner</span> <FaTrashAlt />
                        </a>
                    </div>
                    <button className="header__section--add"><FaPlus /> Add New Section</button>
                </div>
                <div className="sidebar__header__section">
                    <div className="label">
                        <Link to="/Footer">
                            <img src="../../assets/images/arrow-left.png" />
                            <span>footer</span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="10.513" height="10.513" viewBox="0 0 10.513 10.513">
                                <g>
                                    <path d="M320.934 3.9L317.74.706a.308.308 0 0 1 0-.436.924.924 0 0 1 1.307 0l2.323 2.323a.924.924 0 0 1 0 1.307.308.308 0 0 1-.436 0z" transform="translate(-311.127)" />
                                    <g>
                                        <g>
                                            <path d="M.894 304.038a3.43 3.43 0 0 0-.882 1.521.308.308 0 0 0 .378.378 3.431 3.431 0 0 0 1.521-.882l2.41-2.41-1.021-1.017z" transform="translate(0 1.65) translate(0 4.543) translate(0 -301.628)" />
                                        </g>
                                        <path d="M105.395 127.115a2.827 2.827 0 0 0-1.5.786l-.357.357a.308.308 0 0 0 0 .436l4.065 4.065a.308.308 0 0 0 .436 0l.357-.357a2.842 2.842 0 0 0 .774-2.578l-2.7-2.7a2.83 2.83 0 0 0-1.077-.012z" transform="translate(0 1.65) translate(-101.322 -126.11)" />
                                        <g>
                                            <path d="M0 0h1.189v3.08H0z" transform="translate(0 1.65) translate(5.843) rotate(-45 1.015 .42)" />
                                        </g>
                                    </g>
                                </g>
                            </svg>
                        </Link>
                    </div>
                </div>
            </>            
        )
    }
}

const mapStateToProps = state => ({
    initialized: state.app.initialized,
    dataFA: state.app.dataFirst,
    PageResions : state.slidebar.regions
})

export default connect(mapStateToProps)(Sidebar)
