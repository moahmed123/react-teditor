import React, { Component } from 'react';
import { SaveSCFLD, SeaCate} from '../../../../actions';
import { connect } from 'react-redux';
import Select from 'react-select';

class TagsCategory extends Component {
    state = {
        selectedOption: null,
        inputValue: ''
      };
      handleChange = selectedOption => {
        this.setState({ selectedOption });
        console.log(`Option selected:`, selectedOption);
        if(this.props.newFields){
            let actionSaved = this.props.newFields;
            this.props.dispatch(SaveSCFLD.newValFields(selectedOption,actionSaved));
        }
      };
      handleInputValueChange = inputValue => {
        this.setState({ inputValue });
        console.log(`Option selected:`, inputValue);
        if(inputValue){
            this.props.dispatch(SeaCate.searchCategories(inputValue))
        }

      };   
    _changeCheckboxVal = (e) => {        
        // let newCheckboxVal = {"key": e.target.id,"value": e.target.value,};        
    }
    render() {
        const { selectedOption, inputValue } = this.state;
        let optionsCategories = [];
        if(this.props.cateData){            
            let sectionOptions = [];
            this.props.cateData.map((data, key)=>{   
               let jsonFormat =  { value: data.value, label: data.display }
               sectionOptions.push(jsonFormat);
            })            
            optionsCategories = sectionOptions; // Set 
        }
       
        return (
            <div className="setting--sidebar__color">   
                <h4 className="setting--sidebar__header"> {this.props.FieldData.Name} </h4>
                <Select                    
                    isMulti
                    name="colors"
                    value={selectedOption}
                    options={optionsCategories}
                    className="basic-multi-select"
                    classNamePrefix="select"
                    onChange={this.handleChange}
                    inputValue = {inputValue}
                    onInputChange = {this.handleInputValueChange}                    
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