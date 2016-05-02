#React-Maxwell-Modal

[![Build Status](https://travis-ci.org/maxwellhealth/react-maxwell-modal.svg?branch=master)](https://travis-ci.org/maxwellhealth/react-maxwell-modal)

[![Coverage Status](https://coveralls.io/repos/maxwellhealth/react-maxwell-modal/badge.svg)](https://coveralls.io/r/maxwellhealth/react-maxwell-modal)

[React-Maxwell-Modal Github Page](http://maxwellhealth.github.io/react-maxwell-modal)

##Install


`npm install react-maxwell-modal --save`


##Usage

There are four types of modals available

### Content Modal


####Props



|Prop|Type| Required|
|-----|----|--------|
|onShow|function| false|
|onHide|function| true|
|isOpen|bool| false|
|shouldCloseOnOverlayClick|bool| false|


```javascript
import { ContentModal } from 'react-maxwell-modal';

class ContentModalExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    }
    this.displayName = 'ContentModalExample';
    this.toggleModal = this.toggleModal.bind(this);
  }

  toggleModal() {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }
  render() {
    return (
      <div className="ClickMeMaxwellModal">
      <button onClick={this.toggleModal}>Load Modal</button>
      <ContentModal
      ref="mymodal"
      isOpen={this.state.isOpen}
      shouldCloseOnOverlayClick={true}
      onHide={this.toggleModal}
      >
        <span>A bunch of useless stuff</span>
        </ContentModal>
      </div>
      );
  }
}

```


### Maxwell Modal


####Props


|Prop|Type| Required|
|-----|----|--------|
|footer|ReactComponent/String| false|
|onShow|function| false|
|onHide|function| true|
|title|string| false|
|isOpen|bool| false|
|dismissable|bool| false|
|shouldCloseOnOverlayClick|bool| false|

```javascript
import { MaxwellModal } from 'react-maxwell-modal';

class MaxwellModalExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    }
    this.displayName = 'MaxwellModalExample';
    this.toggleModal = this.toggleModal.bind(this);
  }

  toggleModal() {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }
  render() {
    return (
      <div className="ClickMeMaxwellModal">
      <button onClick={this.toggleModal}>Load Modal</button>
      <MaxwellModal
      ref="mymodal"
      isOpen={this.state.isOpen}
      title={"this is a title"}
      shouldCloseOnOverlayClick={true}
      onHide={this.toggleModal}
      >
        <span>A bunch of useless stuff</span>
        </MaxwellModal>
      </div>
      );
  }
}

```


###Confirm Modal

A replacement for the confirm box.
This produces a modal with two buttons, yes and no. their labels are configurable as well as what occurs on yes and on no.

####Props

|Prop|Type| Required|
|-----|----|--------|
|onYes|function| false|
|onNo|function| false|
|yesLabel|string| false|
|noLabel|string| false|
|onShow|function| false|
|onHide|function| true|
|title|string| false|
|isOpen|bool| false|
|dismissable|bool| false|
|shouldCloseOnOverlayClick|bool| false|


```javascript
import { ConfirmModal } from 'react-maxwell-modal';

class ConfirmModalExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    }
    this.displayName = 'ConfirmModalExample';
    this.toggleModal = this.toggleModal.bind(this);
    this.onYes = this.onYes.bind(this);
    this.onNo = this.onNo.bind(this);
  }
  onYes(closeModal) {
    closeModal(true)
  }
  onNo(closeModal) {
    closeModal(true)
  }
  toggleModal() {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }
  render() {
    return (
      <div className="ClickMeMaxwellModal">
      <button onClick={this.toggleModal}>Load Modal</button>
      <ConfirmModal
      ref="mymodal"
      isOpen={this.state.isOpen}
      shouldCloseOnOverlayClick={true}
      onHide={this.toggleModal}
      onYes={this.onYes}
      onNo={this.onNo}
      >
        <span>A bunch of useless stuff</span>
        </ConfirmModal>
      </div>
      );
  }
}

```


###Alert Modal

A replacement for the alert box

####Props

|Prop|Type| Required|
|-----|----|--------|
|onYes|function| false|
|yesLabel|string| false|
|onShow|function| false|
|onHide|function| true|
|title|string| false|
|isOpen|bool| false|
|dismissable|bool| false|
|shouldCloseOnOverlayClick|bool| false|

```javascript
import { AlertModal } from 'react-maxwell-modal';

class AlertModalExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    }
    this.displayName = 'AlertModalExample';
    this.toggleModal = this.toggleModal.bind(this);
    this.onYes = this.onYes.bind(this);
  }
  onYes(closeModal) {
    closeModal(true)
  }
  toggleModal() {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }
  render() {
    return (
      <div className="ClickMeMaxwellModal">
      <button onClick={this.toggleModal}>Load Modal</button>
      <AlertModal
      ref="mymodal"
      isOpen={this.state.isOpen}
      shouldCloseOnOverlayClick={true}
      onHide={this.toggleModal}
      onYes={this.onYes}
      >
        <span>A bunch of useless stuff</span>
        </AlertModal>
      </div>
      );
  }
}

```