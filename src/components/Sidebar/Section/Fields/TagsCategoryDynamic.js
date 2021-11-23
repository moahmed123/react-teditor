import React, { Component } from 'react';
import { SaveSCFLD, SeaCate } from '../../../../actions';
import { connect } from 'react-redux';
import Select from 'react-select';
import localization from '../../../../localization/localization';

class TagsCategoryDynamic extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sectionId: null,
            selectedOption: null,
            selectedOptionMultiLang: null,
            inputValue: '',
            tagsidFieldEn : '',            
            tagsidFieldAr : '',
            tagsidFieldFr : '',
            tagsidFieldTr: '',
            SelectHeight: ''
        };
    }

    componentDidMount() {        
        // Test 
        // if(localStorage.getItem('Data_Saving') == null){
        //     localStorage.setItem('Data_Saving','')
        // }   
        this.setState({sectionId:this.props.FieldTagsData.id})
        console.log(this.props.FieldTagsData.id,"this.props.FieldTagsData")        
        console.log(this.state.selectedOptionMultiLang, "this.state.selectedOptionMultiLang")    
        // End Test 

        //Add Default Value For Selection

        // this._addDefaultVal();
        
        // Use defaultCategories To Show It First click for Field.
        let defaultCategories = '';
        this.props.dispatch(SeaCate.searchCategories(defaultCategories));

        // console.log("inputValue ==> ",this.state.inputValue)

    }
    _addDefaultVal = () => {
        /***
         * TODO: Will Revoke Lang To Not Duplicated and Repeat coding. 
         */

        //1- Revoke Duplicated Code For Multi Language.         
            let value_categories = {};
            let value_categories_lang = [];
            // console.log("11111111 => ",this.props.FieldTagsData)
            
            this.props.FieldTagsData.FieldVals.map((dataTagCat, key) => {    
                // console.log("11111111 => ",dataTagCat)
                // return false                
                    dataTagCat['tags-category-dynamic'].map((VCdataTags, key) => {                        
                        let jsonFormat = { value: VCdataTags.value, label: VCdataTags.display }
                        //"{"a":1,"b":2,"c":{"d":1,"e":[1,2]}}"                        
                        value_categories_lang.push(jsonFormat);
                        if (key + 1 == dataTagCat['tags-category-dynamic'].length ){                                                        
                            let SinglelangCate = dataTagCat.Lang
                            value_categories[SinglelangCate] = value_categories_lang;
                            value_categories_lang =[]; // To Clear Array
                        } 
                    })  
                    console.log(value_categories,'value_categories', Object.keys(value_categories).length);
                    // console.log(value_categories['en']);
                    // console.log(value_categories['ar']);                        
                    this.setState({ 
                        selectedOptionMultiLang: value_categories,
                        // Collect Default Height                         
                        SelectHeight: Object.keys(value_categories).length != 0 ? 
                            value_categories['en'] ?
                                value_categories['en'].length == 1 ? 
                                    value_categories['en'].length * 80 
                                    : 
                                    value_categories['en'].length > 1 ? 
                                        value_categories['en'].length * 45 + 15 
                                        : 
                                        null 
                                :
                                null
                            :
                            null
                    });                
            })        
        //End Revoke Duplicated Code For Multi Language. 

        return false 
         this.props.FieldTagsData.FieldVals.map((dataTagCat, key) => {
            if(dataTagCat.Lang == 'en'){
                this.setState({tagsidFieldEn: dataTagCat.id});
            }else if(dataTagCat.Lang == 'ar') {
                this.setState({tagsidFieldAr: dataTagCat.id});
            }else if(dataTagCat.Lang == 'fr') {
                this.setState({tagsidFieldFr: dataTagCat.id});
            }else if(dataTagCat.Lang == 'tr') {
                this.setState({tagsidFieldTr: dataTagCat.id});
            }
        }) 
        if (this.props.codelang == 'en') {
            let tagsxcd = [];
            this.props.FieldTagsData.FieldVals.map((dataTagCat, key) => {
                if (dataTagCat.Lang == 'en') {
                    this.setState({tagsidFieldEn:dataTagCat.id }); // To Save Id For Field En
                    dataTagCat['tags-category-dynamic'].map((VCdataTags, key) => {
                        let jsonFormat = { value: VCdataTags.value, label: VCdataTags.display }
                        tagsxcd.push(jsonFormat);
                    })             
                    console.log("dddc ", tagsxcd.length );  
                    console.log("dddc ", tagsxcd);    
                    
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
                    dataTagCat['tags-category-dynamic'].map((VCdataTags, key) => {
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
                    dataTagCat['tags-category-dynamic'].map((VCdataTags, key) => {
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
        if (this.props.codelang == 'tr') {
            let tagsxcd = [];
            this.props.FieldTagsData.FieldVals.map((dataTagCat, key) => {
                if (dataTagCat.Lang == 'tr') {
                    this.setState({tagsidFieldTr:dataTagCat.id }); // To Save Id For Field En
                    dataTagCat['tags-category-dynamic'].map((VCdataTags, key) => {
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
    }
    handleChange = selectedOption => {
        
        //console.log(" 1- selectedOption ===> ",selectedOption, ' 1- selectedOptionMultiLang ==> ', this.state.selectedOptionMultiLang[this.props.codelang])
        this.state.selectedOptionMultiLang[this.props.codelang] = selectedOption;
       console.log(" 2- selectedOption ===> ",selectedOption, ' 2- selectedOptionMultiLang ==> ', this.state.selectedOptionMultiLang[this.props.codelang])
       console.log(this.state.selectedOptionMultiLang)

       //Test           
        localStorage.setItem(`Data_Cat_Saving_${this.state.sectionId}_${this.props.codelang}`, JSON.stringify(this.state.selectedOptionMultiLang));
        // console.log(localStorage.getItem(`Data_Saving_${this.state.sectionId}_${this.props.codelang}`), "DataCateSaving")
       //End TEst

        this.setState({ selectedOption });
        let idFieldTagsCat ; 
        /***
         * TODO: Will Revoke Lang To Not Duplicated coding. 
         */
        if (this.props.codelang == 'en'){
            idFieldTagsCat = this.state.tagsidFieldEn;            
        }
        else if (this.props.codelang == 'ar'){
            idFieldTagsCat = this.state.tagsidFieldAr;            
        }
        else if (this.props.codelang == 'fr'){
            idFieldTagsCat = this.state.tagsidFieldFr;  
        }else if (this.props.codelang == 'tr'){
                idFieldTagsCat = this.state.tagsidFieldTr;            
        }else{
            idFieldTagsCat = this.state.tagsidFieldEn;
        }

        console.log(`Id Option selected change:`, idFieldTagsCat);
        console.log(`Option selected change:`, selectedOption);

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
        
        // Work For Revoke Save Mutli Language 
        let jsonFormatCat; 
        let textValCat; 
        const { selectedOptionMultiLang } = this.state;
        console.log('Object.keys(selectedOptionMultiLang).length', Object.keys(selectedOptionMultiLang).length)

        if(Object.keys(selectedOptionMultiLang).length > 0){
            // Condation to check when remove all data.
            if(selectedOptionMultiLang[this.props.codelang]){            
                const optionLen = selectedOptionMultiLang[this.props.codelang].length;
                if(selectedOptionMultiLang[this.props.codelang].length > 1){
                    // Map                 
                    //selectedOption
                    selectedOptionMultiLang[this.props.codelang].map((selectOpData, key)=>{
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
                }else if (optionLen == 1){
                    jsonFormatCat = {"key": idFieldTagsCat,"value": selectedOptionMultiLang[this.props.codelang][0].value};
                }else if (optionLen == []){
                    jsonFormatCat = {"key": idFieldTagsCat,"value": ''}; // Field Empty Data.
                }
            }else{
                jsonFormatCat = {"key": idFieldTagsCat,"value": ''}; // Field Empty Data.
            }
        }else{
            jsonFormatCat = {"key": idFieldTagsCat,"value": ''}             
        }         
        console.log("jsonFormatCat",jsonFormatCat)
        // End Work For Revoke Save Mutli Language 


        // let jsonFormatCat; 
        // let textValCat; 
        // if(selectedOption){
        //     if(selectedOption.length > 1){
        //         // Map 
        //         const optionLen = selectedOption.length;
        //         selectedOption.map((selectOpData, key)=>{
        //             if(key == 0 ){
        //                 textValCat = selectOpData.value + ',';    
        //             }else if(optionLen == key + 1){
        //                 // last OF Map 
        //                 textValCat += selectOpData.value;
        //                 console.log('last Of Map ')
        //             }
        //             else{
        //                 textValCat += selectOpData.value + ',';
        //             }
                    
        //         })                
        //         jsonFormatCat = {"key": idFieldTagsCat,"value": textValCat};
        //     }else if (selectedOption.length == 1){
        //         jsonFormatCat = {"key": idFieldTagsCat,"value": selectedOption[0].value};
        //     }else if (selectedOption.length == []){
        //         jsonFormatCat = {"key": idFieldTagsCat,"value": ''};
        //     }

        // }else{
        //     jsonFormatCat = {"key": idFieldTagsCat,"value": ''}             
        // }         
        // console.log(jsonFormatCat)
        
        // Sart Sand Data To Save It: TODO: Will Change Convantion For Word.
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
        const { selectedOption, inputValue, selectedOptionMultiLang } = this.state;
        let optionsCategories = [];
        if (this.props.cateData) {            
            let sectionOptions = [];
            
            this.props.cateData.map((data, key) => {
                let jsonFormat = { value: data.value, label: data.display }
                sectionOptions.push(jsonFormat);               
            })            
            optionsCategories = sectionOptions; // Set 
        }
           
         /*
          ** Start To Saved Categories Data, to don't change data when Switching language.
          **             
          */
        if(localStorage.getItem(`Data_Cat_Saving_${this.state.sectionId}_${this.props.codelang}`)){                                   
            let categories_data_saving = JSON.parse(localStorage.getItem(`Data_Cat_Saving_${this.state.sectionId}_${this.props.codelang}`));
            let categories_Lang_SV = categories_data_saving[this.props.codelang];
            let SELMultiLang_SV = this.state.selectedOptionMultiLang[this.props.codelang];

            console.log(categories_Lang_SV, SELMultiLang_SV )
            /*
             ** Start To Saved Categories Data, to don't change data when Switching language.
             **             
             */
            if(JSON.stringify(categories_Lang_SV) === JSON.stringify(SELMultiLang_SV)){
                //console.log(true)
                // Other code hare. 
                // it's same object. 
            }else{
                // console.log(false);
                // console.log(this.state.selectedOptionMultiLang)
                // console.log(this.state.selectedOptionMultiLang.length)
                // Repalce data for saved by old value. 
                this.state.selectedOptionMultiLang[this.props.codelang] = categories_Lang_SV;
                // To count height for value 
                this.setState({ selectedOption:  categories_Lang_SV});
                console.log(selectedOption.length,"selectedOption------->", categories_Lang_SV.length)
                let height;
                if(categories_Lang_SV){
                    if(categories_Lang_SV.length > 0 && categories_Lang_SV.length < 2){
                        height =  75 + 'px';
                    } else if(categories_Lang_SV.length > 1){
                        height = (categories_Lang_SV.length * 35) + 33 + 'px';
                    }else{
                        height = 'auto';
                    }
                }  
                // To count height for value       
                this.setState({
                    SelectHeight: height
                })                                 
            }              
        }                                            

        console.log(this.state.selectedOptionMultiLang?this.state.selectedOptionMultiLang['ar']:null, "State")
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
                    // value={selectedOption}
                    value={selectedOptionMultiLang? selectedOptionMultiLang[this.props.codelang]? selectedOptionMultiLang[this.props.codelang]: null : null} //this.state.selectedOptionMultiLang.this.props.codelang             
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
export default connect(mapStateToProps)(TagsCategoryDynamic)