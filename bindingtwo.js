import React, { Component } from 'react';
  
class Bindtwo extends Component {
  
  constructor() {
    super();
    this.state = {
      subject: ""
    };
  }
  handleChange = event => {
    this.setState({
      subject: event.target.value
    })
  }
  render() {
    return (
      <div>
        <h4 style={{ color: "#68cf48" }}>ITEC</h4>
        <input placeholder="Enter Subject" 
        onChange={this.handleChange}></input>
        <p><b>{this.state.subject}</b> From view to component</p>
  
      </div>
    )
  }
}
export default Bindtwo;

