import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, useParams , useLocation} from 'react-router-dom';
import { Form, Button, FormGroup, FormControl, ControlLabel, Dropdown, Accordion, Card } from "react-bootstrap";
// import '../../../css/Header-section.css';
import { GetSCFLD } from '../../../actions';
import check from '../../../assets/svg/check-mark.svg';
import deleteMark from '../../../assets/svg/delete.svg';
import arFlag from '../../../assets/images/soady flag.png';
import trash from '../../../assets/svg/trash.svg';
import { FaBars } from "react-icons/fa";
import Select from 'react-select';
import {render} from 'react-dom';
import {SortableContainer, SortableElement } from 'react-sortable-hoc';

import { arrayMove } from 'react-sortable-hoc';

const SortableItem = SortableElement(({value}) => <li> <span>pla</span>{value}</li>);
const SortableList = SortableContainer(({items}) => {
    return (
      <ul>
        {items.map((value, index) => (
          <SortableItem key={`item-${value}`} index={index} value={value} />
          
        ))}
      </ul>
    );
  });

const colourOptions = [
    { value: 'chocolate', label: 'Chocolate1' },
    { value: 'strawberry', label: 'Strawberry1' },
    { value: 'vanilla', label: 'Vanilla1' }
  ]
  

class Section extends Component {
    state = {
        items: ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5', 'Item 6'],
      };
      
  onSortEnd = ({oldIndex, newIndex}) => {
    this.setState(({items}) => ({
      items: arrayMove(items, oldIndex, newIndex),
    }));
  };
    constructor(props) {
        super(props);
    }
    componentDidMount(){    
        this.props.dispatch(GetSCFLD.getSectionFields());
    }
   
    render() {
        const {items} = this.state;

        return (
            <div className='col-md-3 p-0 position-static'>
            <div className="Home__sidebar setting--sidebar section--page ">
                <div className="Home__sidebar__header">
                    <h4 className="setting--sidebar__header">  Main Theme <span>home page</span></h4>

                    <div className="setting--sidebar__controls">
                        <div className="delete">
                            <img src={deleteMark} />
                        </div>
                        <div className="check">
                            <img src={check} />
                        </div>
                    </div>
                </div>
                <div className="section--page__flags">
                    <div className="page__flags__country active">
                        <img src={arFlag} />
                        <span className="active">EN</span>
                    </div>
                    <div className="page__flags__country">
                        <img src={arFlag} />
                        <span className="active">عربي</span>
                    </div>
                    <div className="page__flags__country">
                        <img src={arFlag} />
                        <span className="active">fr</span>
                    </div>
                </div>
                <div className="setting--sidebar__color">
                    <div className="sidebar__color__main">
                        <div className="color__main__content">
                            <label className="check-container">
                                Display Section Title
                                <input type="checkbox" />

                                <span className="checkmark"></span>
                            </label>
                            <div className="label generic--section">
                                <input className="generic--section__form" placeholder="lorem ipsum" type="text" />
                                <span className="focus-border"></span>
                            </div>
                        </div>

                    </div>
                </div>

                <Accordion defaultActiveKey="0">
                    <h4 className="setting--sidebar__header"> Logos </h4>
                    <Card>
                        <Card.Header>
                            <Accordion.Toggle as={Button} variant="link" eventKey="0">
                                <span>Logo 1</span>
                                <div className="controls">
                                    <img src={trash} />
                                    <FaBars />
                                </div>
                            </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="0">
                            <Card.Body>

                                <div className="setting--sidebar__color">
                                    <div className="sidebar__color__main">
                                        <div className="color__main__content">
                                            <input className="upload-image" id="image" type="file" />
                                            <label className="upload-image__label" for="image">
                                                <div className="upload-image__label__icon">
                                                    <p>Browse</p>
                                                </div>
                                                <span>delete</span>
                                            </label>
                                            <div className="label generic--section">
                                                <input className="generic--section__form" placeholder="www.example.com/lorem-ipsum" type="text" />
                                                <span className="focus-border"></span>
                                            </div>
                                        </div>

                                    </div>
                                </div>


                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card>
                        <Card.Header>
                            <Accordion.Toggle as={Button} variant="link" eventKey="1">
                                <span>Logo 2</span>
                                <div className="controls">
                                    <img src={trash} />
                                    <FaBars />
                                </div>
                            </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="1">
                            <Card.Body>

                                <div className="setting--sidebar__color">
                                    <div className="sidebar__color__main">
                                        <div className="color__main__content">
                                            <input className="upload-image" id="image" type="file" />
                                            <label className="upload-image__label" for="image">
                                                <div className="upload-image__label__icon">
                                                    <p>Browse</p>
                                                </div>
                                                <span>delete</span>
                                            </label>
                                            <div className="label generic--section">
                                                <input className="generic--section__form" placeholder="www.example.com/lorem-ipsum" type="text" />
                                                <span className="focus-border"></span>
                                            </div>
                                        </div>

                                    </div>
                                </div>


                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card>
                        <Card.Header>
                            <Accordion.Toggle as={Button} variant="link" eventKey="2">
                                <span>Logo 3</span>
                                <div className="controls">
                                    <img src={trash} />
                                    <FaBars />
                                </div>
                            </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="2">
                            <Card.Body>

                                <div className="setting--sidebar__color">
                                    <div className="sidebar__color__main">
                                        <div className="color__main__content">
                                            <input className="upload-image" id="image" type="file" />
                                            <label className="upload-image__label" for="image">
                                                <div className="upload-image__label__icon">
                                                    <p>Browse</p>
                                                </div>
                                                <span>delete</span>
                                            </label>
                                            <div className="label generic--section">
                                                <input className="generic--section__form" placeholder="www.example.com/lorem-ipsum" type="text" />
                                                <span className="focus-border"></span>
                                            </div>
                                        </div>

                                    </div>
                                </div>


                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>

                </Accordion>
                <Select
                    defaultValue={[colourOptions[0]]}
                    isMulti
                    name="colors"
                    options={colourOptions}
                    className="basic-multi-select"
                    classNamePrefix="select"
                />
               <SortableList items={this.state.items} onSortEnd={this.onSortEnd} />
            </div>
        </div>

        )
    }
}

const mapStateToProps = state => ({
    initialized: state.app.initialized,
})

export default connect(mapStateToProps)(Section)
