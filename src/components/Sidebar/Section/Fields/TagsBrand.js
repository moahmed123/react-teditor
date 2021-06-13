import React, { Component } from 'react';
import { SaveSCFLD, SEARBRAND } from '../../../../actions';
import { connect } from 'react-redux';
import Select from 'react-select';

class TagsBrand extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedOption: null,
            inputValue: '',
            tagsidFieldEn : '',
            tagsidFieldAr : '',
            tagsidFieldFr : '',
            SelectHeight  : ''
        };
    }

    componentDidMount() {
        //Add Default Value For Selection
        this._addDefaultVal();
        this.props.dispatch(SEARBRAND.searchBrands());

    }
    _addDefaultVal = () => {
        if (this.props.codelang == 'en') {
            let tagsxcd = [];
            this.props.FieldBrand.FieldVals.map((dataTagCat, key) => {
                if (dataTagCat.Lang == 'en') {
                    this.setState({tagsidFieldEn:dataTagCat.id }); // To Save Id For Field En
                    dataTagCat['tags-brand'].map((VCdataTags, key) => {
                        let jsonFormat = { value: VCdataTags.value, label: VCdataTags.display }
                        tagsxcd.push(jsonFormat);
                    })
                    this.setState({ 
                        selectedOption: tagsxcd,
                        //SelectHeight: tagsxcd.length > 1 ? tagsxcd.length > 0 && tagsxcd.length < 3 ? tagsxcd.length * 60 : tagsxcd.length * 45 : null 
                        SelectHeight: tagsxcd.length == 1 ? tagsxcd.length * 80 : tagsxcd.length > 1 ? tagsxcd.length * 45 + 15 : null
                    })
                }
            })
        }
        if (this.props.codelang == 'ar') {
            let tagsxcd = [];
            this.props.FieldBrand.FieldVals.map((dataTagCat, key) => {
                if (dataTagCat.Lang == 'ar') {
                    this.setState({tagsidFieldAr:dataTagCat.id }); // To Save Id For Field Ar
                    dataTagCat['tags-brand'].map((VCdataTags, key) => {
                        let jsonFormat = { value: VCdataTags.value, label: VCdataTags.display }
                        tagsxcd.push(jsonFormat);
                    })
                    this.setState({ 
                        selectedOption: tagsxcd,
                        //SelectHeight: tagsxcd.length > 1 ? tagsxcd.length > 0 && tagsxcd.length < 3 ? tagsxcd.length * 60 : tagsxcd.length * 45 : null 
                        SelectHeight: tagsxcd.length == 1 ? tagsxcd.length * 80 : tagsxcd.length > 1 ? tagsxcd.length * 45 + 15 : null
                    })
                }
            })
        }
        if (this.props.codelang == 'fr') {
            let tagsxcd = [];
            this.props.FieldBrand.FieldVals.map((dataTagCat, key) => {
                if (dataTagCat.Lang == 'fr') {
                    this.setState({tagsidFieldFr:dataTagCat.id }); // To Save Id For Field Fr
                    dataTagCat['tags-brand'].map((VCdataTags, key) => {
                        let jsonFormat = { value: VCdataTags.value, label: VCdataTags.display }
                        tagsxcd.push(jsonFormat);
                    })
                    this.setState({ 
                        selectedOption: tagsxcd,
                        //SelectHeight: tagsxcd.length > 1 ? tagsxcd.length > 0 && tagsxcd.length < 3 ? tagsxcd.length * 60 : tagsxcd.length * 45 : null 
                        SelectHeight: tagsxcd.length == 1 ? tagsxcd.length * 80 : tagsxcd.length > 1 ? tagsxcd.length * 45 + 15 : null
                    })
                }
            })
        }
    }
    handleChange = selectedOption => {
        
        this.setState({ selectedOption });
        let idFieldTagsbrand ; 
        if (this.props.codelang == 'en'){
            idFieldTagsbrand = this.state.tagsidFieldEn;            
        }
        else if (this.props.codelang == 'ar'){
            idFieldTagsbrand = this.state.tagsidFieldAr;            
        }
        else if (this.props.codelang == 'fr'){
            idFieldTagsbrand = this.state.tagsidFieldFr;            
        }
        console.log(`Option selected:`, selectedOption , idFieldTagsbrand);
        // Set Height For Select Option Categories         
        // let height = document.querySelector('.select__value-container').offsetHeight;
        let height;      
        if(selectedOption){
            if(selectedOption.length > 0 && selectedOption.length < 2){
                height =  75 + 'px';
            } else if(selectedOption.length > 1){
                height = (selectedOption.length * 35) + 33 + 'px';
            }else{
                height = 'auto';
            }
        }       
        this.setState({
            SelectHeight: height
        })        
        // End Set Height 

        let jsonFormatbrand; 
        let textValbrand; 
        if(selectedOption){
            if(selectedOption.length > 1){
                // Map 
                const optionLen = selectedOption.length;
                selectedOption.map((selectOpData, key)=>{
                    if(key == 0 ){
                        textValbrand = selectOpData.value + ',';    
                    }else if(optionLen == key + 1){
                        // last OF Map 
                        textValbrand += selectOpData.value;
                        console.log('last Of Map ')
                    }
                    else{
                        textValbrand += selectOpData.value + ',';
                    }
                    
                })                
                jsonFormatbrand = {"key": idFieldTagsbrand,"value": textValbrand};
            }else if (selectedOption.length == 1){
                jsonFormatbrand = {"key": idFieldTagsbrand,"value": selectedOption[0].value};
            }else if (selectedOption.length == []){
                jsonFormatbrand = {"key": idFieldTagsbrand,"value": ''};
            }

        }else{
            jsonFormatbrand = {"key": idFieldTagsbrand,"value": ''}             
        }         
        console.log(jsonFormatbrand)
        
        // Sart Sand Data To Save It:
        if(this.props.newFields){                        
            let x = this.props.newFields; // first input 
            let s = -1;
            x.map((d, key)=>{
                if(d.key == jsonFormatbrand.key){
                    d.value =  jsonFormatbrand.value;                    
                    this.props.dispatch(SaveSCFLD.newValFields(x))
                    // break;
                }else{
                    s = 0;
                }
            })
            if(s >= 0 ){
                x.push(jsonFormatbrand);
                this.props.dispatch(SaveSCFLD.newValFields(x)); 
            }         
        }else{
            let x2 = []
            let lg = x2.push(jsonFormatbrand);
            this.props.dispatch(SaveSCFLD.newValFields(x2));            
        }
        // Close Sand Data To Save It
    };
    // Send Val Key For API To Get Resault : 
    handleInputValueChange = inputValue => {
        this.setState({ inputValue });
        console.log(`Option selected:`, inputValue);
        if (inputValue) {
            this.props.dispatch(SEARBRAND.searchBrands(inputValue));
        }
    };    
    render() {
        const { selectedOption, inputValue } = this.state;
        let optionsbrands = [];
        if (this.props.searchBrands) {
            let sectionOptions = [];
            this.props.searchBrands.map((data, key) => {
                let jsonFormat = { value: data.value, label: data.display }
                sectionOptions.push(jsonFormat);
            })
            optionsbrands = sectionOptions; // Set 
        }

        return (
            <div className="setting--sidebar__color mb-3" style={{height: this.state.SelectHeight}}>
                {
                    this.props.FieldBrand.Name != '' ? 
                        <h4 className="setting--sidebar__header"> {this.props.FieldBrand.Name} </h4>             
                    : 
                        null
                }                
                <Select
                    isMulti
                    name="colors"
                    value={selectedOption}
                    options={optionsbrands}
                    className="basic-multi-select"
                    classNamePrefix="select"
                    onChange={this.handleChange}
                    inputValue={inputValue}
                    onInputChange={this.handleInputValueChange}
                />
            </div>
        )
    }
}
const mapStateToProps = state => ({
    newFields: state.newValFields.newFields,    
    searchBrands: state.searchBrands.dataBrands,
})
export default connect(mapStateToProps)(TagsBrand)