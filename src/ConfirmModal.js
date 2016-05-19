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
    onHide: React.PropTypes.func.isRequired,
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
    var yesButton = this.props.yesButton
    var noButton = this.props.noButton
    var confirmFooter = (
    <div>
        {noButton ? noButton : (<button className="modal-buttons btn no-button" onClick={this.noButton}>{this.props.noLabel}</button>)}
        {yesButton ? yesButton : (<button className="modal-buttons btn btn-primary yes-button" onClick={this.yesButton} >{this.props.yesLabel}</button>)}
      </div>
    );
    return (
      <Modal {...this.props}  footer={confirmFooter}>
      {this.props.children}
      </Modal>
      );
  }
});
