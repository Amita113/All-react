import React, { Component } from 'react';
  
class Bindone extends Component {
    
  constructor() {
    super();
    this.state = {
      subject: "ReactJS"
    };
  }
  
  render() {
    return (
      <div style={{ textAlign: "center" }}>
        <h4 style={{ color: "#68cf48" }}>ITEC</h4>
        <p><b>{this.state.subject}</b> One way data binding</p>

        <p>Implementing Component to View Data Binding:</p>
  
      </div>
    )
  }
}
  
export default Bindone;