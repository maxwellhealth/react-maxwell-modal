import React from 'react';
import ContentModal from './ContentModal'
import Header from './Header'
import Footer from './Footer'

class MaxwellModal extends React.Component {
  constructor(props) {
    super(props);
    this.displayName = 'MaxwellModal';
  }
  render() {
    return <ContentModal {...this.props}>
            <Header  {...this.props}/>
            <div className="modal-body">
            {this.props.children}
            </div>
            <Footer {...this.props}>
              {this.props.footer}
            </Footer>
        </ContentModal>;
  }
}
MaxwellModal.defaultProps = {
  footer: ""
}
MaxwellModal.propTypes = {
  onHide: React.PropTypes.func.isRequired,
};
export default MaxwellModal;
