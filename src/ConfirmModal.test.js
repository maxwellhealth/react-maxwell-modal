import test from 'ava';
import ConfirmModal from './ConfirmModal.js';
import MaxwellModal from './MaxwellModal';
import Modal from 'react-modal';
import React from 'react';
import { render } from 'react-dom';
import sinon from 'sinon'
import { Simulate } from 'react-addons-test-utils'


global.document = require('jsdom').jsdom('<body><div id="foo"></div></body>');
global.window = document.defaultView;
global.navigator = window.navigator;

test("should construct a confirm modal with text and yes and no buttons", t => {
  let container = document.getElementById("foo")
  Modal.setAppElement(container);
  render(<div><ConfirmModal isOpen={true}  onHide={() => {
  }}>Hi there</ConfirmModal></div>, container);
  t.truthy(container.innerHTML.includes("Hi there"))
  //the yes and no buttons
  t.truthy(container.innerHTML.includes("Yes"))
  t.truthy(container.innerHTML.includes("No"))

});
test("should display custom continue button", t => {
  let container = document.getElementById("foo")
  Modal.setAppElement(container);
  const onHide = sinon.spy()
  let customButton = <button  className="modal-buttons btn btn-primary yes-button">Hold your horses buster</button>
  render(<div><ConfirmModal isOpen={true} onYes={true} onHide={onHide} continueButton={customButton}>Hi there</ConfirmModal></div>, container);
  const button = container.querySelector('.yes-button');
  t.is(button.textContent, "Hold your horses buster");

})
test("should close modal if onYes == true", t => {
  let container = document.getElementById("foo")
  Modal.setAppElement(container);
  const onHide = sinon.spy()
  render(<div><ConfirmModal isOpen={true} onYes={true} onHide={onHide}>Hi there</ConfirmModal></div>, container);
  const button = container.querySelector('.yes-button');
  Simulate.click(button)
  t.true(onHide.calledOnce)

});
test("should not close modal if onYes == false", t => {
  let container = document.getElementById("foo")
  Modal.setAppElement(container);
  const onHide = sinon.spy()
  render(<div><ConfirmModal isOpen={true} onYes={"false"} onHide={onHide}>Hi there</ConfirmModal></div>, container);
  const button = container.querySelector('.yes-button');
  Simulate.click(button)
  t.false(onHide.calledOnce)

});
test("should not close modal if onYes doesnt exist", t => {
  let container = document.getElementById("foo")
  Modal.setAppElement(container);
  const onHide = sinon.spy()
  render(<div><ConfirmModal isOpen={true} onHide={onHide}>Hi there</ConfirmModal></div>, container);
  const button = container.querySelector('.yes-button');
  Simulate.click(button)
  t.false(onHide.calledOnce)

});


test("should close modal if onYes is a function with an arity of 1 and calls closeModal(true)", t => {
  let container = document.getElementById("foo")
  Modal.setAppElement(container);
  const onHide = sinon.spy()
  render(<div><ConfirmModal isOpen={true} onYes={(closeModal) => {
    closeModal(true)
  }} onHide={onHide}>Hi there</ConfirmModal></div>, container);
  const button = container.querySelector('.yes-button');
  Simulate.click(button)
  t.true(onHide.calledOnce)

});



test("should  not close modal if onYes is a function with an arity of 1 and calls closeModal(false)", t => {
  let container = document.getElementById("foo")
  Modal.setAppElement(container);
  const onHide = sinon.spy()
  render(<div><ConfirmModal isOpen={true} onYes={(closeModal) => {
    closeModal(false)
  }} onHide={onHide}>Hi there</ConfirmModal></div>, container);
  const button = container.querySelector('.yes-button');
  Simulate.click(button)
  t.false(onHide.calledOnce)

});
test("should close modal if onYes is a function with an arity of 0 and returns true", t => {
  let container = document.getElementById("foo")
  Modal.setAppElement(container);
  const onHide = sinon.spy()
  render(<div><ConfirmModal isOpen={true} onYes={() => {
    return true;
  }
  } onHide={onHide}>Hi there</ConfirmModal></div>, container);
  const button = container.querySelector('.yes-button');
  Simulate.click(button)
  t.true(onHide.calledOnce)

});



test("should  not close modal if onYes is a function with an arity of 0 and returns false", t => {
  let container = document.getElementById("foo")
  Modal.setAppElement(container);
  const onHide = sinon.spy()
  render(<div><ConfirmModal isOpen={true} onYes={() => {
    return false;
  }
  } onHide={onHide}>Hi there</ConfirmModal></div>, container);
  const button = container.querySelector('.yes-button');
  Simulate.click(button)
  t.false(onHide.calledOnce)

});

test("should  not close modal if onYes is a function with an arity of 2 and returns false", t => {
  let container = document.getElementById("foo")
  Modal.setAppElement(container);
  const onHide = sinon.spy()
  render(<div><ConfirmModal isOpen={true} onYes={(closeModal, foo) => {
    return false;
  }
  } onHide={onHide}>Hi there</ConfirmModal></div>, container);
  const button = container.querySelector('.yes-button');
  Simulate.click(button)
  t.false(onHide.calledOnce)

});

/**
 * ON NO
 */

test("should close modal if onNo == true", t => {
  let container = document.getElementById("foo")
  Modal.setAppElement(container);
  const onHide = sinon.spy()
  render(<div><ConfirmModal isOpen={true} onNo={true} onHide={onHide}>Hi there</ConfirmModal></div>, container);
  const button = container.querySelector('.no-button');
  Simulate.click(button)
  t.true(onHide.calledOnce)

});
test("should not close modal if onNo == false", t => {
  let container = document.getElementById("foo")
  Modal.setAppElement(container);
  const onHide = sinon.spy()
  render(<div><ConfirmModal isOpen={true} onNo={"false"} onHide={onHide}>Hi there</ConfirmModal></div>, container);
  const button = container.querySelector('.no-button');
  Simulate.click(button)
  t.false(onHide.calledOnce)

});
test("should not close modal if onNo doesnt exist", t => {
  let container = document.getElementById("foo")
  Modal.setAppElement(container);
  const onHide = sinon.spy()
  render(<div><ConfirmModal isOpen={true} onHide={onHide}>Hi there</ConfirmModal></div>, container);
  const button = container.querySelector('.no-button');
  Simulate.click(button)
  t.false(onHide.calledOnce)

});


test("should close modal if onNo is a function with an arity of 1 and calls closeModal(true)", t => {
  let container = document.getElementById("foo")
  Modal.setAppElement(container);
  const onHide = sinon.spy()
  render(<div><ConfirmModal isOpen={true} onNo={(closeModal) => {
    closeModal(true)
  }} onHide={onHide}>Hi there</ConfirmModal></div>, container);
  const button = container.querySelector('.no-button');
  Simulate.click(button)
  t.true(onHide.calledOnce)

});



test("should  not close modal if onNo is a function with an arity of 1 and calls closeModal(false)", t => {
  let container = document.getElementById("foo")
  Modal.setAppElement(container);
  const onHide = sinon.spy()
  render(<div><ConfirmModal isOpen={true} onNo={(closeModal) => {
    closeModal(false)
  }} onHide={onHide}>Hi there</ConfirmModal></div>, container);
  const button = container.querySelector('.no-button');
  Simulate.click(button)
  t.false(onHide.calledOnce)

});
test("should close modal if onNo is a function with an arity of 0 and returns true", t => {
  let container = document.getElementById("foo")
  Modal.setAppElement(container);
  const onHide = sinon.spy()
  render(<div><ConfirmModal isOpen={true} onNo={() => {
    return true;
  }
  } onHide={onHide}>Hi there</ConfirmModal></div>, container);
  const button = container.querySelector('.no-button');
  Simulate.click(button)
  t.true(onHide.calledOnce)

});



test("should  not close modal if onNo is a function with an arity of 0 and returns false", t => {
  let container = document.getElementById("foo")
  Modal.setAppElement(container);
  const onHide = sinon.spy()
  render(<div><ConfirmModal isOpen={true} onNo={() => {
    return false;
  }
  } onHide={onHide}>Hi there</ConfirmModal></div>, container);
  const button = container.querySelector('.no-button');
  Simulate.click(button)
  t.false(onHide.calledOnce)

});

test("should  not close modal if onNo is a function with an arity of 0 and returns false", t => {
  let container = document.getElementById("foo")
  Modal.setAppElement(container);
  const onHide = sinon.spy()
  render(<div><ConfirmModal isOpen={true} onNo={(closeModal, foo) => {
    return false;
  }
  } onHide={onHide}>Hi there</ConfirmModal></div>, container);
  const button = container.querySelector('.no-button');
  Simulate.click(button)
  t.false(onHide.calledOnce)

});