/**
 ** Deprecated This Page : Remove This route 
 **/
import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import classNames from 'classnames';
import { Container } from 'react-bootstrap';

// Component
import Header from '../Header/Header';
import IframeProv from '../Iframe/IframePrev';
import TemplateSettings from '../Sidebar/TemplateSettings/TemplateSettings';

class SettingStylePG extends Component {

    render() {
        const homeClass = classNames('Home', {});        
        return (
            <section className={homeClass}>
                <Container fluid className="no-gutters p-0">
                    <div className="row no-gutters">
                        <div className="col-md-12">
                            <Header />
                        </div>
                    </div>
                    <div className='row no-gutters'>
                        <TemplateSettings />
                        <div className='col-md-9'>
                            <IframeProv />
                        </div>
                    </div>
                </Container>
            </section>
        )
    }

}
export default SettingStylePG
