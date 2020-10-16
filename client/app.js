// Browser Code

const React = require('react')
const ReactDOM = require('react-dom')

const Header = require('../components/Header.js')
const Footer = require('../components/Footer.js')
const MessageBoard = require('../components/MessageBoard.js')

ReactDOM.render(<Header />, document.getElementById('header'))
ReactDOM.render(<Footer />, document.getElementById('footer'))
ReactDOM.render(<MessageBoard messages={messages}/>, document.getElementById('message-board'))
