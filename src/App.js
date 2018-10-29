import React, { Component } from 'react';

class App extends Component{
  constructor(){
    super();
    this.state = {
      input:'',
      message: []
    }
  }
  handleChange = (e)=>{
    const inputs = e.target.value;
    this.setState({
      input:inputs
    })
  }
  submitMessage = () =>{
    const newMessage = [...this.state.message, this.state.input];
    this.setState({
      input:'',
      message:newMessage
    })
  }
  render(){
    const itemMess = this.state.message.map((item,ikey)=><li key={ikey}>{item}</li>)
    return(
      <div>
        <h2>Type message to add</h2>
        <input type="text" value={this.state.input} onChange={this.handleChange} placeholder="Enter your message here..."/>
        <button onClick={this.submitMessage}>Add Message</button>
        <ul>{itemMess}</ul>
      </div>
    );
  }
}
export default App;