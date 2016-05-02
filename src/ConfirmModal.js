import React from 'react';
import _ from 'lodash'
import Modal from './MaxwellModal'
import buttonCall from './buttonCall'
export default React.createClass({
  displayName: 'ConfirmModal',
  getDefaultProps: function() {
    return {
      noLabel: 'No',
      yesLabel: 'Yes'
    };
  },

  propTypes: {
    yesLabel: React.PropTypes.string,
    noLabel: React.PropTypes.string
  },
  yesButton: function() {
    buttonCall.call(this, 'onYes')
  },

  /**
   * [noButton description]
   * @return {[type]} [description]
   */

  noButton: function() {
    buttonCall.call(this, 'onNo')
  },
  render: function() {
    var confirmFooter = (
    <div>
        <button className="modal-buttons btn no-button" onClick={this.noButton}>{this.props.noLabel}</button>
        <button className="modal-buttons btn btn-primary yes-button" onClick={this.yesButton} >{this.props.yesLabel}</button>
      </div>
    );
    return (
      <Modal {...this.props}  footer={confirmFooter}>
      {this.props.children}
      </Modal>
      );
  }
});
