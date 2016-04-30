var React = require('react');

module.exports = React.createClass({
  displayName: 'MaxwellModalFooter',
  render: function () {
    return(<div className="modal-footer">{this.props.children}</div>);
  }
});
