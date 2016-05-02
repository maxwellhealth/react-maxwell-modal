import test from 'ava';
import Footer from './Footer.js';
import React from 'react';
import { shallow } from 'enzyme';


test("should construct a header with a title", t => {
  const wrapper = shallow(<Footer>Hi there</Footer>);
  t.is(wrapper.text(), "Hi there");
})
