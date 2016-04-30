import test from 'ava';
import ContentModal from './ContentModal.js';
import Modal from 'react-modal';
import React from 'react';
import { shallow } from 'enzyme';


test("should construct a modal with text", t => {
  const wrapper = shallow(<ContentModal>Hi there</ContentModal>);
  t.is(wrapper.find('.modal-content').text(), "Hi there");
  t.is(wrapper.find('.modal-content').length, 1);
})

test("should construct a modal with custom style", t => {
  let customStyles = {
    content: {
      top: '20px'
    }
  }
  const wrapper = shallow(<ContentModal customStyles={customStyles}>Hi there</ContentModal>);
  let props = wrapper.find(Modal).props();
  t.deepEqual(props.style, {
    overlay: {
      backgroundColor: 'rgba(0, 0, 0, 0.5)'
    },
    content: {
      top: '20px'
    }
  })
})
