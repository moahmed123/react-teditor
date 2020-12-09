import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import classNames from 'classnames';
import { Container} from 'react-bootstrap';
// import { FaTrashAlt , FaPlus} from "react-icons/fa";


// Component
import Header from '../Header/Header';
import HeaderData from '../Sidebar/Header/Header';
// import { header_data } from '../../actions';
// import Controls from './Test/Controls'
//Image Local
// import ArrowLeft from '../../assets/images/arrow-left.png';

class HeaderPG extends Component {   
    _headerData(){
        if(this.props.UserSections){
          return  <HeaderData HeaderData = {this.props.UserSections}/>;
        }else{
            return <div> Loading 3 </div>
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
                        <div className='col-md-3 p-0'>  
                            <div className="Home__sidebar">
                                <div className="Home__sidebar__header">                         
                                    {this._headerData()}
                                </div>
                            </div>                          
                        </div>
                        <div className='col-md-9'>                            
                            <iframe src='http://qaz123.expandcart.com/' className='iframe-site'></iframe>
                        </div>
                    </div>
                </Container>
            </section>            
        )
    }
}

const mapStateToProps = state => ({
    UserSections : state.slidebar.UserSections
})
export default connect(mapStateToProps)(HeaderPG);
