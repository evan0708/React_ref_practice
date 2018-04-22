import React from 'react';
import { render } from 'react-dom';


class CustomTextInput extends React.Component {
  constructor(props) {
    super(props);
    this.focusTextInput = this.focusTextInput.bind(this);
    this.getInputRef = this.getInputRef.bind(this);
  }

  focusTextInput() {
    // Explicitly focus the text input using the raw DOM API
    // Method 1:
    this.textInput.focus();
    
    // Method 2:
    const textInput2 = document.getElementById('inputId');
    //const btn = document.getElementById('btnId');
    //console.log(textInput2);
    //console.log(btn);
    textInput2.focus();
  }

  getInputRef(input) {
    console.log('call ref func'); // This will only call once func
    this.textInput = input;
  }

  render() {
    // Use the `ref` callback to store a reference to the text input DOM
    // element in an instance field (for example, this.textInput).
    return (
      <div>
        <input
          id="inputId"
          type="text"  //input can be any name, ex: input111
          // Method 1: ref={(input) => { this.textInput = input; }} /> 
          // Method 2
          ref={this.getInputRef}/>
        <input
          id="btnId"
          type="button"
          value="Focus the text input"
          onClick={this.focusTextInput}
        />
      </div>
    );
  }
}
/*
class AutoFocusTextInput extends React.Component {
  componentDidMount() {
    //console.dir(this.textInput);
    this.textInput.focusTextInput();
  }

  render() {
    return (
      <CustomTextInput
        ref={(input) => { this.textInput = input; }} />
    );
  }
}
*/

//render(<AutoFocusTextInput />, document.getElementById('root'));
render(<CustomTextInput />, document.getElementById('root'));
