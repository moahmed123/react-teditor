import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Route, Switch, HashRouter, Router,Redirect, BrowserRouter} from 'react-router-dom';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import classNames from 'classnames'
import {GETLANGS} from '../actions'
import Home from './Pages/Home';
import HeaderPG from './Pages/HeaderPG';
import FooterPG from './Pages/FooterPG';
import SectionPG from './Pages/SectionPG';
import SettingStylePG from './Pages/SettingStylePG';
import AvailableSectionsPG from './Pages/AvailableSectionsPG';

//route
import PathsApp from '../actions/Api_paths';
import LoaderSpinner from './Sidebar/Spinner/LoaderSpinner';
import { createBrowserHistory } from "history";
// LTR Direction
import '../css/main-ltr.css'; 
// RTL Direction
// import '../css/main-rtl.css';

class App extends Component {
    componentDidMount = () =>{
        this.props.dispatch(GETLANGS.getLanguages());
        // Save Local Storge To Check User change any Fields For App or not: 
        localStorage.setItem('User_Save_Fields', false);               
    }
    render() {
        
        let HashHistory = createBrowserHistory();
        let browserHistory =Router.browserHistory; 
        // console.log(HashHistory, browserHistory, process.env.PUBLIC_URL)

        if (this.props.getlanguages) {            
            let ActiveLanguage = this.props.getlanguages.data.ActiveLanguage.code;
        if (ActiveLanguage == "ar"){
            import('../css/main-rtl.css').then(()=>{                    
                document.documentElement.lang = "ar";
                document.body.dir = 'rtl';
            })        
            // console.log('fdfdfdf>>>>>>')
        }else{
            import('../css/main-ltr.css').then(()=>{                    
                document.documentElement.lang = "en";
                document.body.dir = 'ltr';
            });
        }
       console.log("this.props.getlanguages", this.props.getlanguages)
        }  
        const appClass = classNames('App', {})
        if (this.props.getlanguages){                
            return (              
                <main> 
                    {/* <HashRouter>*/}                    
                        <Route history={HashHistory} render={({ location }) => (                                                    
                            <TransitionGroup className={appClass}>
                                <CSSTransition
                                    key={location.key}
                                    classNames={this.props.transitions ? 'fade' : ''}
                                    timeout={this.props.transitions ? 350 : 0}
                                >                                       
                                    <Switch location={location} >
                                            {/* <Redirect from={`${PathsApp.Paths}header`} to ={`${PathsApp.Paths}#/header`} /> */}
                                            <Route exact path = {`${PathsApp.Paths}`} component={Home} />                                                                               
                                            {/* <Route exact path = {`${PathsApp.Paths}header`} component={HeaderPG} />
                                            <Route exact path = {`${PathsApp.Paths}footer`} component={FooterPG} />                                
                                            <Route exact path = {`${PathsApp.Paths}section/:id?/:section`} component={SectionPG} />
                                            <Route exact path = {`${PathsApp.Paths}setting`} component={SettingStylePG} />
                                            <Route exact path = {`${PathsApp.Paths}region/:id?`} component={AvailableSectionsPG} />                                         */}
                                    </Switch>                                                                                                                                
                                </CSSTransition>
                            </TransitionGroup>                                                       
                        )}
                        />   
                    {/* </HashRouter>*/}                   
                </main>
            )
        }else{
            return <div className='Loading_app'> <LoaderSpinner/> </div>
        }
    }
}

const mapStateToProps = state => ({
    transitions: state.app.transitions,
    getlanguages: state.getlanguages.GetLangs,
})

export default connect(mapStateToProps)(App)
