import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Route, Switch } from 'react-router-dom'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import classNames from 'classnames'

import Home from './Pages/Home';
import HeaderPG from './Pages/HeaderPG';
import FooterPG from './Pages/FooterPG';
import SectionPG from './Pages/SectionPG';

// LTR Direction
import '../css/main-ltr.css'; 
// RTL Direction
// import '../css/main-rtl.css';

class App extends Component {
    render() {
        const appClass = classNames('App', {})

        return (
            <main>
                <Route render={({ location }) => (
                    <TransitionGroup className={appClass}>
                        <CSSTransition
                            key={location.key}
                            classNames={this.props.transitions ? 'fade' : ''}
                            timeout={this.props.transitions ? 350 : 0}
                        >
                            <Switch location={location}>
                                <Route exact path="/" component={Home} />
                                <Route exact path="/header" component={HeaderPG} />
                                <Route exact path="/footer" component={FooterPG} />
                                <Route exact path="/section" component={SectionPG} />

                                {/* <Route exact path="/page" component={Page} />
                <Route exact path="/about" component={About} /> */}
                            </Switch>
                        </CSSTransition>
                    </TransitionGroup>
                )}
                />
                {/* <Footer /> */}
            </main>
        )
    }
}

const mapStateToProps = state => ({
    transitions: state.app.transitions,
})

export default connect(mapStateToProps)(App)
