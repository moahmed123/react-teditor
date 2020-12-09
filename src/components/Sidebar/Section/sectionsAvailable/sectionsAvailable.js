import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, useParams , useLocation} from 'react-router-dom';
import { Form, Button, FormGroup, FormControl, ControlLabel, Dropdown, Accordion, Card } from "react-bootstrap";
// import '../../../css/Header-section.css';
import { GetSCFLD } from '../../../../actions';

import deleteMark from '../../../../assets/svg/delete.svg';


import SaveBtn from '../SaveBtn';
import Trash from '../../../../assets/svg/trash.svg';
import Promoted from '../../../../assets/svg/promoted-product.svg';


class sectionsAvailable extends Component {             
 
    constructor(props) {
        super(props);
        this.state = {}
    }
           
    
    render() {               
        return (

            <>                
                <div className="Home__sidebar__header">
                    <h4 className="setting--sidebar__header"> sectionsAvailable <span>home page</span></h4>
                    <div className="setting--sidebar__controls">
                        <div className="delete">
                            <img src={deleteMark} />
                        </div>
                        {/* <Button className="check" onclick={()=> console.log('save')}>
                            <img src={check} />
                        </Button> */}
                        <SaveBtn/>
                    </div>
                    <div className="sidebar__header__section">
                        <div className="label">                    
                            <Link to = '#'>
                                        <img className="label__icon" src={Promoted} />
                                    <span> 
                                        promo Section 
                                    </span>                                 
                            </Link>
                        </div>
                        
                        <div className="label">                    
                        <Link to = '#'>
                                        <img className="label__icon" src={Promoted} />
                                    <span> 
                                        promo Section 
                                    </span>                                 
                            </Link>
                        </div>
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
    getlanguages: state.getlanguages.GetLangs
})

export default connect(mapStateToProps)(sectionsAvailable)
