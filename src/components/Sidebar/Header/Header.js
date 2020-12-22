import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Form } from "react-bootstrap";
import { UPDSECST, GetSCFLD, ROUTECOM} from '../../../actions'
import PathsApp from '../../../actions/Api_paths';

class Header extends Component {
    constructor(props) {
        super(props);   
        this._handleChangeSwitch = this._handleChangeSwitch.bind(this);     
    }
    _handleChangeSwitch(e){      
        let SectionId = e.target.id.replace('switch_id_', ''),
            State = e.target.checked ? 'enabled' : "disabled";
        this.props.dispatch(UPDSECST.UpdateSectionState(SectionId, State))        
    }
    __HeaderData(){
        if(this.props.HeaderData){
            return this.props.HeaderData.UserSections.map((data, key)=>{
                return(
                    <div className="label header--label" key={key} >
                        {/* <Link to={`${PathsApp.Paths}section/${data.id}/header`}>
                            <span>{data.DescName}</span>                                                                                                                                      
                        </Link>  */}
                        <div className = 'Header_Box_Section' onClick={()=>{
                                this.props.dispatch(GetSCFLD.getSectionFields(null, data.id));
                                this.props.dispatch(ROUTECOM.routeComponent('SectionPG', 'HeaderPG'));
                            }}>
                            <span>{data.DescName}</span> 
                        </div>
                        <Form>
                            <Form.Check
                                type="switch"
                                id={`switch_id_${data.id}`}
                                defaultChecked={data.State == 'enabled' ? " checked " : null}
                                onChange={this._handleChangeSwitch}
                            />
                        </Form>                                         
                    </div>
                )
            })            
        }
    }    
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
