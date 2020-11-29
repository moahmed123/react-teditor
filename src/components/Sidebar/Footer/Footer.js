import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Form, Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
// import '../../../css/Header-section.css';
import { Switch } from 'react-switch-input';


class Footer extends Component {
    //document.getElementById('custom-switch').checked = true
    _handleChangeSwitch(e){  
        // document.getElementById(`${e.target.name}`).checked = false
        // console.log(e.target.checked)
        console.log('action', e.target.id, e.target.checked )
    }
    __FooterData(){
        if(this.props.FooterData){
            return this.props.FooterData.UserSections.map((data, key)=>{
                return(
                    <div className="label" key={key}>
                        <a href="#">
                            <span>{data.DescName}</span>                     
                        {
                            data.State == 'enabled' ? 
                                <Form>
                                    <Form.Check 
                                        type="switch"                                        
                                        id={`switch_id_${key}`}
                                        checked="checked"                   
                                        // name={`switch_id_${key}`}
                                        label=""
                                        onChange={this._handleChangeSwitch}
                                    />
                                </Form>
                            : 
                                <Form>
                                    <Form.Check 
                                        type="switch"                                        
                                        id={`switch_id_${key}`}
                                        // name={`switch_id_${key}`}
                                        label=""
                                        onChange={this._handleChangeSwitch}
                                    />
                                </Form>
                        }
                           </a>
                    </div>                    
                )
            })            
        }
    }
    render() {
        return (
            <div className="generic-sidebar__section"> 
            <div className="sidebar__header__section">
                <h2>{this.props.FooterData.Name}</h2>
                {this.__FooterData()}  
                <div className="label">
                    <a href="#">
                        <span>promoted product</span>
                        <Form>
                            <Form.Check 
                                type="switch"
                                id="custom-switch"
                                label=""
                            />
                        </Form>
                    </a>
                </div>
               
            </div>
          
            <Link to ='section'> section </Link>
        </div> 
         )
    }
}

const mapStateToProps = state => ({
    initialized: state.app.initialized,
})

export default connect(mapStateToProps)(Footer)
