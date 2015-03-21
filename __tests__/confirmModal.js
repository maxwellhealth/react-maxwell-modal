/** @jsx React.DOM */
jest.dontMock('../src/ConfirmModal.jsx');
jest.dontMock('react/addons');
jest.dontMock('lodash');
jest.dontMock('jquery');
jest.dontMock('../bower_components/bootstrap/dist/js/bootstrap.min.js');

var React = require('react/addons');
var _ = require('lodash');
var AlertModal = require('../src/ConfirmModal.jsx');
var $ = require('jquery');
global.jQuery = $;
global.$ = $;
require('../bower_components/bootstrap/dist/js/bootstrap.min.js');
var TestUtils = React.addons.TestUtils;


describe('ConfirmModal',function() {
  it('should render yes button', function() {
    var testTitle = 'Test Title';
    var testNoTitle = 'Test NO Title';
    var header = <AlertModal
      yesLabel={testTitle}
      noLabel={testNoTitle}
      header={'foo'}/>;
    var DOM = TestUtils.renderIntoDocument(header);
    var buttons = TestUtils.scryRenderedDOMComponentsWithTag(DOM, 'button');
    expect(buttons[0].getDOMNode().textContent).toBe(testNoTitle);
    expect(buttons[1].getDOMNode().textContent).toBe(testTitle);

  });
  it('should render yes and no function', function() {
    var testTitle = 'Test Title';
    var onYes = false;
    var onNo = false;
    var header = <AlertModal
      yesLabel={testTitle}
      onYes={function() {onYes=true;return false;}}
      onNo={function() {onNo=true;return false;}}
      header={'foo'}/>;
    var DOM = TestUtils.renderIntoDocument(header);
    var buttons = TestUtils.scryRenderedDOMComponentsWithTag(DOM, 'button');
    TestUtils.Simulate.click(buttons[0].getDOMNode());
    expect(onNo).toBe(true);
    expect(onYes).toBe(false);
    TestUtils.Simulate.click(buttons[1].getDOMNode());
    expect(onNo).toBe(true);
    expect(onYes).toBe(true);
  });
  it('should render yes and no function on returns true', function() {
    var testTitle = 'Test Title';
    var onYes = false;
    var onNo = false;
    var header = <AlertModal
      yesLabel={testTitle}
      onYes={function() {onYes=true;return true;}}
      onNo={function() {onNo=true;return false;}}
      header={'foo'}/>;
    var DOM = TestUtils.renderIntoDocument(header);
    var buttons = TestUtils.scryRenderedDOMComponentsWithTag(DOM, 'button');
    TestUtils.Simulate.click(buttons[0].getDOMNode());
    expect(onNo).toBe(true);
    expect(onYes).toBe(false);
    TestUtils.Simulate.click(buttons[1].getDOMNode());
    expect(onNo).toBe(true);
    expect(onYes).toBe(true);
  });
  it('should render clicks but no returns', function() {
    var testTitle = 'Test Title';
    var onYes = false;
    var onNo = false;
    var header = <AlertModal
      yesLabel={testTitle}
      header={'foo'}/>;
    var DOM = TestUtils.renderIntoDocument(header);
    var buttons = TestUtils.scryRenderedDOMComponentsWithTag(DOM, 'button');
    TestUtils.Simulate.click(buttons[0].getDOMNode());
  });
  it('should render clicks but no returns', function() {
    var testTitle = 'Test Title';
    var onYes = false;
    var onNo = false;
    var header = <AlertModal
      yesLabel={testTitle}
      header={'foo'}/>;
    var DOM = TestUtils.renderIntoDocument(header);
    var buttons = TestUtils.scryRenderedDOMComponentsWithTag(DOM, 'button');
    TestUtils.Simulate.click(buttons[1].getDOMNode());
  });
  it('should render yes and no function the other returns true', function() {
    var testTitle = 'Test Title';
    var onYes = false;
    var onNo = false;
    var header = <AlertModal
      yesLabel={testTitle}
      onYes={function() {onYes=true;return true;}}
      onNo={function() {onNo=true;return true;}}
      header={'foo'}/>;
    var DOM = TestUtils.renderIntoDocument(header);
    var buttons = TestUtils.scryRenderedDOMComponentsWithTag(DOM, 'button');
    TestUtils.Simulate.click(buttons[0].getDOMNode());
    expect(onNo).toBe(true);
  });
});
