/** @jsx React.DOM */
var React = require('react/addons');
var Modal = require('./Modal.jsx');
var $ = require('jquery');
module.exports  = React.createClass({
  displayName: 'MaxwellConfirmModal',
  getDefaultProps: function() {
    return {
      noLabel:'No',
      yesLabel:'Yes'
    };
  },

  propTypes: {
    onYes: React.PropTypes.func,
    onNo: React.PropTypes.func,
    yesLabel: React.PropTypes.string,
    noLabel: React.PropTypes.string
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

  /**
   * [noButton description]
   * @return {[type]} [description]
   */
  noButton: function() {
    var success = true;

    if (this.props.onNo) {
      success = this.props.onNo();
    }

    if (success) {
      $(this.refs.modal.getDOMNode()).modal('hide');
    }
  },
  render: function() {
    var confirmFooter = (
      <div>
        <button className="modal-buttons btn no-button" onClick={this.noButton}>{this.props.noLabel}</button>
        <button className="modal-buttons btn btn-primary yes-button" onClick={this.yesButton} >{this.props.yesLabel}</button>
      </div>
    );
    return (
      <Modal {...this.props}  ref="modal" footer={confirmFooter}/>
    );
  }
});