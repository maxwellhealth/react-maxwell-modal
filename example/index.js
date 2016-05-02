import React from 'react';
import { render } from 'react-dom';
import { ConfirmModal, MaxwellModal, AlertModal } from 'react-maxwell-modal';

function onYes(closeModal) {
  console.log('i\'ve clicked yes');
  closeModal(true);
}

function onNo(closeModal) {
  var a = confirm('Are you really sure')
  if (a) {
    closeModal(true);
  }
}

class ConfirmMaxwellModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    }
    this.displayName = 'ClickMeMaxwellModal';
    this.toggleModal = this.toggleModal.bind(this);
  }

  toggleModal() {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }
  render() {
    let customStyles = {
      outline: 'none',
    }
    return (
      <div className="ClickMeMaxwellModal">
      <button onClick={this.toggleModal}>Load Modal</button>
      <ConfirmModal
      ref="mymodal"
      isOpen={this.state.isOpen}
      title="Confirm Modal Example"
      dismissable={true}
      shouldCloseOnOverlayClick={true}
      onHide={this.toggleModal}
      customStyles={customStyles}
      yesLabel="Ok"
      noLabel="I'd rather not"
      onYes={onYes}
      onNo={onNo}
      >
        <span>FOO BAR BAZ</span>
        </ConfirmModal>
      </div>
      );
  }
}


class MaxwellModalExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    }
    this.displayName = 'ClickMeMaxwellModal';
    this.toggleModal = this.toggleModal.bind(this);
  }

  toggleModal() {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }
  render() {
    let customStyles = {
      outline: 'none',
    }
    return (
      <div className="ClickMeMaxwellModal">
      <button onClick={this.toggleModal}>Load Modal</button>
      <MaxwellModal
      ref="mymodal"
      isOpen={this.state.isOpen}
      title="Maxwell Modal Example"
      dismissable={true}
      shouldCloseOnOverlayClick={true}
      onHide={this.toggleModal}
      footer={"a custom footer: it could be a react component!"}
      >
        <span>A bunch of useless stuff</span>
        </MaxwellModal>
      </div>
      );
  }
}

class AlertModalExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    }
    this.displayName = 'ClickMeMaxwellModal';
    this.toggleModal = this.toggleModal.bind(this);
  }

  toggleModal() {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }
  render() {
    let customStyles = {
      outline: 'none',
    }
    return (
      <div className="ClickMeMaxwellModal">
      <button onClick={this.toggleModal}>Load Modal</button>
      <AlertModal
      ref="mymodal"
      isOpen={this.state.isOpen}
      title="Alert Modal Example"
      dismissable={false}
      shouldCloseOnOverlayClick={false}
      onHide={this.toggleModal}
      onYes={onYes}
      >
        <span>Notice the header is not dismissable and the overlay can't be clicked</span>
        </AlertModal>
      </div>
      );
  }
}



// Render first editor
render(
  <ConfirmMaxwellModal/>
  ,
  document.getElementById('example2')
);

render(
  <MaxwellModalExample/>
  ,
  document.getElementById('example')
);

render(
  <AlertModalExample/>
  ,
  document.getElementById('example3')
);

