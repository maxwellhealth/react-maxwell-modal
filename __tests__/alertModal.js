/** @jsx React.DOM */
jest.dontMock('../src/AlertModal.jsx');
jest.dontMock('react/addons');
jest.dontMock('lodash');
jest.dontMock('jquery');
jest.dontMock('../bower_components/bootstrap/dist/js/bootstrap.min.js');

var React = require('react/addons');
var _ = require('lodash');
var AlertModal = require('../src/AlertModal.jsx');
var $ = require('jquery');
global.jQuery = $;
global.$ = $;
require('../bower_components/bootstrap/dist/js/bootstrap.min.js');
var TestUtils = React.addons.TestUtils;


describe('AlertModal',function() {
  it('should render yes button', function() {
    var testTitle = 'Test Title';
    var header = <AlertModal
      yesLabel={testTitle}
      header={'foo'}/>;
    var DOM = TestUtils.renderIntoDocument(header);
    var button = TestUtils.findRenderedDOMComponentWithTag(DOM, 'button');
    expect(button.getDOMNode().textContent).toBe(testTitle);

  });
  it('should render yes function', function() {
    var testTitle = 'Test Title';
    var onYes = false;
    var header = <AlertModal
      yesLabel={testTitle}
      onYes={function() {onYes=true;return false;}}
      header={'foo'}/>;
    var DOM = TestUtils.renderIntoDocument(header);
    var button = TestUtils.findRenderedDOMComponentWithTag(DOM, 'button');
    TestUtils.Simulate.click(button.getDOMNode());

  });
  it('should render yes function with success', function() {
    var testTitle = 'Test Title';
    var onYes = false;
    var header = <AlertModal
      yesLabel={testTitle}
      onYes={function() {onYes=true;return true;}}
      header={'foo'}/>;
    var DOM = TestUtils.renderIntoDocument(header);
    var button = TestUtils.findRenderedDOMComponentWithTag(DOM, 'button');
    TestUtils.Simulate.click(button.getDOMNode());

  });
  it('should click on yes button', function() {
    var testTitle = 'Test Title';
    var onYes = false;
    var header = <AlertModal
      yesLabel={testTitle}
      header={'foo'}/>;
    var DOM = TestUtils.renderIntoDocument(header);
    var button = TestUtils.findRenderedDOMComponentWithTag(DOM, 'button');
    TestUtils.Simulate.click(button.getDOMNode());

  });
});