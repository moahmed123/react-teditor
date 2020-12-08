import React, { Component } from 'react';
import { SaveSCFLD, SeaLink } from '../../../../../actions';
import { connect } from 'react-redux';
import Select from 'react-select';

class ImageCom extends Component {
    constructor(props) {
        super(props);

    }
    componentDidMount() {
        console.log(this.props.FieldImage)
    }
    _renderDataImage() {
        let Image_data = this.props.FieldImage;
        if (this.props.codelang == 'en') {
            if (Image_data) {
                return Image_data.FieldVals.map((DI_mage, key) => {
                    if (DI_mage.Lang == 'en') {
                        console.log("DImage"+DI_mage)
                        return (
                            <div className="color__main__content" key={key}>
                                <div>
                                    <img src ={DI_mage.ImageThumb} width= "100%"/>
                                </div>
                                <input className="upload-image" id="image" type="file" />
                                <label className="upload-image__label" htmlFor="image">
                                    <div className="upload-image__label__icon">
                                        <p>Browse</p>
                                    </div>
                                    <span>delete</span>
                                </label>
                            </div>
                        )
                    }
                })
            }
        }else  if (this.props.codelang == 'ar') {
            if (Image_data) {
                return Image_data.FieldVals.map((DI_mage, key) => {
                    if (DI_mage.Lang == 'ar') {
                        console.log("DImage"+DI_mage)
                        return (
                            <div className="color__main__content" key={key}>
                                <div>
                                    <img src ={DI_mage.ImageThumb} width= "100%"/>
                                </div>
                                <input className="upload-image" id="image" type="file" />
                                <label className="upload-image__label" htmlFor="image">
                                    <div className="upload-image__label__icon">
                                        <p>Browse</p>
                                    </div>
                                    <span>delete</span>
                                </label>
                            </div>
                        )
                    }
                })
            }
        }else  if (this.props.codelang == 'fr') {
            if (Image_data) {
                return Image_data.FieldVals.map((DI_mage, key) => {
                    if (DI_mage.Lang == 'fr') {
                        console.log("DImage"+DI_mage)
                        return (
                            <div className="color__main__content" key={key}>
                                <div>
                                    <img src ={DI_mage.ImageThumb} width= "100%"/>
                                </div>
                                <input className="upload-image" id="image" type="file" />
                                <label className="upload-image__label" htmlFor="image">
                                    <div className="upload-image__label__icon">
                                        <p>Browse</p>
                                    </div>
                                    <span>delete</span>
                                </label>
                            </div>
                        )
                    }
                })
            }
        }else{
            if (Image_data) {
                return Image_data.FieldVals.map((DI_mage, key) => {
                    if (DI_mage.Lang == 'en') {
                        console.log("DImage"+DI_mage)
                        return (
                            <div className="color__main__content" key={key}>
                                <div>
                                    <img src ={DI_mage.ImageThumb} width= "100%"/>
                                </div>
                                <input className="upload-image" id="image" type="file" />
                                <label className="upload-image__label" htmlFor="image">
                                    <div className="upload-image__label__icon">
                                        <p>Browse</p>
                                    </div>
                                    <span>delete</span>
                                </label>
                            </div>
                        )
                    }
                })
            }
        }
    }
    render() {
        return (
            <div className="setting--sidebar__color">
                <h4 className="setting--sidebar__header"> {this.props.FieldImage.Name} </h4>
                <div className="sidebar__color__main">
                        {this._renderDataImage()}
                </div>
            </div>
        )
    }
}
const mapStateToProps = state => ({})
export default connect(mapStateToProps)(ImageCom)