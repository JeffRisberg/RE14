import React from 'react';
import ReactDOM from 'react-dom';
const request = require('axios')

const url = 'http://localhost:3000/messages'
const fD = ReactDOM.findDOMNode

class MessageList extends React.Component {

  render() {
    var messages = this.props.messages
    if (!messages || !messages.length>0) return (
        <p>No messages yet</p>
    )
    return (
      <table className="table">
        <caption>Messages</caption>
        <thead>
          <tr>
            <th className="span2">Name</th>
            <th className="span10">Message</th>
          </tr>
        </thead>
        <tbody>
          {messages.map(function(message){
            return (
              <tr key={message._id}>
                <td className="span2">{message.name}</td>
                <td className="span10">{message.message}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    )
  }
}

export default MessageList;