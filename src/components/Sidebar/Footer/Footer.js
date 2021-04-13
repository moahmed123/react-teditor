import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Form } from "react-bootstrap";
import { UPDSECST, GetSCFLD, ROUTECOM} from '../../../actions'
import PathsApp from '../../../actions/Api_paths';
import BackBtn from '../Section/BackBtn'

class Footer extends Component {
    constructor(props) {
        super(props);
        this._handleChangeSwitch = this._handleChangeSwitch.bind(this);
    }
    _handleChangeSwitch(e) {
        let SectionId = e.target.id.replace('switch_id_', ''),
            State = e.target.checked ? 'enabled' : "disabled";
        this.props.dispatch(UPDSECST.UpdateSectionState(SectionId, State))
    }
    __FooterData() {
        if (this.props.FooterData) {
            return this.props.FooterData.UserSections.map((data, key) => {
                return (
                    <div className="label" key={key}>
                        {/* <Link to={`${PathsApp.Paths}section/${data.id}/footer`}>
                            <span>{data.DescName}</span>
                        </Link> */}
                        <div className = 'Header_Box_Section' onClick={()=>{
                                this.props.dispatch(GetSCFLD.getSectionFields(null, data.id));
                                this.props.dispatch(ROUTECOM.routeComponent('SectionPG', 'FooterPG'));
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
                <div className="sidebar__header__section Home__sidebar__footer__page">
                  <div className="header__control">
                        <h2>
                            <BackBtn NotImage={true}/>  
                            <span>{this.props.FooterData.Name}</span>
                        </h2>
                   </div>
                   
                    <div className="generic-sidebar__section__list">
                    {this.__FooterData()}
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    initialized: state.app.initialized,
})

export default connect(mapStateToProps)(Footer)
