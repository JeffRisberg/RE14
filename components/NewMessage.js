import React from 'react';
import ReactDOM from 'react-dom';
const request = require('axios')

const url = 'http://localhost:3000/messages'
const fD = ReactDOM.findDOMNode

class NewMessage extends React.Component {
  constructor(props) {
    super(props)
    this.addMessage = this.addMessage.bind(this)
    this.keyup = this.keyup.bind(this)
  }
  addMessage() {
    let name = fD(this.refs.name).value.trim()
    let message = fD(this.refs.message).value.trim()
    if (!name || !message) {
      return console.error('Name and message cannot be empty')
    }
    this.props.addMessageCb({
      name: name,
      message: message
    })
    fD(this.refs.name).value = ''
    fD(this.refs.message).value = ''
  }
  keyup(e) {
    if (e.keyCode == 13) return this.addMessage()
  }
  render() {
    return (
      <div className="row-fluid" id="new-message">
        <div className="span12">
          <form className="well form-inline" onKeyUp={this.keyup} onSubmit={this.addMessage}>
            <input
              type="text" name="username"
              className="input-small" placeholder="name" ref="name"/>
            <input
              type="text" name="message" className="input-small"
              placeholder="message" ref="message" />
            <a id="send" className="btn btn-primary"
              onClick={this.addMessage}>POST</a>
          </form>
        </div>
      </div>
    )
  }
}

export default NewMessage;