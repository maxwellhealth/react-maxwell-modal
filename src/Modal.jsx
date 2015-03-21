/** @jsx React.DOM */
var React = require('react/addons');
var ModalHeader = require('./Header.jsx');
var $ = require('jquery');
module.exports = React.createClass({
  displayName: 'MaxwellModal',
  getInitialState: function() {
    return {};
  },
  getDefaultProps: function() {
    return {
      show: true,
      dismissable: true
    };
  },
  propTypes: {
    show: React.PropTypes.bool,
    onShow: React.PropTypes.func,
    onHide: React.PropTypes.func,
    dismissable: React.PropTypes.bool
  },
  componentDidMount: function() {
    var options  = {};
    var self = this;
    if (this.props.dismissable === false) {
      options ={
        "backdrop" : "static",
        "keyboard" : false
      };
    }
    //apply the options and treat the modal as a modal
    if (this.props.show) {
      $(this.refs.modal.getDOMNode()).modal(options);
    }
        // run the on show function
    if (this.props.onShow) {
      this.props.onShow();
    }

    // if its hidden run the on hide function and remove the view
    $(this.refs.modal.getDOMNode()).on('hidden.bs.modal',function() {
      if (self.props.onHide) {
        self.props.onHide();
      }
      var node = self.getDOMNode();
      React.unmountComponentAtNode(node);
      $(node).remove();
    });

  },
  render: function () {
    var content  = (
      <div className="modal-content">
        <ModalHeader
            content={this.props.header}
            dismissable={this.props.dismissable}
            title={this.props.title}
          />
          <div className="modal-body">{this.props.body}</div>
          <div className="modal-footer">{this.props.footer}</div>
      </div>);

    if (this.props.content) {
      content = (<div className="modal-content">{this.props.content}</div>);
    }

    return (
      <div className="modal fade" ref="modal">
        <div className="modal-dialog">
          {content}
        </div>
      </div>
    );
  }
});
