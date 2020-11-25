import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FaTrashAlt, FaPlus } from "react-icons/fa";


class MainContentDT extends Component {
    componentDidMount(){
        console.log('main contant' , this.props.MainContenData)
    }
    _UserSections(){
        if(this.props.MainContenData){
            return this.props.MainContenData.UserSections.map((Sections, key)=>{
                return (
                    <div className="label" key={key}>
                        <Link to="/section">
                            <span>{Sections.DescName}</span> <FaTrashAlt />
                        </Link>
                    </div>
                )
            })
        }
    }
    render() {
        return (
            <div className="sidebar__header__section">
                {
                    this.props.MainContenData.UserSections.length > 0? 
                        <h2> {this.props.MainContenData.Name} </h2>
                    :
                        <h6 className='text-center not-found-sc'> No Section Found </h6>
                }
                
               
                {this._UserSections()}                
            </div>
        )
    }
}

export default MainContentDT
