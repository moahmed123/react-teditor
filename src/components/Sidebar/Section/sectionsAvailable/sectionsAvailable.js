import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, useParams , useLocation} from 'react-router-dom';
import { Form, Button, FormGroup, FormControl, ControlLabel, Dropdown, Accordion, Card } from "react-bootstrap";
// import '../../../css/Header-section.css';
import { GetSCFLD, ADDNESEC, INSERTSEC} from '../../../../actions';

import deleteMark from '../../../../assets/svg/delete.svg';


import SaveBtn from '../SaveBtn';
import Trash from '../../../../assets/svg/trash.svg';
import Promoted from '../../../../assets/svg/promoted-product.svg';


class SectionsAvailable extends Component {             
 
    constructor(props) {
        super(props);
        this.state = {}
    }
    componentDidMount = () =>{
        this.props.dispatch(ADDNESEC.addNewSection())
    }
    _renderAvailSec = () => {
        if(this.props.AvailableSections){
            return this.props.AvailableSections.data.Regions.map((regionsData, Key) => {
               return regionsData.AvailableSections.map((AvailSec, Key) => {
                    return (
                        <div className="label" key={Key} onClick= {()=>{
                            this.props.dispatch(INSERTSEC.insertSection(AvailSec.id))
                        }}>
                                <img className="label__icon" src={Promoted} />
                                <span> 
                                    {AvailSec.DescName}
                                </span>                                                             
                        </div>
                    )
                })
            })
        }
    }
    render() {                       
        return (
            <>                
                <div className="Home__sidebar__header">
                    <h4 className="setting--sidebar__header"> sections Available <span> home page </span></h4>
                    <div className="setting--sidebar__controls">
                        <div className="delete">
                            <img src={deleteMark} />
                        </div>                      
                    </div>
                    <div className="sidebar__header__section">
                        {this._renderAvailSec()}
                    </div>
                </div>                
            </>                
        )
    }
}

const mapStateToProps = state => ({
    initialized: state.app.initialized,
    sectionFieldsDT : state.sectionData.sectionFields,
    // updateSecFields : state.sectionData.updateSecFields,
    getlanguages: state.getlanguages.GetLangs,
    AvailableSections: state.addNewSection.Sections
})

export default connect(mapStateToProps)(SectionsAvailable)
