import React, { Component } from 'react';
import { SaveSCFLD } from '../../../../actions';
import { connect } from 'react-redux';
import { SketchPicker } from 'react-color';

class TagColorPicker extends Component {  
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
            displayColorPicker: false,
            background: null,
            color: null,
            IdColorPicker: null                     
        };
    }
    handleClick = () => {
        this.setState({ displayColorPicker: !this.state.displayColorPicker })
        document.querySelector('body').classList.add('hidden');
        document.querySelector('.Home__sidebar').classList.add('hidden');

    };
    handleClose = () => {
        this.setState({ displayColorPicker: false })
        document.querySelector('body').classList.remove('hidden');
        document.querySelector('.Home__sidebar').classList.remove('hidden');
    };
    openModal = () => this.setState({ isOpen: true });
    closeModal = () => this.setState({ isOpen: false });
       
    _setlangVal = () => {
        const popover = {position: 'absolute',zIndex: '2'}
        const cover = {position: 'fixed',top: '0px',right: '0px',bottom: '0px',left: '0px'}

        if(this.props.codelang == 'en'){                        
            return this.props.FieldColorPicker.FieldVals.map((langInputVal, key) => {                               
                if(langInputVal.Lang == 'en'){                                        
                    return (
                        <div className="color__main__content" key={key}>
                            <div>
                                <div onClick={this.handleClick} className="main__content__circle" style={{ background: langInputVal.Value }}></div>
                                <input type='hidden' value= {langInputVal.id} className='Field_Box_id'/>
                                {
                                    this.state.displayColorPicker ?
                                        <div style={popover}>
                                            <div style={cover} onClick={this.handleClose} />
                                            <SketchPicker onChange={this._changeColorVal} value={langInputVal.id}/>                                                
                                        </div>        
                                    :
                                    null
                                }
                            </div>
                            <div className="main__content__info">
                                <p className = "color-info">{langInputVal.Value}</p>
                            </div>
                        </div>
                    )
                    
                }
            })
        } else if (this.props.codelang == 'ar'){
            return this.props.FieldColorPicker.FieldVals.map((langInputVal, key) => {
                if(langInputVal.Lang == 'ar'){
                    return (
                        <div className="color__main__content" key={key}>
                            <div>
                                <div onClick={this.handleClick} className="main__content__circle" style={{ background: langInputVal.Value }}></div>
                                <input type='hidden' value= {langInputVal.id} className='Field_Box_id'/>
                                {
                                    this.state.displayColorPicker ?
                                        <div style={popover}>
                                            <div style={cover} onClick={this.handleClose} />
                                            <SketchPicker onChange={this._changeColorVal} value={langInputVal.id}/>                                                
                                        </div>        
                                    :
                                    null
                                }
                            </div>
                            <div className="main__content__info">
                                <p className = "color-info">{langInputVal.Value}</p>
                            </div>
                        </div>
                    )
                }
            })
        } else if (this.props.codelang == 'fr'){
            return this.props.FieldColorPicker.FieldVals.map((langInputVal, key) => {
                if(langInputVal.Lang == 'fr'){
                    return (
                        <div className="color__main__content" key={key}>
                            <div>
                                <div onClick={this.handleClick} className="main__content__circle" style={{ background: langInputVal.Value }}></div>
                                <input type='hidden' value= {langInputVal.id} className='Field_Box_id'/>
                                {
                                    this.state.displayColorPicker ?
                                        <div style={popover}>
                                            <div style={cover} onClick={this.handleClose} />
                                            <SketchPicker onChange={this._changeColorVal} value={langInputVal.id}/>                                                
                                        </div>        
                                    :
                                    null
                                }
                            </div>
                            <div className="main__content__info">
                                <p className = "color-info">{langInputVal.Value}</p>
                            </div>
                        </div>
                    )
                }
            })
        }else{
            return this.props.FieldColorPicker.FieldVals.map((langInputVal, key) => {
                // if(langInputVal.Lang == 'en'){
                if(langInputVal.Lang == this.props.codelang){
                    return (
                        <div className="color__main__content" key={key}>
                            <div>
                                <div onClick={this.handleClick} className="main__content__circle" style={{ background: langInputVal.Value }}></div>
                                <input type='hidden' value= {langInputVal.id} className='Field_Box_id'/>
                                {
                                    this.state.displayColorPicker ?
                                        <div style={popover}>
                                            <div style={cover} onClick={this.handleClose} />
                                            <SketchPicker onChange={this._changeColorVal} value={langInputVal.id}/>                                                
                                        </div>        
                                    :
                                    null
                                }
                            </div>
                            <div className="main__content__info">
                                <p className = "color-info">{langInputVal.Value}</p>
                            </div>
                        </div>
                    )
                }
            })
        }
    }     
    _changeColorVal = (color, event) => {  
                                   
        // Change Color For this Class Name color-info. 
        event.target.closest(".color__main__content").lastChild.children[0].innerHTML = color.hex;
        // Change Backgroud For this Class Name main__content__circle. 
        event.target.closest(".color__main__content").firstChild.children[0].style.background = color.hex; 
        // Get Id Value         
        const IdByLang = event.target.closest(".sketch-picker").parentElement.previousSibling.value; // Id Get From Input Hidden 

        let newTextVal = {"key": IdByLang,"value": color.hex,};
        if(this.props.newFields){                        
            let x = this.props.newFields; // first input 
            let s = -1;
            x.map((d, key)=>{
                if(d.key == newTextVal.key){
                    d.value =  newTextVal.value;                    
                    this.props.dispatch(SaveSCFLD.newValFields(x))
                    // break;
                }else{
                    s = 0;
                }
            })
            if(s >= 0 ){
                x.push(newTextVal);
                this.props.dispatch(SaveSCFLD.newValFields(x)); 
            }         
        }else{
            let x2 = []
            let lg = x2.push(newTextVal);

            this.props.dispatch(SaveSCFLD.newValFields(x2));            
        }
    }
    render() {           
        return (            
            <div className="setting--sidebar__color">                
                <div className="sidebar__color__main set--padding ">
                    <div className="color__main__content">                           
                        <div className="label generic--section">
                        {
                            this.props.FieldColorPicker.Name != '' ? 
                                <h4 className="setting--sidebar__header"> {this.props.FieldColorPicker.Name} </h4>             
                            : 
                                null
                        }                            
                            {this._setlangVal()}                            
                            <span className="focus-border"></span>
                        </div>
                    </div>
                </div>
                {this.props.LastField ? <div className="height_last_color"></div> : null }
            </div> 
        )        
    }
}
const mapStateToProps = state => ({
    newFields: state.newValFields.newFields
})
export default connect(mapStateToProps)(TagColorPicker)