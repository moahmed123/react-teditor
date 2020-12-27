/**
 ** Deprecated This Page : Remove This route 
 **/
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import { Container} from 'react-bootstrap';
import { FaTrashAlt , FaPlus} from "react-icons/fa";
import { connect } from 'react-redux';

// import '../../css/Home.css';

// Component
import Header from '../Header/Header';
import FooterData from '../Sidebar/Footer/Footer';
import LoaderSpinner from '../Sidebar/Spinner/LoaderSpinner';
import IframePrev from '../Iframe/IframePrev';
// import { header_data } from '../../actions';

class FooterPG extends Component {
    _FooterData(){
        if(this.props.FooterUserSections){
          return  <FooterData FooterData = {this.props.FooterUserSections}/>;
        }else{
            return  <LoaderSpinner/>
        }
    }
    render() {
        const homeClass = classNames('Home', {});

        return (
            <section className={homeClass}>
                <Container fluid>  
                    <div className="row">
                        <div className="col-md-12">
                            <Header /> 
                        </div>
                    </div>
                    <div className='row'>                    
                        <div className='col-md-3 p-0 sidebar__section'>  
                            <div className="Home__sidebar">
                                <div className="Home__sidebar__header">                         
                                    {this._FooterData()}    
                                </div>
                            </div>                          
                        </div>
                        <div className='col-md-9 body__section'>                            
                            <IframePrev/>  
                        </div>
                    </div>
                </Container>
            </section>            
        )
    }
}


const mapStateToProps = state => ({
    FooterUserSections : state.slidebar.FooterUserSections
})
export default connect(mapStateToProps)(FooterPG);