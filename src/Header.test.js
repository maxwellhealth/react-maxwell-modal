import test from 'ava';
import Header from './Header.js';
import React from 'react';
import { shallow } from 'enzyme';


test("should construct a header with a title", t => {
  const wrapper = shallow(<Header title={"A new modal"} />);
  t.is(wrapper.find('h3').text(), "A new modal");
  //not dismissable by default
  t.is(wrapper.find('button').length, 0);
})

test("should construct a header with a title", t => {
  const wrapper = shallow(<Header title={"A newer modal"} dismissable={true}/>);
  t.is(wrapper.find('h3').text(), "A newer modal");
  //not dismissable by default
  t.is(wrapper.find('button').length, 1);
})
