import React, { Component } from 'react';
import deleteMark from '../../../assets/svg/delete.svg';

class BackBtn extends Component {
    _BackHistory = () => {
        // back For History:         
        window.history.back();
    }
    render() {
        return (
            <div className="delete" onClick={this._BackHistory}>
                <img src={this.props.backImg ? this.props.backImg : deleteMark} />
            </div>
        )
    }
}
export default BackBtn;