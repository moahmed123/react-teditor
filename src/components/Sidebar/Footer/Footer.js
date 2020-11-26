import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Form, Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
// import '../../../css/Header-section.css';
import { Switch } from 'react-switch-input';


class Footer extends Component {
    //document.getElementById('custom-switch').checked = true
    _handleChangeSwitch(e){  
        document.getElementById(`${e.target.name}`).checked = false
        console.log(e.target.checked)
    }
    __FooterData(){
        if(this.props.FooterData){
            return this.props.FooterData.UserSections.map((data, key)=>{
                return(
                    <div className="label" key={key}>
                        <Link to="#">
                            <span>{data.DescName}</span>
                        </Link>
                        {/* {
                            data.State == "enabled"?                               
                                <input type='checkbox' name={`switch_id_${key}`} checked id={`switch_id_${key}`} onChange={this._handleChangeSwitch}/>
                            :                                
                                    <input type='checkbox' name={`switch_id_${key}`} id={`switch_id_${key}`} onChange={this._handleChangeSwitch}/>
                        }  */}
                        {/* {
                            data.State == "enabled"?                               
                                <Switch checked = {true} name={`switch_id_${key}`} onChange={this._handleChangeSwitch}/>
                            :                                
                                <Switch checked = {false} name={`switch_id_${key}`} onChange={this._handleChangeSwitch}/>
                        }   */}
                        {
                            data.State == 'enabled' ? 
                                <Form>
                                    <Form.Check 
                                        type="switch"
                                        checked = "checked"
                                        id={`switch_id_${key}`}
                                        name={`switch_id_${key}`}
                                        label=""
                                        onChange={this._handleChangeSwitch}
                                    />
                                </Form>
                            : 
                                <Form>
                                    <Form 
                                        type="switch"
                                        checked = "disable"
                                        id={`switch_id_${key}`}
                                        name={`switch_id_${key}`}
                                        label=""
                                        onChange={this._handleChangeSwitch}
                                    />
                                </Form>
                        }
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
