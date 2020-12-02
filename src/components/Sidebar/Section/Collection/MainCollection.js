import React, { Component } from 'react';
import { SaveSCFLD } from '../../../../actions';
import { connect } from 'react-redux';
import { arrayMove, SortableContainer, SortableElement } from 'react-sortable-hoc';
import { FaBars } from "react-icons/fa";
import { Form, Button, FormGroup, FormControl, ControlLabel, Dropdown, Accordion, Card } from "react-bootstrap";
import trash from '../../../../assets/svg/trash.svg';

class MainCollection extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            open: "close"
        }
    }
    componentDidMount() {
        console.log()
        let itemCollection = [];
        this.props.collectionData.map((data, key) => {
            itemCollection.push(key)
        })
        this.setState({ items: itemCollection })
    }
    onSortEnd = ({ oldIndex, newIndex }) => {
        this.setState(({ items }) => ({
            items: arrayMove(items, oldIndex, newIndex),
        }));
    };
    render() {
        const SortableItem = SortableElement(({ value }) => {
            return (
                <li onClick={() => this.setState({ open: "open" })} className={this.state.open + ' col-md-12'}>
                    <h4 className="setting--sidebar__header"> {`Logo-${value}`}</h4>
                    <div className="setting--sidebar__color">
                        <div className="sidebar__color__main">
                            <div className="color__main__content">
                                <input className="upload-image" id="image" type="file" />
                                <label className="upload-image__label" htmlFor="image">
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

                </li>
            );
        });
        const SortableList = SortableContainer(({ items }) => {
            return (
                <ul className='col-md-12'>
                    {items.map((value, index) => (
                        <SortableItem key={`item-${value}`} index={index} value={value} />
                    ))}
                </ul>
            );
        });

        return (
            <div className='row'>
                <h2>collection {this.props.codelang}</h2>
                <SortableList items={this.state.items} onSortEnd={this.onSortEnd} />
            </div>
        )
    }
}
const mapStateToProps = state => ({
    newFields: state.newValFields.newFields
})
export default connect(mapStateToProps)(MainCollection)