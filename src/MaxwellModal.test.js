import test from 'ava';
import MaxwellModal from './MaxwellModal.js';
import Header from './Header.js';
import React from 'react';
import { shallow } from 'enzyme';


test("should construct a modal with a header", t => {
  const wrapper = shallow(<MaxwellModal />);
  t.is(wrapper.length, 1);
  t.is(wrapper.find(Header).length, 1);
})

