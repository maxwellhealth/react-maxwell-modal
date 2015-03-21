/** @jsx React.DOM */
jest.dontMock('../src/Modal.jsx');
jest.dontMock('react/addons');
jest.dontMock('lodash');
jest.dontMock('jquery');
jest.dontMock('../bower_components/bootstrap/dist/js/bootstrap.min.js');

var React = require('react/addons');
var _ = require('lodash');
var Modal = require('../src/Modal.jsx');
var $ = require('jquery');
global.jQuery = $;
global.$ = $;
require('../bower_components/bootstrap/dist/js/bootstrap.min.js');
var TestUtils = React.addons.TestUtils;


describe('Modal',function() {
  it('should render body and footer', function(done) {
    var show = false;
    var hide = false;
    var testTitle = 'Test Title';
    var testBody = 'Test Body';
    var testFooter = 'Test Footer';
    var modal = <Modal show={true}
      title={testTitle}
      body={testBody}
      footer={testFooter}
      onShow={function() {show = true;}}
      onHide={function() {hide = true;expect(hide).toBe(true); done()}}
      dismissable={true}/>;
    expect(show).toBe(false);
    expect(hide).toBe(false);
    var DOM = TestUtils.renderIntoDocument(modal);
    expect(show).toBe(true);
    var button = TestUtils.findRenderedDOMComponentWithTag(DOM, 'button');
    expect(button.getDOMNode().textContent).toBe('×');
    var h3 = TestUtils.findRenderedDOMComponentWithTag(DOM, 'h3');
    expect(h3.getDOMNode().textContent).toBe(testTitle);
    var body = TestUtils.findRenderedDOMComponentWithClass(DOM, 'modal-body');
    expect(body.getDOMNode().innerHTML).toBe(testBody);
    var footer = TestUtils.findRenderedDOMComponentWithClass(DOM, 'modal-footer');
    expect(footer.getDOMNode().innerHTML).toBe(testFooter);
    TestUtils.Simulate.click(button.getDOMNode());
  });
  it('should fire hidden event', function(done) {
    var hide = false;
    var testTitle = 'Test Title';
    var testBody = 'Test Body';
    var testFooter = 'Test Footer';
    var modal = <Modal show={true}
      title={testTitle}
      body={testBody}
      footer={testFooter}
      onHide={function() {hide = true;expect(hide).toBe(true); done}}
      dismissable={true}/>;
    expect(hide).toBe(false);
    var DOM = TestUtils.renderIntoDocument(modal);
    $(DOM.refs.modal.getDOMNode()).trigger('hidden.bs.modal');
  });
  it('should fire hidden event with no callback', function(done) {
    var hide = false;
    var testTitle = 'Test Title';
    var testBody = 'Test Body';
    var testFooter = 'Test Footer';
    var modal = <Modal show={true}
      title={testTitle}
      body={testBody}
      footer={testFooter}
      dismissable={true}/>;
    expect(hide).toBe(false);
    var DOM = TestUtils.renderIntoDocument(modal);
    $(DOM.refs.modal.getDOMNode()).trigger('hidden.bs.modal');
  });
  it('should render body and footer not dismissable and no events', function(done) {
    var show = false;
    var hide = false;
    var testTitle = 'Test Title';
    var testBody = 'Test Body';
    var testFooter = 'Test Footer';
    var modal = <Modal
      show={false}
      title={testTitle}
      body={testBody}
      footer={testFooter}
      dismissable={false}/>;
    var DOM = TestUtils.renderIntoDocument(modal);
    var h3 = TestUtils.findRenderedDOMComponentWithTag(DOM, 'h3');
    expect(h3.getDOMNode().textContent).toBe(testTitle);
    var body = TestUtils.findRenderedDOMComponentWithClass(DOM, 'modal-body');
    expect(body.getDOMNode().innerHTML).toBe(testBody);
    var footer = TestUtils.findRenderedDOMComponentWithClass(DOM, 'modal-footer');
    expect(footer.getDOMNode().innerHTML).toBe(testFooter);

  });
  it('should render body and footer not dismissable and no events', function(done) {
    var content = 'content'
    var modal = <Modal content={content}/>;
    var DOM = TestUtils.renderIntoDocument(modal);
    var body = TestUtils.findRenderedDOMComponentWithClass(DOM, 'modal-content');
    expect(body.getDOMNode().innerHTML).toBe(content);

  });
});