/** @jsx React.DOM */
var React = require('react/addons');
var Modal = require('./Modal.jsx');
var $ = require('jquery');

module.exports  = React.createClass({
  displayName: 'MaxwellAlertModal',
  getDefaultProps: function() {
    return {
      yesLabel:'Yes'
    };
  },

  propTypes: {
    onYes: React.PropTypes.func,
    yesLabel: React.PropTypes.string
  },
  yesButton: function() {
    var success = true;

    if (this.props.onYes) {
      success = this.props.onYes();
    }

    if (success) {
      $(this.refs.modal.getDOMNode()).modal('hide');
    }
  },
  render: function() {
    var alertFooter = (<button className="modal-buttons btn btn-primary yes-button"  onClick={this.yesButton}  >{this.props.yesLabel}</button>);
    return (
      <Modal {...this.props} ref="modal" footer={alertFooter}/>
    );
  }
});