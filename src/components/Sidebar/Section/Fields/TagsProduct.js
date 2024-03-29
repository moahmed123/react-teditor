import React, { Component } from 'react';
import { SaveSCFLD, SeaPro } from '../../../../actions';
import { connect } from 'react-redux';
import Select from 'react-select';

class TagsProduct extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedOption: null,
            inputValue: '',
            tagsidFieldEn : '',
            tagsidFieldAr : '',
            tagsidFieldFr : '',
            tagsidFieldTr: '',
            SelectHeight  : ''
        };
    }

    componentDidMount() {
        //Add Default Value For Selection
        this._addDefaultVal();

          // Use defaultProduct To Show It First click for Field.
          let defaultProduct = '';          
          this.props.dispatch(SeaPro.searchProducts(defaultProduct));

    }
    _addDefaultVal = () => {
        /***
         * TODO: Will Revoke Lang To Not Duplicated coding. 
         * Revoke Done on some multi language at Tags Category 
         */        
         this.props.FieldTagsPro.FieldVals.map((dataTagPro, key) => {
            if(dataTagPro.Lang == 'en'){
                this.setState({tagsidFieldEn: dataTagPro.id});
            }else if(dataTagPro.Lang == 'ar') {
                this.setState({tagsidFieldAr: dataTagPro.id});
            }else if(dataTagPro.Lang == 'fr') {
                this.setState({tagsidFieldFr: dataTagPro.id});
            }else if(dataTagPro.Lang == 'tr') {
                this.setState({tagsidFieldTr: dataTagPro.id});
            }
        }) 
        if (this.props.codelang == 'en') {
            let tagsxcd = [];
            this.props.FieldTagsPro.FieldVals.map((dataTagPro, key) => {
                if (dataTagPro.Lang == 'en') {
                    this.setState({tagsidFieldEn:dataTagPro.id }); // To Save Id For Field En
                    dataTagPro["tags-product"].map((VCdataTags, key) => {
                        let jsonFormat = { value: VCdataTags.value, label: VCdataTags.display }
                        tagsxcd.push(jsonFormat);
                        
                    })
                    console.log(this.state.selectedOption,"tagsxcd")
                    this.setState({
                        selectedOption: tagsxcd,
                        // collect Default Height
                        SelectHeight: tagsxcd.length == 1 ? tagsxcd.length * 80 : tagsxcd.length > 1 ? tagsxcd.length * 45 + 15 : null
                        //SelectHeight: tagsxcd.length > 1 ? tagsxcd.length > 0 && tagsxcd.length < 3 ? tagsxcd.length * 60 : tagsxcd.length * 45 : null
                    })
                }
            })
        }
        if (this.props.codelang == 'ar') {
            let tagsxcd = [];
            this.props.FieldTagsPro.FieldVals.map((dataTagPro, key) => {
                if (dataTagPro.Lang == 'ar') {
                    this.setState({tagsidFieldAr:dataTagPro.id }); // To Save Id For Field Ar
                    dataTagPro["tags-product"].map((VCdataTags, key) => {
                        let jsonFormat = { value: VCdataTags.value, label: VCdataTags.display }
                        tagsxcd.push(jsonFormat);                        
                    })
                    console.log(this.state.selectedOption,"tagsxcd")
                    this.setState({ 
                        selectedOption: tagsxcd,
                        SelectHeight: tagsxcd.length == 1 ? tagsxcd.length * 80 : tagsxcd.length > 1 ? tagsxcd.length * 45 + 15 : null
                        //SelectHeight: tagsxcd.length > 1 ? tagsxcd.length > 0 && tagsxcd.length < 3 ? tagsxcd.length * 60 : tagsxcd.length * 45 : null
                    })
                }
            })
        }
        if (this.props.codelang == 'fr') {
            let tagsxcd = [];
            this.props.FieldTagsPro.FieldVals.map((dataTagPro, key) => {
                if (dataTagPro.Lang == 'fr') {
                    this.setState({tagsidFieldFr:dataTagPro.id }); // To Save Id For Field Fr
                    dataTagPro["tags-product"].map((VCdataTags, key) => {
                        let jsonFormat = { value: VCdataTags.value, label: VCdataTags.display }
                        tagsxcd.push(jsonFormat);
                    })
                    this.setState({ 
                        selectedOption: tagsxcd ,
                        //SelectHeight: tagsxcd.length > 1 ? tagsxcd.length > 0 && tagsxcd.length < 3 ? tagsxcd.length * 60 : tagsxcd.length * 45 : null 
                        SelectHeight: tagsxcd.length == 1 ? tagsxcd.length * 80 : tagsxcd.length > 1 ? tagsxcd.length * 45 + 15 : null
                    })
                }
            })
        }
        if (this.props.codelang == 'tr') {
            let tagsxcd = [];
            this.props.FieldTagsPro.FieldVals.map((dataTagPro, key) => {
                if (dataTagPro.Lang == 'tr') {
                    this.setState({tagsidFieldTr:dataTagPro.id }); // To Save Id For Field En
                    dataTagPro["tags-product"].map((VCdataTags, key) => {
                        let jsonFormat = { value: VCdataTags.value, label: VCdataTags.display }
                        tagsxcd.push(jsonFormat);
                    })
                    this.setState({
                        selectedOption: tagsxcd,
                        // collect Default Height
                        SelectHeight: tagsxcd.length == 1 ? tagsxcd.length * 80 : tagsxcd.length > 1 ? tagsxcd.length * 45 + 15 : null
                        //SelectHeight: tagsxcd.length > 1 ? tagsxcd.length > 0 && tagsxcd.length < 3 ? tagsxcd.length * 60 : tagsxcd.length * 45 : null
                    })
                }
            })
        }

    }
    handleChange = selectedOption => {
        this.setState({ selectedOption });
        let idFieldTagsCat ; 
        if (this.props.codelang == 'en'){
            idFieldTagsCat = this.state.tagsidFieldEn;            
        }
        else if (this.props.codelang == 'ar'){
            idFieldTagsCat = this.state.tagsidFieldAr;            
        }
        else if (this.props.codelang == 'fr'){
            idFieldTagsCat = this.state.tagsidFieldFr;            
        }
        else if (this.props.codelang == 'tr'){
            idFieldTagsCat = this.state.tagsidFieldTr;            
        }
        console.log(`Option selected:`, selectedOption , idFieldTagsCat);
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
        let jsonFormatCat; 
        let textValCat; 
        if(selectedOption){
            if(selectedOption.length > 1){
                // Map 
                const optionLen = selectedOption.length;
                selectedOption.map((selectOpData, key)=>{
                    if(key == 0 ){
                        textValCat = selectOpData.value + ',';    
                    }else if(optionLen == key + 1){
                        // last OF Map 
                        textValCat += selectOpData.value;
                        console.log('last Of Map ')
                    }
                    else{
                        textValCat += selectOpData.value + ',';
                    }
                    
                })                
                jsonFormatCat = {"key": idFieldTagsCat,"value": textValCat};
            }else if (selectedOption.length == 1){
                jsonFormatCat = {"key": idFieldTagsCat,"value": selectedOption[0].value};
            }else if (selectedOption.length == []){
                jsonFormatCat = {"key": idFieldTagsCat,"value": ''};
            }

        }else{
            jsonFormatCat = {"key": idFieldTagsCat,"value": ''}             
        }         
        console.log(jsonFormatCat)
        
        // Sart Sand Data To Save It:
        if(this.props.newFields){                        
            let x = this.props.newFields; // first input 
            let s = -1;
            x.map((d, key)=>{
                if(d.key == jsonFormatCat.key){
                    d.value =  jsonFormatCat.value;                    
                    this.props.dispatch(SaveSCFLD.newValFields(x))
                    // break;
                }else{
                    s = 0;
                }
            })
            if(s >= 0 ){
                x.push(jsonFormatCat);
                this.props.dispatch(SaveSCFLD.newValFields(x)); 
            }         
        }else{
            let x2 = []
            let lg = x2.push(jsonFormatCat);
            this.props.dispatch(SaveSCFLD.newValFields(x2));            
        }
        // Close Sand Data To Save It
    };
    // Send Val Key For API To Get Resault : 
    handleInputValueChange = inputValue => {
        this.setState({ inputValue });
        console.log(`Option selected:`, inputValue);
        if (inputValue) {
            this.props.dispatch(SeaPro.searchProducts(inputValue))
        }
    };    
    render() {
        const { selectedOption, inputValue } = this.state;
        let optionsCategories = [];
        if (this.props.Prodata) {
            let sectionOptions = [];
            this.props.Prodata.map((data, key) => {
                let jsonFormat = { value: data.value, label: data.display }
                sectionOptions.push(jsonFormat);
            })
            optionsCategories = sectionOptions; // Set            
        }

        return (
            <div className="setting--sidebar__color mb-3" style={{height: this.state.SelectHeight}}>
                {
                    this.props.FieldTagsPro.Name != '' ? 
                        <h4 className="setting--sidebar__header"> {this.props.FieldTagsPro.Name} </h4>             
                    : 
                        null
                }                 
                <Select
                    isMulti
                    name="colors"
                    value={selectedOption}
                    options={optionsCategories}
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
    Prodata: state.searchProducts.ProData
})
export default connect(mapStateToProps)(TagsProduct)