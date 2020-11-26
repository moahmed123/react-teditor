import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
// import classNames from 'classnames';
// import { FaTrashAlt, FaPlus } from "react-icons/fa";
import { Form, Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import { Switch } from 'react-switch-input';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
          checked: true
        };
      }
    _handleChangeSwitch(e){  
        // const checked = e.target.checked;
        // console.log(checked);      
        // console.log(`switch_id_${e.target.name}`)
        // document.getElementsByTagName(`${e.target.name}`).checked = true
        // document.getElementsByTagName(`${e.target.name}`).checked = true
        // if(e.target.checked){
        //     document.getElementById(`${e.target.name}`).checked = true
        // }else{
        //     document.getElementById(`${e.target.name}`).checked = false
        // }        
        // e.preventDefault()
        // document.getElementById(`${e.target.name}`).checked = e.target.name
        // console.log(e.target.checked, e.target.name)
    }
    __HeaderData(){
        if(this.props.HeaderData){
            return this.props.HeaderData.UserSections.map((data, key)=>{
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
                                        label=""
                                        onChange={this._handleChangeSwitch}
                                    />
                                </Form>
                            : 
                                <Form>
                                    <Form.Check 
                                        type="switch"                                        
                                        id={`switch_id_${key}`}
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
    // handleChangeSwitch = e => {
    //     const checked = e.target.checked;
    //     console.log(checked)
    //     this.setState({checked});
    //   }
    render() {
        return (
            <div className="generic-sidebar__section"> 
                <div className="sidebar__header__section">              
                    <h2>{this.props.HeaderData.Name} </h2>
                    {this.__HeaderData()}                 
                </div>                              
            </div> 
     
     )
    }
}

const mapStateToProps = state => ({
    initialized: state.app.initialized,
})

export default connect(mapStateToProps)(Header)
