import React, { Component } from 'react';
import { SaveSCFLD, SeaCate } from '../../../../actions';
import { connect } from 'react-redux';
import Select from 'react-select';
import localization from '../../../../localization/localization';

class TagsCategory extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedOption: null,
            inputValue: '',
            tagsidFieldEn : '',
            tagsidFieldAr : '',
            tagsidFieldFr : '',
            SelectHeight: ''
        };
    }

    componentDidMount() {
        //Add Default Value For Selection
        this._addDefaultVal();
        
        // Use defaultCategories To Show It First click for Field.
        let defaultCategories = '';
        this.props.dispatch(SeaCate.searchCategories(defaultCategories));

        // console.log("inputValue ==> ",this.state.inputValue)

    }
    _addDefaultVal = () => {
        if (this.props.codelang == 'en') {
            let tagsxcd = [];
            this.props.FieldTagsData.FieldVals.map((dataTagCat, key) => {
                if (dataTagCat.Lang == 'en') {
                    this.setState({tagsidFieldEn:dataTagCat.id }); // To Save Id For Field En
                    dataTagCat['tags-category'].map((VCdataTags, key) => {
                        let jsonFormat = { value: VCdataTags.value, label: VCdataTags.display }
                        tagsxcd.push(jsonFormat);
                    })             
                    console.log("dddc ", tagsxcd.length )      
                    this.setState({ 
                        selectedOption: tagsxcd,
                        //collect Default Height 
                        //SelectHeight: tagsxcd.length > 1 ? tagsxcd.length > 0 && tagsxcd.length < 2 ? tagsxcd.length * 60 : tagsxcd.length * 45 : null
                        SelectHeight: tagsxcd.length == 1 ? tagsxcd.length * 80 : tagsxcd.length > 1 ? tagsxcd.length * 45 + 15 : null
                    });
                }
            })
        }
        if (this.props.codelang == 'ar') {
            let tagsxcd = [];
            this.props.FieldTagsData.FieldVals.map((dataTagCat, key) => {
                if (dataTagCat.Lang == 'ar') {
                    this.setState({tagsidFieldAr:dataTagCat.id }); // To Save Id For Field Ar
                    dataTagCat['tags-category'].map((VCdataTags, key) => {
                        let jsonFormat = { value: VCdataTags.value, label: VCdataTags.display }
                        tagsxcd.push(jsonFormat);
                    })
                    this.setState({ 
                        selectedOption: tagsxcd,
                        SelectHeight: tagsxcd.length == 1 ? tagsxcd.length * 80 : tagsxcd.length > 1 ? tagsxcd.length * 45  + 15: null
                        //tagsxcd.length > 1 ? tagsxcd.length > 0 && tagsxcd.length < 2 ? tagsxcd.length * 60 : tagsxcd.length * 45 : null
                    })
                }
            })
        }
        if (this.props.codelang == 'fr') {
            let tagsxcd = [];
            this.props.FieldTagsData.FieldVals.map((dataTagCat, key) => {
                if (dataTagCat.Lang == 'fr') {
                    this.setState({tagsidFieldFr:dataTagCat.id }); // To Save Id For Field Fr
                    dataTagCat['tags-category'].map((VCdataTags, key) => {
                        let jsonFormat = { value: VCdataTags.value, label: VCdataTags.display }
                        tagsxcd.push(jsonFormat);
                    })
                    this.setState({ 
                        selectedOption: tagsxcd,
                        //SelectHeight: tagsxcd.length > 1 ? tagsxcd.length > 0 && tagsxcd.length < 2 ? tagsxcd.length * 60 : tagsxcd.length * 45 : null})
                        SelectHeight: tagsxcd.length == 1 ? tagsxcd.length * 80 : tagsxcd.length > 1 ? tagsxcd.length * 45 + 15 : null})

                        //tagsxcd.length == 1 ? tagsxcd.length * 60 : agsxcd.length > 1 ? tagsxcd.length * 45 : null})
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
        }else{
            idFieldTagsCat = this.state.tagsidFieldEn;
        }
        console.log(`Option selected change:`, selectedOption , idFieldTagsCat);

        // Set Height For Select Option Categories         
        // let height3 = document.querySele
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
        console.log(height)
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
            this.props.dispatch(SeaCate.searchCategories(inputValue))
        }
    };    
    render() {
        const { selectedOption, inputValue } = this.state;
        let optionsCategories = [];
        if (this.props.cateData) {            
            let sectionOptions = [];
            this.props.cateData.map((data, key) => {
                let jsonFormat = { value: data.value, label: data.display }
                sectionOptions.push(jsonFormat);
            })
            optionsCategories = sectionOptions; // Set 
        }

        return (
            <div className="setting--sidebar__color mb-3" style={{height: this.state.SelectHeight}}>
                {
                    this.props.FieldTagsData.Name != '' ? 
                        <h4 className="setting--sidebar__header"> {this.props.FieldTagsData.Name} </h4>             
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
                    placeholder = {localization.Select}
                    inputValue={inputValue}                    
                    onInputChange={this.handleInputValueChange}
                />
            </div>
        )
    }
}
const mapStateToProps = state => ({
    newFields: state.newValFields.newFields,
    cateData: state.searchCategories.cateData
})
export default connect(mapStateToProps)(TagsCategory)