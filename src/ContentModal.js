import React from 'react'
import Modal from 'react-modal';
import Header from './Header'
import _ from 'lodash'
class MaxwellContentModal extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'MaxwellModal';
    }
    render() {

    	var customStyles = _.extend({
    		overlay: {
        		backgroundColor: 'rgba(0, 0, 0, 0.5)'
		      }
		  },this.props.customStyles);

        return <Modal
		  isOpen={this.props.isOpen}
		  onAfterOpen={this.props.onShow}
		  onRequestClose={this.props.onHide}
		  className="modal-dialog"
		  closeTimeoutMS={0}
		  shouldCloseOnOverlayClick={this.props.shouldCloseOnOverlayClick}
		  style={customStyles}>
		  		<div className="modal-content">
				{this.props.children}
				</div>
		</Modal>;
    }
}

export default MaxwellContentModal;
