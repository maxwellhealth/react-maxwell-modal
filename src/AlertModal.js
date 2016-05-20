import React from 'react';
import Modal from './MaxwellModal'
import _ from 'lodash'
import buttonCall from './buttonCall'

export default React.createClass({
  displayName: 'AlertModal',
  getDefaultProps: function() {
    return {
      yesLabel: 'Yes'
    };
  },

  propTypes: {
    onHide: React.PropTypes.func.isRequired,
    yesLabel: React.PropTypes.string,
  },
  yesButton: function() {
    buttonCall.call(this, 'onYes')
  },

  render: function() {
    var alertFooter = (<button className="modal-buttons btn btn-primary yes-button"  onClick={this.yesButton}  >{this.props.yesLabel}</button>);
    if (this.props.yesButton) {
      alertFooter = this.props.yesButton
    }
    return (
      <Modal {...this.props} footer={alertFooter}>
      {this.props.children}
      </Modal>
      );
  }
});