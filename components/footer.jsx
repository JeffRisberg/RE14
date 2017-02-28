const React = require('react')

module.exports = Footer = React.createClass({
  render: function(){
    return (
      <div>
        <hr />
        <div className="row-fluid">
          <div className="span12">
            <div>From the book "React Quickly" (Manning Press)</div>
          </div>
        </div>
      </div>
    )
  }
})
