/** @jsx React.DOM */
jest.dontMock('../src/Header.jsx');
jest.dontMock('react/addons');
jest.dontMock('lodash');

var React = require('react/addons');
var _ = require('lodash');
var Header = require('../src/Header.jsx');
var TestUtils = React.addons.TestUtils;


describe('Header',function() {
  it('should render title and button', function() {
    var testTitle = 'Test Title';
    var header = <Header
      title={testTitle}
      dismissable={true}/>;
    var DOM = TestUtils.renderIntoDocument(header);
    var button = TestUtils.findRenderedDOMComponentWithTag(DOM, 'button');
    expect(button.getDOMNode().textContent).toBe('×');
    var h3 = TestUtils.findRenderedDOMComponentWithTag(DOM, 'h3');
    expect(h3.getDOMNode().textContent).toBe(testTitle);

  });
  it('should render just title', function () {
    var testTitle = 'Test Title';
    var header = <Header
      title={testTitle}
      dismissable={false}/>;
    var DOM = TestUtils.renderIntoDocument(header);
    var buttons = TestUtils.scryRenderedDOMComponentsWithTag(DOM, 'button');
    expect(buttons.length).toBe(0);
    var h3 = TestUtils.findRenderedDOMComponentWithTag(DOM, 'h3');
    expect(h3.getDOMNode().textContent).toBe(testTitle);
  });
  it('should render just content', function () {
    var testTitle = 'Test Title';
    var header = <Header
      title={testTitle}
      content={'foo'}
      dismissable={false}/>;
    var DOM = TestUtils.renderIntoDocument(header);
    expect(DOM.getDOMNode().innerHTML).toBe('foo');
  });
});