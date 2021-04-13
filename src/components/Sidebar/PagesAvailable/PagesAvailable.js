import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Promoted from '../../../assets/svg/promoted-product.svg';
import { ADDLAYOUT } from '../../../actions';
import LoaderSpinner from '../Spinner/LoaderSpinner';
import PathsApp from '../../../actions/Api_paths';


class PagesAvailable extends Component {
    constructor(props){
        super(props);
        this.state = {}
    }   
    _renderLayouts = () => {
        if(this.props.Layouts){
            return this.props.Layouts.map( (dataLayouts, key) => {
                return(
                     <div key = {key} className="label" 
                     onClick = {()=> {
                         this.props.dispatch(ADDLAYOUT.addLayout( dataLayouts.name , dataLayouts.route))
                         }} >
                             <a>
                                {/* <img className="label__icon" src={Promoted} /> */}
                                <span> {dataLayouts.name}</span>                                             
                             </a>
                     </div>
                 )
            })
        }
    }
    render() {             
        return (      
            <div className="sidebar__header__section">
                <div className='Parent_Cart'> {this._renderLayouts()} </div>
            </div>      
        )
    }
}

const mapStateToProps = state => ({    
    PageResions : state.slidebar.regions,
    Layouts: state.getPagesDropDown.Layouts, // All Layouts For pages
})

export default connect(mapStateToProps)(PagesAvailable)