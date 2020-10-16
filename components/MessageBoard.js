import React from 'react';
import ReactDOM from 'react-dom';
const request = require('axios')

const url = 'http://localhost:3000/messages'
const fD = ReactDOM.findDOMNode

class MessageBoard extends React.Component {

  constructor(ops) {
    super(ops)
    this.addMessage = this.addMessage.bind(this)
    if (this.props.messages)
      this.state = {messages: this.props.messages}
  }
  componentDidMount() {
    request.get(url)
      .then(response => response.data)
      .then(messages => {
        if(!messages || !messages.length){
          return;
        }
        this.setState({messages: messages})
      })
  }
  addMessage(message) {
    let messages = this.state.messages
    request.post(url, message)
      .then(result => result.data)
      .then((data) =>{
        if(!data){
          return console.error('Failed to save')
        }
        messages.unshift(data)
        this.setState({messages: messages})
    })
  }
  render() {
    return (
      <div>
        <NewMessage messages={this.state.messages} addMessageCb={this.addMessage} />
        <MessageList messages={this.state.messages} />
      </div>
    )
  }
}

export default MessageBoard;