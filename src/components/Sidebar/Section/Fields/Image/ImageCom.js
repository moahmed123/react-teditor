import React, { Component } from 'react';
import { SaveSCFLD, SeaLink } from '../../../../../actions';
import { connect } from 'react-redux';
import Paths from '../../../../../actions/Api_paths'
import RemoveImg from '../../../../../assets/svg/cancel.svg';
import { Tooltip, OverlayTrigger, Button } from 'react-bootstrap';
import $ from "jquery-1.10.2";
// import Jq from "jquery";

import localization from '../../../../../localization/localization';

class ImageCom extends Component {
    constructor(props) {
        super(props);
        this.state = {
            noImageThumb: String,
            ClearImage: null,
            firstRender: true,
            IdImgUpload: [],
            ImageCaching: false,
            ImageCachingAr: false,
            ImageCachingFr: false            
        }
        this.clear_image = this.clear_image.bind(this);
        this.image_upload = this.image_upload.bind(this);

    }
    componentDidMount() {
        // Chick Close Model 
        $('body').on('click', '.md-close.close', function () {
            $('body').removeClass('modal-open');
            $('#modal-image').removeClass('in').hide().remove();;
            $('.modal-backdrop').remove();
        })
        let _TS = this; // This For React Not JQ.                
        //Fixed Issue for image. 
        $('body').on('click', '#modal-image', function (event) {
            if (!$(event.target).closest('a.directory, #button-upload, #button-delete, .modal-body .input-group, .dropzone .dz-message, .modal-header .close').length) {
                // ... clicked on the 'body', but not inside of This Class                                
                let currentImageLength = $('.current_value_image').length,
                    currentImage = $('.current_value_image');
                // Select Current Value.                                
                for (let i = 0; i < currentImageLength; i++) {
                    // console.log(currentImage[i].value, '-------')
                    if (currentImage[i].value != 'currentValue') {
                        // console.log(i);
                        // console.log(currentImage[i].value);
                        // console.log(currentImage[i].getAttribute('imagevalid'));
                        /**
                         * Click For model -- check when choose Image for media maneger
                         */
                        let keyJson = currentImage[i].getAttribute('imagevalid').replace('_image', ''),
                            ValueJson = currentImage[i].value,
                            idThumbImage = currentImage[i].id.replace("_image", ''),
                            jsonFormatImgVal = { "key": keyJson, "value": ValueJson , "img": true};
                        // jsonFormatImgVal = { "key": keyJson, "value": ValueJson};

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
                            $('#modal-image').removeClass('in').hide().remove();
                            $('.modal-backdrop').remove();
                            // Save data                         
                            //$('.setting--sidebar__controls.save .check').trigger('click');
                        }, 200);
                    }
                }
            }
        })
        // End Fixed Issue for image. 
    }
    _renderDataImage() {
        console.log("----------------")
        console.log("this.props.newFields =",this.props.newFields)
        console.log("this.props.FieldImage =", this.props.FieldImage)
        console.log(localStorage.getItem('storeCode'))
        console.log("----------------")
        let Image_data = this.props.FieldImage;
        if (this.props.codelang == 'en') {
            if (Image_data) {
                return Image_data.FieldVals.map((DI_mage, key) => {
                    if (DI_mage.Lang == 'en') {
                        console.log("DImage", DI_mage)
                        return (
                            <div className="color__main__content" key={key}>
                                <div className="main__img__content">                                    
                                    {
                                        this.props.newFields? 
                                            this.props.newFields.map((data, key)=>{
                                                console.log(data.key, DI_mage.id)  
                                                if(data.img){
                                                    if(data.key == DI_mage.id){ 
                                                        if(this.state.ImageCaching == false){
                                                            this.setState({
                                                                ImageCaching: true
                                                            })
                                                        }                                                                                                    
                                                        return  <img
                                                                    // src={DI_mage.ImageThumb.split('/data/')[0].replace('cache','')+ data.value}
                                                                    src={data.value? DI_mage.ImageThumb.split('/data/')[0].replace('cache','')+ data.value : DI_mage.ImageThumb.split('image/cache/')[0]+Paths.srcClearImage}
                                                                    key={key}
                                                                    width="100%"
                                                                    id={`${DI_mage.ObjectFieldId}_thumb_img`}
                                                                />                                                       
                                                       }
                                                }
                                            })
                                        : 
                                            null                                                                          
                                    }
                               {
                                   this.state.ImageCaching == false?
                                    <img
                                        src={DI_mage.ImageThumb}
                                        width="100%"
                                        id={`${DI_mage.ObjectFieldId}_thumb_img`}
                                        />
                                    : 
                                    null
                               }                                                                                                      
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
                                    <img src={RemoveImg} />
                                    <span>{localization.Delete}</span>
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
                                      {
                                        this.props.newFields? 
                                            this.props.newFields.map((data, key)=>{
                                                console.log(data.key, DI_mage.id)  
                                                if(data.img){
                                                    if(data.key == DI_mage.id){ 
                                                        if(this.state.ImageCachingAr == false){
                                                            this.setState({
                                                                ImageCachingAr: true
                                                            })
                                                        }                                                                                                    
                                                        return  <img
                                                                    // src={DI_mage.ImageThumb.split('/data/')[0].replace('cache','')+ data.value}
                                                                    src={data.value? DI_mage.ImageThumb.split('/data/')[0].replace('cache','')+ data.value : DI_mage.ImageThumb.split('image/cache/')[0]+Paths.srcClearImage}
                                                                    key={key}
                                                                    width="100%"
                                                                    id={`${DI_mage.ObjectFieldId}_thumb_img`}
                                                                />                                                       
                                                       }
                                                }
                                            })
                                        : 
                                            null                                                                          
                                    }
                                    {
                                        this.state.ImageCachingAr == false?
                                            <img
                                                src={DI_mage.ImageThumb}
                                                width="100%"
                                                id={`${DI_mage.ObjectFieldId}_thumb_img`}
                                                />
                                            : 
                                            null
                                    }
                                    {/* <img
                                        src={DI_mage.ImageThumb}
                                        width="100%"
                                        id={`${DI_mage.ObjectFieldId}_thumb_img`}
                                    /> */}
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
                                    <img src={RemoveImg} />
                                      <span>{localization.Delete}</span>
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
                                {
                                        this.props.newFields? 
                                            this.props.newFields.map((data, key)=>{
                                                console.log(data.key, DI_mage.id)  
                                                if(data.img){
                                                    if(data.key == DI_mage.id){ 
                                                        if(this.state.ImageCachingFr == false){
                                                            this.setState({
                                                                ImageCachingFr: true
                                                            })
                                                        }                                                                                                    
                                                        return  <img
                                                                    // src={DI_mage.ImageThumb.split('/data/')[0].replace('cache','')+ data.value}
                                                                    src={data.value? DI_mage.ImageThumb.split('/data/')[0].replace('cache','')+ data.value : DI_mage.ImageThumb.split('image/cache/')[0]+Paths.srcClearImage}
                                                                    key={key}
                                                                    width="100%"
                                                                    id={`${DI_mage.ObjectFieldId}_thumb_img`}
                                                                />                                                       
                                                       }
                                                }
                                            })
                                        : 
                                            null                                                                          
                                    }
                                    {
                                        this.state.ImageCachingFr == false?
                                            <img
                                                src={DI_mage.ImageThumb}
                                                width="100%"
                                                id={`${DI_mage.ObjectFieldId}_thumb_img`}
                                                />
                                            : 
                                            null
                                    }
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
                                    <img src={RemoveImg} />
                                      <span>{localization.Delete}</span>
                                </button>
                            </div>
                        )
                    }
                })
            }
        } else {
            if (Image_data) {
                return Image_data.FieldVals.map((DI_mage, key) => {
                    if (DI_mage.Lang == this.props.codelang) {
                        console.log("DImage" + DI_mage)
                        return (
                            <div className="color__main__content" key={key}>
                                <div className="main__img__content">
                                    {
                                        this.props.newFields? 
                                            this.props.newFields.map((data, key)=>{
                                                console.log(data.key, DI_mage.id)  
                                                if(data.img){
                                                    if(data.key == DI_mage.id){ 
                                                        if(this.state.ImageCaching == false){
                                                            this.setState({
                                                                ImageCaching: true
                                                            })
                                                        }                                                                                                    
                                                        return  <img
                                                                    // src={DI_mage.ImageThumb.split('/data/')[0].replace('cache','')+ data.value}
                                                                    src={data.value? DI_mage.ImageThumb.split('/data/')[0].replace('cache','')+ data.value : DI_mage.ImageThumb.split('image/cache/')[0]+Paths.srcClearImage}
                                                                    key={key}
                                                                    width="100%"
                                                                    id={`${DI_mage.ObjectFieldId}_thumb_img`}
                                                                />                                                       
                                                       }
                                                }
                                            })
                                        : 
                                            null                                                                          
                                    }
                                   
                                    {
                                        this.state.ImageCaching == false?
                                            <img
                                                src={DI_mage.ImageThumb}
                                                width="100%"
                                                id={`${DI_mage.ObjectFieldId}_thumb_img`}
                                                />
                                            : 
                                            null
                                    }
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
                                    <img src={RemoveImg} />
                                      <span>{localization.Delete}</span>
                                </button>
                            </div>
                        )
                    }
                })
            }
        }
    }
    image_upload(e) {
        let _TS = this; // This For React Not JQ.      

        let imageId = `${e.target.value}_image`,
            thumbId = `${e.target.value}_thumb`,
            Id = `${e.target.value}`,
            objectFieldtImageId = `${e.target.getAttribute("objectfieldid")}_image`,
            objectFieldthumbId = `${e.target.getAttribute("objectfieldid")}_thumb`;

        let srcImageCurr = document.getElementById(`${objectFieldthumbId}_img`).src,
            storeCode = srcImageCurr.split('/')[5];
        // Save Store Code 
        localStorage.setItem('storeCode', storeCode);

        //updated Id For Image Uploaded.    
        // $('#saveIdImgVal').val(objectFieldtImageId); 
        // if(this.state.IdImgUpload != '' || this.state.IdImgUpload != objectFieldthumbId){
        //     this.setState({IdImgUpload: objectFieldthumbId})
        // }


        console.log('---->', storeCode, ' ', localStorage.getItem('storeCode'))

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

                //TEst  
                // let ImageSaving = [];
                // ImageSaving.push(JSON.parse(localStorage.getItem('ImageSaving')));
                // localStorage.setItem('ImageSaving', JSON.stringify(ImageSaving));            
                // $('body').on('click','a.thumbnail', function(){
                //     console.log(Id, '------')
                //     let  ImageValue = $(this).attr('data-filepath');
                //     let jsonFormatImgVal = { "key":Id, "value": ImageValue,  "img": true };   

                //     console.log(jsonFormatImgVal)                
                //     _TS._sendSavedData(jsonFormatImgVal);                    
                // })

                //End Test
            }
        })
            .then(() => {
                let jsonFormatImgVal,
                    ImageValue;
                // $('body').on('click', '#modal-image', function () { 
                // $('body').on('click','a.thumbnail', function(){
                //     console.log(imageId, '------')
                //     ImageValue = $(this).attr('data-filepath');
                //     jsonFormatImgVal = { "key":e.target.value, "value": ImageValue,  "img": true };                                                                    
                //     console.log(jsonFormatImgVal)                
                //     //_TS._sendSavedData(jsonFormatImgVal);

                //     // $('#'+ e.target.value + "_thumb" ).attr('src', $(this).find('img').attr('src'))
                //     // $('#'+ e.target.value + "_thumb" ).attr('src',ImageValue )
                //     //$('.setting--sidebar__controls.save .check').trigger('click');
                // })
            })

        //      //Test            
        //     // $('body').on('click', '#modal-image', function () {            
        //     //     let currentImageLength = $('.current_value_image').length,
        //     //         currentImage = $('.current_value_image');

        //     //     for (let i = 0; i < currentImageLength; i++) {
        //     //         if (currentImage[i].value != 'currentValue') {   
        //     //             console.log(chackDataSaving, '-------');                                        
        //     //             /**
        //     //              * Click For model -- check when choose Image for media maneger
        //     //              */
        //     //             let keyJson = currentImage[i].getAttribute('imagevalid').replace('_image', ''),
        //     //                 ValueJson = currentImage[i].value,
        //     //                 idThumbImage = currentImage[i].id.replace("_image", ''),
        //     //                 jsonFormatImgVal = { "key": keyJson, "value": ValueJson };

        //     //             // _TS._sendSavedData(jsonFormatImgVal);                   
        //     //             //Test
        //     //             if (chackDataSaving) {
        //     //                 console.log("_TS.props.newFields",_TS.props.newFields)          
        //     //                 let x = _TS.props.newFields; // first input 
        //     //                 let s = -1;
        //     //                 x.map((d, key) => {
        //     //                     if (d.key == jsonFormatImgVal.key) {
        //     //                         d.value = jsonFormatImgVal.value;
        //     //                         _TS.props.dispatch(SaveSCFLD.newValFields(x))
        //     //                         // break;
        //     //                     } else {
        //     //                         s = 0;
        //     //                     }
        //     //                 })
        //     //                 if (s >= 0) {
        //     //                     x.push(jsonFormatImgVal);
        //     //                     _TS.props.dispatch(SaveSCFLD.newValFields(x));
        //     //                     console.log(x)
        //     //                 }
        //     //             } else {
        //     //                 let x2 = [];
        //     //                     x2.push(jsonFormatImgVal);
        //     //                 _TS.props.dispatch(SaveSCFLD.newValFields(x2));
        //     //                 console.log("jsonFormatImgVal",x2)    
        //     //                 // _TS.props.dispatch(SaveSCFLD.newValFields(jsonFormatImgVal));                        
        //     //             }
        //     //             //EndTest                                   

        //     //             let srcImage = document.getElementById(`${idThumbImage}_thumb_img`);                   

        //     //             setTimeout(() => {
        //     //                 let StoreCode = localStorage.getItem('storeCode');                                                
        //     //                 // Change Src Image  
        //     //                 window.location.hostname == 'localhost' ?
        //     //                     srcImage.src = "http://qaz123.expandcart.com" + Paths.ecdata + StoreCode + Paths.saveImageData + ValueJson                    
        //     //                 :
        //     //                     srcImage.src = Paths.ecdata + StoreCode + Paths.saveImageData + ValueJson;                        
        //     //             }, 200);
        //     //         }
        //     //     }
        //     // }) 
        //     //End Test
        // })
        // $.startImageManager(objectFieldtImageId, objectFieldthumbId);       
    }
    clear_image(e) {
        // console.log(e.target.parentElement.value)
        //Create Json Format To Save It.  
        let jsonFormatImg = { "key": e.target.parentElement.value, "value": '', "img": true };
        // Save Clear Data.          
        this._sendSavedData(jsonFormatImg);
        setTimeout(() => {
            // console.log(document.getElementById(`Image_${e.target.value}`));
            let imageClearValId = e.target.parentElement.getAttribute("imageclearvalid");
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
                srcImageClear.src = Paths.ecdata + StoreCode + Paths.srcClearImage
        }, 100)
    }
    _sendSavedData = (jsonFormat) => {
        // Sart Sand Data To Save It:
        if (this.props.newFields) {
            console.log("this.props.newFields", this.props.newFields, "jsonFormat", jsonFormat)
            let x = this.props.newFields; // first input           
            let s = -1;
            x.map((d, key) => {
                if (d.key === jsonFormat.key) {
                    console.log(d.key, jsonFormat.key, 'compare');
                    // debugger;
                    d.value = jsonFormat.value;
                    this.props.dispatch(SaveSCFLD.newValFields(x));
                    // this.props.dispatch(SaveSCFLD.changeImgForSelector(x));
                    // break;
                } else {
                    s = 0;
                }
            })
            if (s >= 0) {
                x.push(jsonFormat);
                this.props.dispatch(SaveSCFLD.newValFields(x));
                // this.props.dispatch(SaveSCFLD.changeImgForSelector(x));

            }
        } else {
            let x2 = []
            let lg = x2.push(jsonFormat);
            this.props.dispatch(SaveSCFLD.newValFields(x2));
            // this.props.dispatch(SaveSCFLD.changeImgForSelector(x2));

        }
        // Close Sand Data To Save It
    }
    renderTooltip = (props) => (
        <Tooltip id="button-tooltip" {...props}>
            {this.props.FieldImage.Description}            
        </Tooltip>        
    );
    render() {
        const {getlanguages} = this.props;
        return (
            <div className={`setting--sidebar__color ${this.props.FieldImage.field_id ? ' setting--sidebar__color__v2':' setting--sidebar__color__v2 mr-0'}`}>
                {
                    this.props.FieldImage.Name?    
                        <h4 className={`setting--sidebar__header`} >
                            {this.props.FieldImage.Name}                    
                            {/* {
                                this.props.FieldImage.Description ? 
                                    <OverlayTrigger
                                        placement={getlanguages? getlanguages.data.ActiveLanguage.code == "ar"? "left": "right" : null}
                                        delay={{ show: 250, hide: 350 }}
                                        overlay={this.renderTooltip}
                                    >
                                        <Button variant="success setting--icon__setting">                            
                                            <svg fill="#a4a4a4" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" width="18px" height="18px">
                                                <path d="M 12 2 C 6.4889971 2 2 6.4889971 2 12 C 2 17.511003 6.4889971 22 12 22 C 17.511003 22 22 17.511003 22 12 C 22 6.4889971 17.511003 2 12 2 z M 12 4 C 16.430123 4 20 7.5698774 20 12 C 20 16.430123 16.430123 20 12 20 C 7.5698774 20 4 16.430123 4 12 C 4 7.5698774 7.5698774 4 12 4 z M 11 7 L 11 9 L 13 9 L 13 7 L 11 7 z M 11 11 L 11 17 L 13 17 L 13 11 L 11 11 z"/>
                                            </svg>
                                        </Button>
                                    </OverlayTrigger>
                                : 
                                    null
                            }                     */}
                        </h4>
                    :
                        null
                }
                <div className="sidebar__color__main" id = {this.props.FieldImage.field_id}> 
                {
                    this.props.FieldImage.Description ?  
                        <h6 className='silder__color--hint'> {this.props.FieldImage.Description}</h6> 
                    : 
                        null
                }

                    {this._renderDataImage()}
                </div>
            </div>
        )
    }
}
const mapStateToProps = state => ({
    newFields: state.newValFields.newFields,
    getlanguages: state.getlanguages.GetLangs,
})
export default connect(mapStateToProps)(ImageCom)