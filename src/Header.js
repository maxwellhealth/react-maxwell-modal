var React = require('react');

module.exports = React.createClass({
  displayName: 'MaxwellModalHeader',
  propTypes: {
    dismissable: React.PropTypes.bool,
    title: React.PropTypes.string
  },

  render: function () {
    var dismissable = this.props.dismissable ? (<button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={this.props.onRequestClose}><span aria-hidden="true">&times;</span></button>) : '';
    var header = (
      <div>
        {dismissable}
        <h3 >{this.props.title}</h3>
      </div>
      );
    return(<div className="modal-header">{header}</div>);
  }
});
