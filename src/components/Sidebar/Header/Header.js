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
                <div className="sidebar__header__section Home__sidebar__header__page">    
                <div className="header__control">
                    <h2>
                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 320 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M143 352.3L7 216.3c-9.4-9.4-9.4-24.6 0-33.9l22.6-22.6c9.4-9.4 24.6-9.4 33.9 0l96.4 96.4 96.4-96.4c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9l-136 136c-9.2 9.4-24.4 9.4-33.8 0z"></path></svg>
                      <span>  {this.props.HeaderData.Name} </span>
                    </h2>
                </div>          
                    <div className="generic-sidebar__section__list">
                    {this.__HeaderData()}             
                    </div>    
                </div>                              
            </div> 
     
     )
    }
}

const mapStateToProps = state => ({
    initialized: state.app.initialized,
})

export default connect(mapStateToProps)(Header)
