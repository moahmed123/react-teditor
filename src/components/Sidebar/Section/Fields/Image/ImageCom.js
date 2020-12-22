import React, { Component } from 'react';
import { SaveSCFLD, SeaLink } from '../../../../../actions';
import { connect } from 'react-redux';
import Paths from '../../../../../actions/Api_paths'
import $ from "jquery-1.10.2";
// import Jq from "jquery";

import localization from '../../../../../localization/localization';

class ImageCom extends Component {
    constructor(props) {
        super(props);
        this.state = {
            noImageThumb: String,
            ClearImage: null
        }
        this.clear_image = this.clear_image.bind(this);
    }
    componentDidMount() {        
        // Chick Close Model 
        $('body').on('click', '.md-close.close', function () {
            $('body').removeClass('modal-open');
            $('#modal-image').removeClass('in').hide().remove();;
            $('.modal-backdrop').remove();
        })
        let _TS = this; // This For React Not JQ.
        $('body').on('click', '#modal-image', function () {
            let currentImageLength = $('.current_value_image').length,
                currentImage = $('.current_value_image');
            // Select Current Value.

            for (let i = 0; i < currentImageLength; i++) {
                if (currentImage[i].value != 'currentValue') {
                    console.log(currentImage[i].value)
                    console.log(currentImage[i].getAttribute('imagevalid'))
                    /**
                     * Click For model -- check when choose Image for media maneger
                     */
                    let keyJson = currentImage[i].getAttribute('imagevalid').replace('_image', ''),
                        ValueJson = currentImage[i].value,
                        idThumbImage = currentImage[i].id.replace("_image", ''),
                        jsonFormatImgVal = { "key": keyJson, "value": ValueJson };
                        _TS._sendSavedData(jsonFormatImgVal);

                    let srcImage = document.getElementById(`${idThumbImage}_thumb_img`);
                    // let srcImageCurr = document.getElementById(`${idThumbImage}_thumb`).src;
                    // console.log(srcImageCurr)
                    // srcImage.src = srcImageCurr;
                    
                    setTimeout(() => {
                        let StoreCode = localStorage.getItem('storeCode');                                                
                        // Change Src Image  
                        window.location.hostname == 'localhost' ?
                            srcImage.src = "http://qaz123.expandcart.com" + Paths.ecdata + StoreCode + Paths.saveImageData + ValueJson
                            :
                            srcImage.src = Paths.ecdata + StoreCode + Paths.saveImageData + ValueJson;
                        // srcImage.src = srcImageCurr;
                        /**
                        * when choose is Done: 
                        *  -- Close Modal 
                        */
                        $('body').removeClass('modal-open');
                        $('#modal-image').removeClass('in').hide().remove();;
                        $('.modal-backdrop').remove();
                    }, 200);


                }
            }
        })
    }

    _renderDataImage() {
        let Image_data = this.props.FieldImage;
        if (this.props.codelang == 'en') {
            if (Image_data) {
                return Image_data.FieldVals.map((DI_mage, key) => {
                    if (DI_mage.Lang == 'en') {
                        console.log("DImage" + DI_mage)
                        return (
                            <div className="color__main__content" key={key}>
                                <div className="main__img__content">
                                    <img
                                        src={DI_mage.ImageThumb}
                                        width="100%"
                                        id={`${DI_mage.ObjectFieldId}_thumb_img`}
                                    /> 
                                    {/* <img                                       
                                        className='hidden'
                                        width="100%"
                                        id={`${DI_mage.ObjectFieldId}_thumb`}
                                    />                                    */}
                                    <input
                                        type="hidden"
                                        className='current_value_image'
                                        value="currentValue"
                                        id={`${DI_mage.ObjectFieldId}_image`}
                                        imagevalid={`${DI_mage.id}_image`}
                                    />
                                </div>
                                <input className="upload-image" id="image" type="file" />
                                <button name="logo_browse" type="button" className="btn btn-link Select__Img"
                                    value={DI_mage.id} onClick={this.image_upload} objectfieldid={DI_mage.ObjectFieldId}>
                                    {localization.Browse}
                                </button>
                                <button type="button" className="btn btn-link Clear__Img"
                                    value={DI_mage.id}
                                    imageclearvalid={`${DI_mage.ObjectFieldId}_thumb_img`}
                                    onClick={this.clear_image}>                                    
                                    {localization.Clear}
                                </button>
                            </div>
                        )
                    }
                })
            }
        } else if (this.props.codelang == 'ar') {
            if (Image_data) {
                return Image_data.FieldVals.map((DI_mage, key) => {
                    if (DI_mage.Lang == 'ar') {
                        console.log("DImage" + DI_mage)
                        return (
                            <div className="color__main__content" key={key}>
                               <div className="main__img__content">
                                    <img
                                        src={DI_mage.ImageThumb}
                                        width="100%"
                                        id={`${DI_mage.ObjectFieldId}_thumb_img`}
                                    />                                    
                                    <input
                                        type="hidden"
                                        className='current_value_image'
                                        value="currentValue"
                                        id={`${DI_mage.ObjectFieldId}_image`}
                                        imagevalid={`${DI_mage.id}_image`}
                                    />
                                </div>
                                <input className="upload-image" id="image" type="file" />
                                <button name="logo_browse" type="button" className="btn btn-link Select__Img"
                                    value={DI_mage.id} onClick={this.image_upload} objectfieldid={DI_mage.ObjectFieldId}>                                    
                                    {localization.Browse}
                                </button>
                                <button type="button" className="btn btn-link Clear__Img"
                                    value={DI_mage.id}
                                    imageclearvalid={`${DI_mage.ObjectFieldId}_thumb_img`}
                                    onClick={this.clear_image}>
                                    {localization.Clear}
                                </button>
                            </div>
                        )
                    }
                })
            }
        } else if (this.props.codelang == 'fr') {
            if (Image_data) {
                return Image_data.FieldVals.map((DI_mage, key) => {
                    if (DI_mage.Lang == 'fr') {
                        console.log("DImage" + DI_mage)
                        return (
                            <div className="color__main__content" key={key}>
                               <div className="main__img__content">
                                    <img
                                        src={DI_mage.ImageThumb}
                                        width="100%"
                                        id={`${DI_mage.ObjectFieldId}_thumb_img`}
                                    />                                  
                                    <input
                                        type="hidden"
                                        className='current_value_image'
                                        value="currentValue"
                                        id={`${DI_mage.ObjectFieldId}_image`}
                                        imagevalid={`${DI_mage.id}_image`}
                                    />
                                </div>
                                <input className="upload-image" id="image" type="file" />
                                <button name="logo_browse" type="button" className="btn btn-link Select__Img"
                                    value={DI_mage.id} onClick={this.image_upload} objectfieldid={DI_mage.ObjectFieldId}>
                                    {localization.Browse}
                                </button>
                                <button type="button" className="btn btn-link Clear__Img" 
                                    value={DI_mage.id}
                                    imageclearvalid={`${DI_mage.ObjectFieldId}_thumb_img`}
                                    onClick={this.clear_image}>                                    
                                    {localization.Clear}
                                </button>
                            </div>
                        )
                    }
                })
            }
        } else {
            if (Image_data) {
                return Image_data.FieldVals.map((DI_mage, key) => {
                    if (DI_mage.Lang == 'en') {
                        console.log("DImage" + DI_mage)
                        return (
                            <div className="color__main__content" key={key}>
                               <div className="main__img__content">
                                    <img
                                        src={DI_mage.ImageThumb}
                                        width="100%"
                                        id={`${DI_mage.ObjectFieldId}_thumb_img`}
                                    />                                   
                                    <input
                                        type="hidden"
                                        className='current_value_image'
                                        value="currentValue"
                                        id={`${DI_mage.ObjectFieldId}_image`}
                                        imagevalid={`${DI_mage.id}_image`}
                                    />
                                </div>
                                <input className="upload-image" id="image" type="file" />
                                <button name="logo_browse" type="button" className="btn btn-link Select__Img"
                                    value={DI_mage.id} onClick={this.image_upload} objectfieldid={DI_mage.ObjectFieldId}>
                                    {localization.Browse}
                                </button>
                                <button type="button" className="btn btn-link Clear__Img"
                                    value={DI_mage.id}
                                    imageclearvalid={`${DI_mage.ObjectFieldId}_thumb_img`}
                                    onClick={this.clear_image}>                                    
                                    {localization.Clear}
                                </button>
                            </div>
                        )
                    }
                })
            }
        }
    }
    image_upload(e) {
        let imageId = `${e.target.value}_image`,
            thumbId = `${e.target.value}_thumb`,
            objectFieldtImageId = `${e.target.getAttribute("objectfieldid")}_image`,
            objectFieldthumbId = `${e.target.getAttribute("objectfieldid")}_thumb`;

            let srcImageCurr = document.getElementById(`${objectFieldthumbId}_img`).src,            
                storeCode = srcImageCurr.split('/')[5];
                // Save Store Code 
                localStorage.setItem('storeCode', storeCode);

                
        
            console.log('---->',storeCode, ' ', localStorage.getItem('storeCode'))

        console.log("imageId", imageId, "thumbId", thumbId, "  >> ", objectFieldtImageId, "   ", objectFieldthumbId);
        $('#modal-image').remove();
        let MediaManager = '';
        if (window.location.hostname == 'localhost') {
            MediaManager = "http://qaz123.expandcart.com";
        }
        $.ajax({
            url: MediaManager + Paths.URlMediaManager + 'admin/common/filemanager?target=' +
                objectFieldtImageId +
                '&thumb=' + objectFieldthumbId + '&editorFunc=' + null + '&callerName=' + null,
            dataType: 'html',
            success: function (html) {
                //class="modal" tabindex="-1" aria-labelledby="..." aria-hidden="true"
                $('body').append('<Modal id="modal-image" tabindex="-1" aria-hidden="true" class="modal">' + html + '</Modal>');
                setTimeout(() => {
                    $('body').addClass('modal-open').append('<div class="modal-backdrop  in"></div>')
                    $('#modal-image').addClass('in').show().attr("aria-hidden", false);

                }, 100)
                // $('#modal-image').modal('show');
            }
        });
        // $.startImageManager(objectFieldtImageId, objectFieldthumbId);
    }
    clear_image(e) {
        //Create Json Format To Save It.  
        let jsonFormatImg = { "key": e.target.value, "value": '' };
        // Save Clear Data.          
        this._sendSavedData(jsonFormatImg);
        setTimeout(() => {
            // console.log(document.getElementById(`Image_${e.target.value}`));
            let imageClearValId = e.target.getAttribute("imageclearvalid");
            // Change Src Image 
            let srcImageClear = document.getElementById(imageClearValId);

            let srcImageCurr = srcImageClear.src,            
                storeCode = srcImageCurr.split('/')[5];
                // Save Store Code 
                localStorage.setItem('storeCode', storeCode);
            let StoreCode = localStorage.getItem('storeCode'); 
            //remove Data        
            window.location.hostname == 'localhost' ?
                srcImageClear.src = "http://qaz123.expandcart.com" + Paths.ecdata + StoreCode + Paths.srcClearImage
                :
                srcImageClear.src = + Paths.ecdata + StoreCode + Paths.srcClearImage
        }, 100)
    }
    _sendSavedData = (jsonFormat) => {
        // Sart Sand Data To Save It:
        if (this.props.newFields) {
            let x = this.props.newFields; // first input 
            let s = -1;
            x.map((d, key) => {
                if (d.key == jsonFormat.key) {
                    d.value = jsonFormat.value;
                    this.props.dispatch(SaveSCFLD.newValFields(x))
                    // break;
                } else {
                    s = 0;
                }
            })
            if (s >= 0) {
                x.push(jsonFormat);
                this.props.dispatch(SaveSCFLD.newValFields(x));
            }
        } else {
            let x2 = []
            let lg = x2.push(jsonFormat);
            this.props.dispatch(SaveSCFLD.newValFields(x2));
        }
        // Close Sand Data To Save It
    }
    render() {        
        return (
            <div className="setting--sidebar__color">
                <h4 className="setting--sidebar__header "> {this.props.FieldImage.Name} </h4>
                <div className="sidebar__color__main ">
                    {this._renderDataImage()}
                </div>
            </div>
        )
    }
}
const mapStateToProps = state => ({
    newFields: state.newValFields.newFields,
})
export default connect(mapStateToProps)(ImageCom)