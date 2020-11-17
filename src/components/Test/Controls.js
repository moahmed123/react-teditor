import React, { Component } from 'react'
import { connect } from 'react-redux'
import classNames from 'classnames'
import '../../css/Controls.css'
import { app } from '../../actions'

class Controls extends Component {
    constructor(props){
        super(props);
        
    }
    componentDidMount(){
        // this.props.dispatch(app.firstData())
        // this.props.dispatch(app.loadData())
        // console.log('DAta ===> ' + this.props.app.data)
        // console.log('DAta ===> ' + this.props.app.dataFirst)
    }
    _fun() {
        if (!this.props.Date) {
            return <div> Loading.. </div>
        } else {

            return this.props.Date.data.Pages.map((data, key)=>{
                 return (
                    <li key={key}> {data.CodeName} </li>
                 )
            })        
        }
    }
    _funRegions(){
        if (!this.props.Date) {
            return <div> Loading.. </div>
        } else {

            return this.props.Date.data.Regions.map((data, key)=>{
                 return (
                    <li key={key}> {data.Name} </li>
                 )
            })            
        }
    }

    render() {
        const controlsClass = classNames('Controls', {})

        return (
            <div className={controlsClass}>
                {this.props.state}
                <p>Redux state + component props: mohamed alaa</p>
                <div>
                    <pre>
                        <h6>Pages</h6>
                        <ul>
                            {this._fun()}
                        </ul>                        
                        <h6>Regions</h6>
                        <ul>
                            {this._funRegions()}
                        </ul>                        
                    </pre>
                </div>
                <button onClick={() => this.props.dispatch(app.firstData())}>
                    Dispatch loadData
                </button>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    Date: state.app.dataFirst,
})
// const mapStateToProps = state => state

export default connect(mapStateToProps)(Controls)
