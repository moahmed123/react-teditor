import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FaTrashAlt, FaPlus } from "react-icons/fa";
import Trash from '../../../assets/svg/trash.svg';
import Promoted from '../../../assets/svg/promoted-product.svg';

import KanbanDND from '../Drag_Drop/KanbanDND';
import Board from '@lourenci/react-kanban'
import '@lourenci/react-kanban/dist/styles.css'
const board = {
    columns: [
      {
        id: 1,
        title: '',
        cards: [
          {
            id: 1,
            title: 'Add card',
            description: 'Add capability to add a card in a column'
          },
          {
            id: 2,
            title: 'Add card',
            description: 'Add capability to add a card in a column'
          },
        ]
      }
    ]
  }
class MainContentDT extends Component {
    componentDidMount(){
        console.log('main contant' , this.props.MainContenData)
    }
    _UserSections(){
        if(this.props.MainContenData){
            return this.props.MainContenData.UserSections.map((Sections, key)=>{
                return (
                    <div className="label" key={key}>                    
                        <Link to = {`/section/${Sections.id}`} >
                                    <img className="label__icon" src={Promoted} />
                                <span> 
                                    {Sections.DescName}
                                </span> 
                            <img className="label--delete" src={Trash} />
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
